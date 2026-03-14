import json

INPUT_FILE = "data/raw/moves.json"
OUTPUT_FILE = "data/processed/moves_with_coordinates.json"


def extract_coordinates(url: str):
    """
    Extract latitude and longitude from hitta.se URL.
    Example:
    https://www.hitta.se/område/56.8805:14.790417
    """
    try:
        coord_part = url.split("/")[-1]
        lat, lon = coord_part.split(":")
        return float(lat), float(lon)
    except Exception:
        return None, None


with open(INPUT_FILE) as f:
    moves = json.load(f)


for move in moves:
    lat, lon = extract_coordinates(move["source_url"])
    move["latitude"] = lat
    move["longitude"] = lon


with open(OUTPUT_FILE, "w") as f:
    json.dump(moves, f, indent=2)


print("Coordinates added and saved to", OUTPUT_FILE)
