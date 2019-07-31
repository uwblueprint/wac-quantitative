import os
from flask import Flask, render_template, redirect, url_for, request
from werkzeug.utils import secure_filename

def create_app():
    app = Flask(__name__, static_folder="../build/static", template_folder="../public")

    # app = Flask(__name__, static_folder="../build/static", template_folder="../build")

    @app.route("/")
    def hello():
        return render_template('index.html')

    UPLOAD_FOLDER = '...'
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
    
    #[TODO] - WIP
    @app.route("/upload", methods=['POST'])
    def get_csv():
        if request.method == 'POST':
            if 'file' not in request.files:
                #handle
                return redirect(request.url)
    
            file = request.files['file']

            if file.filename == '':
                print('err')

            if file:
                filename = secure_filename(file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                return redirect(url_for('uploaded_file'), filename=filename)



    return app
