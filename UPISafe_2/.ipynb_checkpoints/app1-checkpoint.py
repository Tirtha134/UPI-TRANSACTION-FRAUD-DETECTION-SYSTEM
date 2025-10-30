import pickle
from flask import Flask,jsonify,request
import numpy as np

model = pickle.load(open('fraud_detector_2.pkl','rb'))
app = Flask(__name__)

@app.route('/', methods=['POST'])
def predict():
    print('Hello Coders!')

    in_vr = request.form.get('international')
    fl_vr = request.form.get('fail')
    ty_vr = request.form.get('type')
    de_vr = request.form.get('device')

    if in_vr.lower() == 'yes':
        in_vr = 1
    else:
        in_vr = 0

    if fl_vr.lower() == 'yes':
        fl_vr = 1
    else:
        fl_vr = 0

    if ty_vr.lower() == 'online':
        ty_vr = 0
    elif ty_vr.lower() == 'pos':
        ty_vr = 1
    elif ty_vr.lower() == 'atm':
        ty_vr = 2
    elif ty_vr.lower() == 'transfer':
        ty_vr = 3

    if de_vr.lower() == 'tablet':
        de_vr = 0
    elif de_vr.lower() == 'computer':
        de_vr = 1
    elif de_vr.lower() == 'mobile':
        de_vr = 2

    pred = model.predict(np.array([[in_vr,fl_vr,ty_vr,de_vr]]))
    pred_score = model.predict_proba(np.array([[in_vr, fl_vr, ty_vr, de_vr]]))

    fin_res = pred[0]
    risk_score = pred_score[0][1]

    return jsonify({
        'Fraud Result': str(fin_res),
        'Risk Score': str(int(risk_score*100))
    })
if __name__ == "__main__":
    app.run()