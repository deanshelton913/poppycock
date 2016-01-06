# PoppyCock
The online multiplayer game of defining stuff, and lying about it.

Very much like Baulderdash, or Dictionairy Dabble.

## Installing
`npm install`

## Database (postgres)
Create these db names in your local postgres:

|poppycock_test|poppycock_dev|poppycock|
| ------------ | -----------:|:--------|

`sequelize db:migrate`

## Development
PoppyCock is built with React, and Socket.io.
Why? Because I wanted to try out these sexy new frameworks and see what they are all about.

Here are some commands to get you started:

`grunt build`# Auto compile JSX templates into client.js

`grunt` # same as `grunt build && grunt watch`

`npm start`  # to start the server with nodemon


TODO:
These mostly stem from my ignorance of the framework, but will hopefully be sorted in short order.

* Remove /views directory. If we are clientside templating this dir is redundant.
* Should we keep controllers to provide deep-linking?
* What is responsible for choosing a layout? (i.e.: sending the user to the waiting room, vs. the in-game display)
