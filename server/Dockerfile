FROM python:latest

ENV FLASK_APP=app/app
ENV FLASK_RUN_HOST=0.0.0.0

WORKDIR ai-chatbot
COPY .. .

RUN pip install -r requirements.txt

CMD ["flask", "run"]