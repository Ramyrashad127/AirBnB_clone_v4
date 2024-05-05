#!/usr/bin/python3
# 4-hbnb.py
@app.route('/4-hbnb', strict_slashes=False)
def hbnb():
    """ HBNB """
    return render_template('4-hbnb.html')