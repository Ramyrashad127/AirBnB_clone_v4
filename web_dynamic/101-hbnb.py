#!/usr/bin/python3
# 101-hbnb.py
from flask import Flask, render_template
from models import storage
@app.route('/101-hbnb', strict_slashes=False)
def hbnb_filters():
    """Display a HTML page like 100-hbnb.html"""
    states = storage.all('State')
    amenities = storage.all('Amenity')
    places = storage.all('Place')
    return render_template('101-hbnb.html', states=states, amenities=amenities, places=places)