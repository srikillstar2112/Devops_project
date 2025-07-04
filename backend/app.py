from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob
from spotify import get_song_for_mood

app = Flask(__name__)
CORS(app)

@app.route("/analyze", methods=["POST"])
def analyze_mood():
    data = request.get_json()
    text = data.get("text", "")

    if not text.strip():
        return jsonify({"status": "error", "message": "Invalid input"}), 400

    polarity = TextBlob(text).sentiment.polarity
    song = get_song_for_mood(polarity)

    return jsonify({"status": "ok", "song": song})


@app.route("/")
def home():
    return "Moodymusic backend is running 🚀"

if __name__ == "__main__":
    app.run(debug=True)
