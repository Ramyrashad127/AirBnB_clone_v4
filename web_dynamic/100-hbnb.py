#!/usr/bin/python3
from flask import Flask, render_template
from models import storage
# 100-hbnb.py
@app.route('/100-hbnb', strict_slashes=False)
def hbnb_filters():
    """Display a HTML page like 4-hbnb.html"""
    states = storage.all('State')
    amenities = storage.all('Amenity')
    places = storage.all('Place')
    return render_template('100-hbnb.html', states=states, amenities=amenities, places=places)