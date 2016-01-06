# PoppyCock
The online multiplayer game of defining stuff, and lying about it.

Very much like Baulderdash, or Dictionairy Dabble.

## Installing
`npm install`

## Database (postgres)

1: Install postgres, if you have not already.

2: Run this in your local PSQL with admin rights. e.g.: `sudo psql -U postgres` 

```
CREATE USER poppycock WITH PASSWORD 'banana!';
CREATE DATABASE poppycock_test;
CREATE DATABASE poppycock_dev;
CREATE DATABASE poppycock;
GRANT ALL PRIVILAGES ON DATABASE poppycock_test to poppycock;
GRANT ALL PRIVILAGES ON DATABASE poppycock_dev to poppycock;
GRANT ALL PRIVILAGES ON DATABASE poppycock to poppycock; 
```

3: Run `sequelize db:migrate` to create the tables.


## Development
PoppyCock is built with React, and Socket.io.
Why? Because I wanted to try out these sexy new frameworks and see what they are all about.

Here are some commands to get you started:

| Task | Description |
| ---- | :----------: |
|`grunt build`|Auto compile JSX templates into client.js|
|`grunt`| Combines: 'grunt build' and  'grunt watch'|
|`npm start`| Start the EXPRESS server with nodemon|
