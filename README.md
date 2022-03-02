# meet

This mobile chat app is made using React Native. The app has an interface that enables users to send and receive chat messages, images and locations.

# Technologies Used

* Node.js
* React Native
* Expo Frame work
* Google Firebase
* Gifted chat

# Installation
* git clone 
* npm install --global expo-cli
* npm start
* setup emulator/simulator

Key Features
* page where users can enter their name and choose a background color for the chat screen before joining the chat.
* A page displaying the conversation of the users.
* The chat must provide users with two additional communication features: sending images and location data.
* Data gets stored online and offline also

 ```
 An event element is collapsed by default
Given:  the user haven’t done anything
When :  default events are displayed
Then : the user should see collapsed elements

User can expand an event to see its details
Given: the main page is open
When: user clicks on expand button
Then: user should see the event details

User can collapse an event to hide its details
Given: the main page is open
When: user clicks on collapse button
Then: user should be able to hide the event details

When user hasn’t specified a number, 32 is the default number
Given: user hasn’t specified a number
When: the user opens the app
Then: user should see by default 32 number

User can change the number of events they want to see
Given: User can change the number of events
When: the user opens the app
Then: user should see the number of events changed by the user

Show cached data when there’s no internet connection. 
Given: the user is offline 
When: using the application 
Then: cached data shows what to be displayed Scenario 

Show error when user changes the settings (city, time range). 
Given: the user is offline 
When: the user changes the settings 
Then: an error will be displayed explaining that when offline the data can only be read

Show a chart with the number of upcoming events in each city. 
Given: the user is checking the main page 
When: scrolling 
Then: a chart section will show the upcoming events by cities```
