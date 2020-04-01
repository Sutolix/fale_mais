<h1 align="center">
  Show me The Code - FaleMais
</h1>

<p align="center">
  <img width="172" height="186" src="https://user-images.githubusercontent.com/56132780/77975092-7120e780-72cf-11ea-98dc-96020cdc61a2.png">
</p>


## Project developed during the Vizir selection process

 ***Summary*** 
 1. [Goal](#goal)
 2. [Technologies used](#technologies)
 2. [Installing in a local environment](#installing)
 3. [In operation](#operation)
 3. [Business rules](#rules)
 4. [Responsiveness](#responsiveness)
 5. [Handling invalid entries](#invalid)
*******

<div id='goal' />

## Goal:

This project aims to create a functional and practical web application meeting the requirements of the challenge imposed by Vizir's selection process. The application is summarized in a calculator that will calculate the amounts that users will pay if they hire one of the new plans of the fictitious company Telzir.

<div id='technologies' />

## Technologies used:

- NodeJs
- ReactJs
- React Alert
- Git

<div id='installing' />

## Install

##### Requirements:

- [NodeJs](https://nodejs.org/en)
*******

First download or clone the files from the repository on the machine you want to run on. Inside the main directory of the repository you downloaded, run the following command in the terminal (or in PowerShell if you are on Windows and so prefer):
> ###### Attention: please make sure you have installed NodeJs on your machine and that it is working.

``npm install``

This command will download the node modules files needed for operation. After that, run the command:

``npm start``

**This will open a local server and your browser will open with the application. That's all, it's already working!**

> ###### To add new ddds and rates, simply access the services folder within src. The arrays with the data are inside the tarifs.js file. Just add the new data to the array that will already be functional.

<div id='operation' />

## In operation

![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/56132780/78131172-ff40bf00-73f0-11ea-92ef-c0e071951622.gif)

<div id='rules' />

## Business rules:

Here we have the normal rates according to your origin and destination ddds.

Source | Destination | $/min
------------ | ------------- | -------------
011 | 016 | 1.90
011 | 017 | 1.70
011 | 018 | 0.90
016 | 011 | 2.90
017 | 011 | 2.70
018 | 011 | 1.90

With the inclusion of the new plans (FaleMais 30, FaleMais 60 and FaleMais 120) there are new rates. Based on the plan, the user will be able to make calls without paying anything if he does not exceed the time of his plan. If you have hired the FaleMais 30 plan, you can speak for 30 minutes without paying anything for the call, the minutes that exceed that time will start to cost the normal amount plus 10%. The same applies to the other plans.

<div id='responsiveness' />

## Responsiveness

##### Compatible with mobile devices and desktops
![ezgif com-video-to-gif (3)](https://user-images.githubusercontent.com/56132780/78131261-28614f80-73f1-11ea-85df-41b6456cbf4a.gif)

<div id='invalid' />

## Handling invalid entries

#### Just numbers in the minutes field.

![ezgif com-video-to-gif (4)](https://user-images.githubusercontent.com/56132780/78131312-42029700-73f1-11ea-8606-8ba91105b2a3.gif)

#### Custom alerts

###### If the user circumvents the required input
![ezgif com-video-to-gif (5)](https://user-images.githubusercontent.com/56132780/78131365-5777c100-73f1-11ea-96c7-3238d806e60c.gif)

###### If the user circumvents the maxlength 
![ezgif com-video-to-gif (6)](https://user-images.githubusercontent.com/56132780/78131408-678fa080-73f1-11ea-9096-984b7c8d5eb9.gif)

###### If the user submits 0
![ezgif com-video-to-gif (7)](https://user-images.githubusercontent.com/56132780/78131441-75ddbc80-73f1-11ea-9a55-1190689d1c70.gif)
