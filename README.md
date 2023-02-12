## Smart Drip Irrigation for Home Gardens

by Asavari Deshmukh, XII Grade, Pune, India

---

Tags: ["Raspberry Pi Powered IOT Garden", "Exploration Project", "Soil Moisture Sensor Example Project", "Relay"]
Tech specifcation: ["Python", "React-Native"]

---

# Introduction

“For the things we have to learn before we can do them, we learn by doing them.”
― Aristotle

Abstract
As a XII Grader and looking forward to join ECE programs, IoT and Automation was always subject of curiosity for me. Having handle on differnt python projects, it was time to explore round trip for a Automated and Integrated Hardware / Software Project.
Keeping track of the watering of our terrace garden was one of the issues we usually encountered. It was also always a concern and worry, specially vacation times. So I started with idea of this mini project to monitor the real-time status of the plants with the help of moisture based sensor solutions and triggering drip watering system with the help of Mobile App.

Overall Flow of Integrated System
When the system begins to run the program, it will keep on checking soil mositure periodically with the help of soil moisture sensor. If plants doesn’t have any moisture in the soil, notification will be sent to User and also if seetings have benn set to AUTO, motor turned on and water get passed to Drip Irrigation Setup for Terrace Garden. Then priority hands over back to soil mositure sensor, if the mositure level reaches the threshold, motor get turned off. Water Pump on and Off functions will be managed manually as well with the help of React Native Mobile Interface. So Raspberry Pi based system of sensor and relay makes watering system to be autonomous.

# List of Project Elements

HARDWARE

- Raspberry Pi
- Power supply
- Soil Moisture sensor
- Relay
- Jumper wires
- 3.7 V Battery with Case
- Micro DC 3-6V Micro Submersible Pump Mini water pump
- Drip Irrigation Componenets
  - Emiiter
  - 4mm Water Pipe
  - Water Pipe Connectors

![N](https://m.media-amazon.com/images/I/7145s6jpF7L._SX522_.jpg)

SOFTWARE REQUIRED

- Raspbian OS
- Python 3
- Python Libraries
  - Grove PI
  - Time
  - Flask
- React Native
- React Native Modules
  - react-native-elements
  - react-native-speedometer
  - react-native-icons

# Setting Up The Hardware

![N](https://html.scirp.org/file/83708x2.png)
![N](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2tQjCpfAJI9J3jr9dB-yykRoVxUlrJPl48XgHxyVXyRI2z1J2W1VwH5ITiO5VHZXnSY&usqp=CAU)

# Wiring layout

![N](https://content.instructables.com/FS9/1FDF/K8P6TQHZ/FS91FDFK8P6TQHZ.jpg?auto=webp&fit=bounds&frame=1&width=1024)

# Software Block Diagram

![N](https://amlanscloud.com/static/e45b55503ff9b29df9c41ebb7cf301b4/1ca7d/appcomponents.png)

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
