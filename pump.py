import time
from grove.grove_relay import GroveRelay

pin = 12
relay = GroveRelay(12)

class pump:
		
	def pumpOn(self):
		relay.on()
			
	def pumpOff(self):
		relay.off()