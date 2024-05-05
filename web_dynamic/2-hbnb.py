#!/usr/bin/python3
from flask import Flask, render_template
from models import storage
from api.v1.views import app_views

#!/usr/bin/python3
app = Flask(__name__)
app.register_blueprint(app_views)

@app.teardown_appcontext
def teardown_db(exception):
    storage.close()

@app.route('/2-hbnb', strict_slashes=False)
def hbnb():
    return render_template('2-hbnb.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)