## APPLICATION INFORMATION

### Sequelize Initialization

Install a tool to re-run if any changes are produced.

```shell
  npm install --save-dev nodemon
  npm install dotenv --save
  touch .env
```

After that, set the environment variables to set other configurations.

```
  # .env
  # GLOBAL ENV VARIABLES
  NODE_ENV=development
  PORT=3000

  # DB ENV VARIABLES
  DB_USERNAME=root
  DB_PASSWORD=1234
  DB_NAME=mainjsapp
  DB_HOST=localhost
  DB_DIALECT=mysql
```

To get whole infrastructure to work with models and migrations on databases.

```shell
  npm install --save mysql2
  npm install --save-dev sequelize-cli
  npx sequelize --help
  npx sequelize init
  touch .sequelizerc
```

On .sequelizerc file, change on the following line:

```shell
  module.exports = {
    'config': path.resolve('config', 'config.json'),
    'models-path': path.resolve('db', 'models'),
    'seeders-path': path.resolve('db', 'seeders'),
    'migrations-path': path.resolve('db', 'migrations')
  };
```

for

```shell
  module.exports = {
    'config': path.resolve('config', 'config.js'),
    'models-path': path.resolve('db', 'models'),
    'seeders-path': path.resolve('db', 'seeders'),
    'migrations-path': path.resolve('db', 'migrations')
  };
```

And also in the index models file:

```shell
  # app/models/index.js
  const config = require(__dirname + "/../config/config.json")[env];
  # to
  const config = require(__dirname + "/../config/config.js")[env];
```

Special note, is necessary move **migrations, models and seeders** folder to a new one
called **db**.

Last thing about database, we need to set the ENV variable on our **config/config.js** file:

```shell
require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,

    seederStorage: "sequelize",
    seederStorageTableName: "seeds",

    migrationStorage: "sequelize",
    migrationStorageTableName: "migrations",
  },
};
```

To check everything its ok and create the database, so run the next commands:

```shell
  npx sequelize-cli db:create
  npx sequelize-cli db:migrate
  npx sequelize-cli db:seed:all
  # We will receive the message that everything its ok about DB
  # and the migrations table will be created on our Database.

  Sequelize CLI [Node: 14.4.0, CLI: 6.2.0, ORM: 6.3.0]

  Loaded configuration file "config/config.js".
  Using environment "development".
  Database mainjsapp created.
```

Add Morgan Logger Middleware to watch HTPP request logger:

```shell
  npm install morgan
```

### Set Express and the Layout Engine

We need to set Express as a HTTP server and EJS as a HTML Layout Engine.

```shell
  npm install express --save
  npm install ejs
```

And, to use it on our platform, we need to use it on our **app.js**.

```shell
  const app = express();
  const fs = require("fs");
  const path = require("path");
  const express = require("express");
```

### SEQUELIZE

