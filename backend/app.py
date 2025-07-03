from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob
from spotify import get_song_for_mood
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)

# ✅ Demo login endpoint
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if email == os.getenv('DEMO_EMAIL') and password == os.getenv('DEMO_PASS'):
        return jsonify({"status": "ok"}), 200
    return jsonify({"status": "fail", "message": "Invalid credentials"}), 401

@app.route('/api/analyze', methods=['POST'])
def analyze():
    data = request.json
    mood_text = data.get('mood', '')

    if not mood_text.strip():
        return jsonify({"error": "Mood text is required"}), 400

    # Sentiment analysis
    blob = TextBlob(mood_text)
    polarity = blob.sentiment.polarity

    try:
        # Get song based on polarity
        song = get_song_for_mood(polarity)
        return jsonify(song)
    except Exception as e:
        return jsonify({"error": "Failed to get song", "details": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
