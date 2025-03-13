from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('Home.html')

@app.route('/map')
def map():
    return render_template('map.html')

@app.route('/tour')
def tour():
    return render_template('Tour.html')

if __name__ == "__main__":
    app.run(debug=True)
