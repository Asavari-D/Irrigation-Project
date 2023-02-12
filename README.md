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

![N]("C:\Users\ASAVARI\Downloads\Soil Mositure Sensor Project.jpg")

# Code Structure

Git Repo has Backend and Frondend code

Backend code is to detect sensor vales and set them with flask api. These operations will be done with python 3 on rasberry pi. once Api are ready they can be accessed from React Frontend.

To set up React project,

<code> npm i
<br>
<code> npx react-native run-android // for android mobile app
<br>
<code> npx react-native run-ios // for ios mobile app

once mobile app is up and running on mobile phone,

![N](https://www.raspberrypi.org/app/uploads/2017/06/Powered-by-Raspberry-Pi-Logo_Outline-Colour-Screen-500x153.png)
