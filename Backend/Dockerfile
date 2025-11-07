FROM python:3.8-slim

WORKDIR /flask-fullstack

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt

COPY . /flask-fullstack

CMD ["python","app.py"]