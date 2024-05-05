#!/usr/bin/python3
# 3-hbnb.py
@app.route('/3-hbnb', strict_slashes=False)
def hbnb():
    """ HBNB """
    return render_template('3-hbnb.html')