from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def dashboard():
    return render_template('dashboard.html')

@app.route('/monitoring')
def monitoring():
    return render_template('monitoring.html')

@app.route('/controls')
def controls():
    return render_template('controls.html')

@app.route('/camera')
def camera():
    return render_template('camera.html')

@app.route('/analytics')
def analytics():
    return render_template('analytics.html')

@app.route('/alerts')
def alerts():
    return render_template('alerts.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)
