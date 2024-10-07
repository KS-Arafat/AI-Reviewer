import localFont from "next/font/local";

const sinera = localFont({
  src: "./fonts/Sinera.woff",
  variable: "--font-sinera",
  weight: "100 900",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
});

const mistergrape = localFont({
  src: "./fonts/MisterGrape.otf",
  variable: "--font-mister-grape",
  weight: "100 900",
});

export { sinera, geistMono, geistSans, roboto, mistergrape };
