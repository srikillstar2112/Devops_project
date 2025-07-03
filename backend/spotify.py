from dotenv import load_dotenv
load_dotenv()

import os
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

client = spotipy.Spotify(auth_manager=SpotifyClientCredentials(
    client_id=os.getenv("SPOTIPY_CLIENT_ID"),
    client_secret=os.getenv("SPOTIPY_CLIENT_SECRET")
))

def get_song_for_mood(polarity):
    if polarity > 0.2:
        query = "happy"
    elif polarity < -0.2:
        query = "sad"
    else:
        query = "calm"

    results = client.search(q=query, type="track", limit=1)
    track = results['tracks']['items'][0]
    return {
        "name": track["name"],
        "artist": track["artists"][0]["name"],
        "preview_url": track["preview_url"],
        "external_url": track["external_urls"]["spotify"]
    }
