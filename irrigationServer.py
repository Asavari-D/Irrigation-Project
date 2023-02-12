from flask import Flask, request, jsonify
from moistureSensor import moistureSensor
from pump import pump
from controller import controller
import time

app = Flask(__name__)

@app.route("/moisture")
def moisVal():
	sensorObj = moistureSensor()
	soilMoisVal = sensorObj.getCurVal()
	return jsonify(soilMoisVal)
	
@app.route("/pumpOn")
def on():
	waterPump = pump()
	waterPump.pumpOn()
	return jsonify("Pump is on")

@app.route("/pumpOff")
def off():
	waterPump = pump()
	waterPump.pumpOff()
	return jsonify("Pump is off")


if __name__ == '__main__':
	app.run(host = "0.0.0.0", port = 5000, debug = True)
