from flask import Flask, render_template
import PyPDF2

app = Flask(__name__)


@app.route('/')
def index():
    cursos = ['Python', 'Java', 'C']
    data = {
        'titulo': 'Index',
        'bienbenida': '¡Saludos!',
        'cursos': cursos,
        'numero_cursos': 0
    }
    return render_template('index.html', data=data)


@app.route('/contacto/<nombre>')
def contacto(nombre):
    data = {
        'titulo': 'Contacto',
        'nombre': nombre
    }
    return render_template('contacto.html', data=data)


@app.route('/pdf')
def process_pdf():

    pdf_file = open('./PDF_file.pdf', 'rb')

    pdf_reader = PyPDF2.PdfReader(pdf_file)

    num_pages = len(pdf_reader.pages)

    content = ""
    for num in range(num_pages):
        page = pdf_reader.pages[num]
        content += page.extract_text()

    pdf_file.close()

    data = {
        'titulo': 'PDF Reader',
        'text': content
    }

    # return jsonify({'text': content})
    return render_template('pdf.html', data=data)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