[Sequelize-CLI Information](https://github.com/sequelize/cli)  
[Sequelize Configuration](https://www.youtube.com/watch?v=pxo7L5nd1gA&t=254s)  
[Sequelize Commands](https://levelup.gitconnected.com/getting-started-with-sequelize-cli-c33c797f05c6)  
[Sequelize Configuration V5](https://gist.github.com/Eth3rnit3/3a83cfa8d6c391139db24aadb1b0a774)

[Sequelize Associations](https://gist.github.com/zcaceres/83b554ee08726a734088d90d455bc566)

### EXPRESS SERVER

[Express Configuration](https://expressjs.com/en/starter/installing.html)  
[What is express.urlencoded](https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded/51844327)
[How to save a package as a DEV environment](https://docs.npmjs.com/cli/install)

### EJS (Embedded JavaScript templating)

[EJS Documentation](https://ejs.co/#docs)  
[EJS Partials](https://www.includehelp.com/node-js/ejs-partials.aspx)

### SASS Configuration

[Install SASS on Development Environment](https://glitch.com/edit/#!/node-sass-middleware?path=server.js%3A1%3A0)

### Work with subfolders on Express

[Find Views inside Subfolders on Express](https://stackoverflow.com/questions/17425127/how-do-i-fix-routes-to-find-views-inside-subfolders-in-node-js)

## CREATING USER MODEL TABLE

Now, we have to create the **User Model**, and that will create the **user.js** file inside the **models** folder and will run the migration with the name of the model.

```shell
  npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string

  # New model was created at /Users/williamromero/Desktop/TechProjects/mainjsapp/db/models/user.js .
  # New migration was created at /Users/williamromero/Desktop/TechProjects/mainjsapp/db/migrations/20200714052434-create-user.js .
```

And after that, to run those changes on the table, we need to run the following command:

```shell
  npx sequelize-cli db:migrate

  # Loaded configuration file "config/database.js".
  # == 20200714052434-create-user: migrating =======
  # == 20200714052434-create-user: migrated (0.020s)
```

### Creating fields with Migrations:

```shell
  npx sequelize-cli migration:create --name added_field_on_users_model
  npm run migrate
```

### Undoing Migrations:

```shell
  # To revert to the most recent migration
  npx sequelize-cli db:migrate:undo

  # To revert to a specific migration
  npx sequelize-cli db:migrate:undo:all --to 20200714052434-create-user.js
```

### Run App from IP Locally:

```shell
  ifconfig
  ## Get IP mask
  nodemon app --hostname 192.168.1.8
```

## ERRORS AND ISSUES (SOLVES)

[Run sequelize on Docker](https://stackoverflow.com/questions/55483781/how-to-create-postgres-database-and-run-migration-when-docker-compose-up)

[Test Bcrypt on Docker](https://stackoverflow.com/questions/35568243/return-process-dlopenmodule-path-makelongfilename)

[Bcrypt on Docker](https://github.com/kelektiv/node.bcrypt.js/issues/635)

[Bcrypt on Docker](https://github.com/kelektiv/node.bcrypt.js/issues/761)

[Bcrypt C++ Addon](https://www.npmjs.com/package/node-pre-gyp)

[Bcrypt Invalid ELF Header](https://medium.com/@devontem/solved-invalid-elf-header-with-docker-and-bcrypt-444426d63605)

[BcryptJS NPM Solution](https://www.npmjs.com/package/bcryptjs)

[Run Shell Scripts on Linux](https://www.cyberciti.biz/faq/run-execute-sh-shell-script/)

[Basic Login System with NodeJS, Express & MySQL](https://codeshack.io/basic-login-system-nodejs-express-mysql/)

[Handle form Authentication](https://www.js-tutorials.com/nodejs-tutorial/node-js-user-authentication-using-mysql-express-js/#Node_js_Session_Management_using_express-session)

## EXPRESS EJS LAYOUTS

[EJS Layouts on Express 4.0](https://stackoverflow.com/questions/28391158/ejs-layouts-on-express-4-x-migration)

[Express EJS Layouts](https://github.com/soarez/express-ejs-layouts)

[EJS Layouts Templates](https://stackoverflow.com/questions/51913819/express-ejs-layout-using-different-layout)

[Skote NodeJS Admin Template](https://themeforest.net/item/skote-nodejs-admin-dashboard-template/26874790?clickid=XFNR8ZQ7ExyOWyIwUx0Mo3YlUkiWTHyf%3ARFfzQ0&_ga=2.237974976.1114310658.1595724159-1099686325.1562102261)

[Express Layouting](https://gawdiseattle.gitbook.io/wdi/05-node-express/00readme-1/01intro-to-express/01organization)

[Express Locals](https://stackoverflow.com/questions/12616694/layouts-in-express-3-and-ejs)

[Express-ejs-layouts Set Layout Example](https://github.com/sakai-memoru/ejsboots/blob/master/app.js)

[Ejs-Mate](https://www.npmjs.com/package/ejs-mate)
