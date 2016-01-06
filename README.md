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

| Task | Description |
| ---- | :----------: |
|`grunt build`|Auto compile JSX templates into client.js|
|`grunt`| Combines: 'grunt build' and  'grunt watch'|
|`npm start`| Start the EXPRESS server with nodemon|
