import os
from flask import Flask, flash, render_template, redirect, url_for, request, jsonify
from werkzeug.utils import secure_filename

from backend.algo import chisquare

def create_app():
    app = Flask(__name__, static_folder="../build/static", template_folder="../public")
    
    # how to set upload folder ?
    UPLOAD_FOLDER = '...'
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

    # app = Flask(__name__, static_folder="../build/static", template_folder="../build")

    @app.route("/")
    def home():
        # return render_template('../public/index.html')
        return "test"

    @app.route("/upload", methods=['POST'])
    
    def get_csv():
        if request.method == 'POST':
            if 'file' not in request.files:
                return "no file detected"
                # return redirect(request.url)
            file = request.files['file']

            if file.filename == '':
                print('err')

            if file:
                filename = secure_filename(file.filename)
                print(filename)

                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

                freq = {
                    'Gender': {
                        '1': 50,
                        '2': 50,
                    },
                    'Ethnicity': {
                        'white': 30,
                        'black': 30,
                        'other': 40,
                    },
                }
                content = request.get_json()

                return jsonify(chisquare.algo(app.config['UPLOAD_FOLDER']+'/'+filename, 2, freq))


    return app
