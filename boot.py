# This file is executed on every boot (including wake-boot from deepsleep)
#import esp
#esp.osdebug(None)
import uos, machine
#uos.dupterm(None, 1) # disable REPL on UART(0)
import network
import esp
import gc
esp.osdebug(None)
gc.collect()

ssid = 'VODAFONE-AEC0'
password = 'MK5PDTKHJYE55PX6'
station = network.WLAN(network.STA_IF)
station.active(True)
station.connect(ssid, password)
while station.isconnected() == False:
  pass

print('Connection successful')
print(station.ifconfig())
