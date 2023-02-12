import time
from grove_moisture_sensor import GroveMoistureSensor

pin = 0
sensor = GroveMoistureSensor(pin)

class moistureSensor:
	
	interval = 0
	threshold = 0
	
	def getCurVal(self):
		return sensor.moisture
		 
	
	def setInterval(interval):
		self.interval = interval
	
	def setThreshold(thresh):
		self.threshold = thresh