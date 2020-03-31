# Show me The Code - FaleMais

## Project developed during the Vizir selection process

*******
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

First download or clone the files from the repository on the machine you want to run on. Inside the main directory of the repository you downloaded, run the following command:
###### Attention: please make sure you have installed NodeJs on your machine and that it is working.

> ``npm init``

This command will download the node modules files needed for operation. After that, run the command:

> ``npm start``

This will open a local server and your browser will open with the application. That's all, it's already working!

<div id='operation' />

## In operation

![Hnet-image](https://user-images.githubusercontent.com/56132780/77972582-3a939e80-72c8-11ea-96ac-6e90f67dd173.gif)

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
![ezgif com-gif-maker](https://user-images.githubusercontent.com/56132780/77971252-9825ec00-72c4-11ea-9ab9-b03676e84f57.gif)

<div id='invalid' />

## Handling invalid entries

#### Just numbers in the minutes field.

![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/56132780/77921861-acdb9300-7276-11ea-8bd7-ce7d16492c12.gif)

#### Alerts personalizados

###### If the user circumvents the required input
![ezgif com-video-to-gif (4)](https://user-images.githubusercontent.com/56132780/77921872-afd68380-7276-11ea-8b9a-7f7ab8f751bb.gif)

###### If the user circumvents the maxlength 
![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/56132780/77973186-e5588c80-72c9-11ea-9700-28d57858a375.gif)

###### If the user submits 0
![ezgif com-video-to-gif (6)](https://user-images.githubusercontent.com/56132780/77921893-b36a0a80-7276-11ea-86f4-ae85a518b396.gif)


![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/56132780/77921856-ac42fc80-7276-11ea-86ba-5a39d0242f48.gif)
![ezgif com-video-to-gif (3)](https://user-images.githubusercontent.com/56132780/77921862-ae0cc000-7276-11ea-8d4f-2b0a13f4cf60.gif)

![ezgif com-video-to-gif (6)](https://user-images.githubusercontent.com/56132780/77921893-b36a0a80-7276-11ea-86f4-ae85a518b396.gif)
