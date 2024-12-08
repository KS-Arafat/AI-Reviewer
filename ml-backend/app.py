from flask import Flask, request, jsonify
from supabase import create_client, Client
import os
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin

from local_model import model_loader, model_predict


app = Flask(__name__)

cors = CORS(app) 
app.config['CORS_HEADERS'] = 'Content-Type'

os.environ["FLASK_ENV"] = "production"
os.environ["FLASK_DEBUG"] = "0"
os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"

load_dotenv()
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

model = model_loader()


@app.route("/analyze", methods=["POST"])
@cross_origin()
def get_comments():
    try:

        PID = request.json.get("PID")
        print(PID)
        if not PID:
            return jsonify({"error": "Item_ID is required"}), 400

        res = supabase.table("feedbacks").select("Feedback").eq("PID", PID).execute()
        db_data = res.data
        if db_data != [] and db_data != None:
            ml_data = model_predict(model=model, data=[x["Feedback"] for x in res.data])
            return jsonify(ml_data), 200
        else:
            return jsonify({"pos": 0, "neg": 0}), 200

    except Exception as e:
        print(str(e))
        return jsonify({"pos": 0, "neg": 0}), 500


if __name__ == "__main__":
    app.run()
