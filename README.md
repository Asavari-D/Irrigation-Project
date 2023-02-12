## Smart Drip Irrigation for Home Gardens

by Asavari Deshmukh, XII Grade, Pune, India

---

Tags: ["Raspberry Pi Powered IOT Garden", "Exploration Project", "Soil Moisture Sensor Example Project", "Relay"]
Tech specifcation: ["Python", "React-Native"]

---

# Introduction

As an XII Grader and looking forward to joining ECE programs, IoT and Automation have always been topics of curiosity for me. After having done a few python projects, it was time to explore a round trip for an Automated and Integrated Hardware / Software Project.
During vacations watering our terrace plants was one of the problems we encountered. So I started with this project to monitor the real-time status of the soil moisture levels of the plants with the help of sensors and initiate a drip irrigation system with the help of a Mobile App.

Overall Flow of Integrated System
Firstly, I have connected a soil moisture sensor to the Raspberry Pi microprocessor. When the system begins to run the program, it will check soil moisture periodically with the help of the soil moisture sensor. If plants have moisture levels below the threshold value, they will be indicated on the barometer on the mobile app. The user can turn on the motor pump using the mobile app itself. Once the values go above the threshold, the user can turn off the motor pump using the switch-off button on the app.

# List of Project Elements

HARDWARE

- Raspberry Pi
- Grove Hat
- Grove Soil Moisture sensor
- Relay
- Jumper wires
- 3.7 V Battery with Case
- Micro DC 3-6V Micro Submersible Pump Mini water pump
- Drip Irrigation Componenets
  - Emiiter
  - 4mm Water Pipe
  - Water Pipe Connectors

SOFTWARE REQUIRED

- Raspbian OS
- Python 3
- Libraries:
  - Grove PI
  - Time
  - Flask
- React Native
- React Native Modules
  - react-native-elements
  - react-native-speedometer
  - react-native-icons

# Setting Up The Hardware

![N](images/Soil%20Mositure%20Sensor%20Project.jpg)

# Code Structure

Git Repo has Backend and Frondend code

The backend code fetches soil moisture values from the sensor and makes them available via an API. The backend side also interacts with the relay, which is responsible for turning the pump on or off. Both these functionalities have their separate APIs.
The react frontend code fetches the soil moisture values through the API and displays them on the barometer. When the user hits the switch on/off button, the respective APIs are hit and the pump is switched on/off.

To note: In this project since I am using the grove soil moisture, I also had to set up the grove hat and the grove sensor environments. Please follow this link to find more information: https://wiki.seeedstudio.com/Grove-Moisture_Sensor/

The code files can be found in this project repository.

![N](https://www.raspberrypi.org/app/uploads/2017/06/Powered-by-Raspberry-Pi-Logo_Outline-Colour-Screen-500x153.png)
