import numpy as np
import pandas as pd
import os
import string
import contractions

from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

from tensorflow.keras.optimizers import Adam
from tensorflow.keras.models import load_model

import nltk
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer

nltk_path = os.getcwd() + "\\nltk_data\\"
nltk.download("wordnet", download_dir=nltk_path)
nltk.download("stopwords", download_dir=nltk_path)
nltk.download("punkt_tab", download_dir=nltk_path)

model_path = "./sentiment_model.h5"


def model_loader():
    model = load_model(model_path)
    optimizer = Adam(learning_rate=0.0001)
    model.compile(
        optimizer=optimizer,
        loss="sparse_categorical_crossentropy",
        metrics=["accuracy"],
    )

    return model


def model_predict(model, data: list):

    try:
        nltk_path = os.getcwd() + "\\nltk_data\\"
        nltk.data.path.append(nltk_path)

        def contract(text):
            if isinstance(text, str):
                return contractions.fix(text)
            else:
                return "Bad String"

        def preprocess_text(text):
            stop_words = set(stopwords.words("english"))
            lemmatizer = WordNetLemmatizer()
            text = text.lower()
            text = "".join([char for char in text if char not in string.punctuation])
            words = word_tokenize(text)  
            words = [
                lemmatizer.lemmatize(word) for word in words if word not in stop_words
            ]
            return " ".join(words)

        def tokenize(text):
            tokens = Tokenizer()
            tokens.fit_on_texts(text)
            return tokens.texts_to_sequences(text), tokens.word_index

        df = pd.DataFrame({"feedback": data})
        df["feedback"] = df["feedback"].apply(contract)
        df["feedback"] = df["feedback"].apply(preprocess_text)
        corpus = df["feedback"].tolist()

        sequences, vocab_size = tokenize(corpus)
        maxlen = 108
        X_padded = pad_sequences(
            sequences,
            maxlen=maxlen,
            dtype="int32",
            padding="post",
            truncating="post",
            value=0.0,
        )

        pred = model.predict(X_padded, batch_size=32)
        y_pred = np.argmax(pred, axis=1)

        count_1 = np.count_nonzero(y_pred == 1)
        count_0 = np.count_nonzero(y_pred == 0)
        return {"pos": count_1, "neg": count_0}
    except Exception as e:
        print(e)
