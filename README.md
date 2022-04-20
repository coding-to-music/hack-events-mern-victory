# hack-events-mern-victory

# 🚀 Javascript full-stack 🚀

## MERN Stack

### React / Express / MongoDB / TypeScript

### Full authentication boilerplate using Node.js Express MongoDB React

https://github.com/coding-to-music/hack-events-mern-victory

https://hack-events-mern-victory.herokuapp.com

https://hack-events-mern-victory.onrender.com

by Triton Engineering Student Council

University of California San Diego Engineering Student Council

https://github.com/UCSDTESC

https://www.tesc.events/

https://github.com/UCSDTESC/Check-in

## Environment Variables

```java
MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/expense-tracker-mern-material?retryWrites=true&w=majority"

JWT_SECRET=
S3_KEY=
S3_SECRET
S3_BUCKET

MAIL_USER
MAIL_PASS
MAIL_PORT
MAIL_HOST

SENDGRID_ACCEPTANCE_EMAIL_ID
SENDGRID_REJECTION_EMAIL_ID
SENDGRID_WAITLIST_EMAIL_ID
SENDGRID_API_KEY

SESSION_SECRET
SALT_ROUNDS
WEB_CONCURRENCY

```

## Deploying to Render

This plugin will extract info from Heroku and put it into a Docker file.

```java
heroku plugins:install @renderinc/heroku-import
```

Output:

```java
warning ../../../package.json: No license field
warning ../../../../../../package.json: No license field
warning "eslint-config-oclif > eslint-config-xo-space@0.27.0" has incorrect peer dependency "eslint@>=7.20.0".
warning "eslint-config-oclif > eslint-plugin-mocha@9.0.0" has incorrect peer dependency "eslint@>=7.0.0".
warning "eslint-config-oclif > eslint-plugin-unicorn@36.0.0" has incorrect peer dependency "eslint@>=7.32.0".
warning "eslint-config-oclif > eslint-config-xo-space > eslint-config-xo@0.35.0" has incorrect peer dependency "eslint@>=7.20.0".
warning "eslint-config-oclif > eslint-plugin-unicorn > eslint-template-visitor@2.3.2" has incorrect peer dependency "eslint@>=7.0.0".
warning "eslint-config-oclif > eslint-plugin-unicorn > eslint-template-visitor > @babel/eslint-parser@7.16.3" has incorrect peer dependency "eslint@^7.5.0 || ^8.0.0".
Installing plugin @renderinc/heroku-import... installed v1.1.0
```

```java
heroku render:import --app hack-events-mern-victory
```

Output:

```java

=== Gathering information about Heroku app
Verifying Heroku app exists and CLI is logged in... ✔️
Verifying app is using a single, official Heroku buildpack... ✔️
Getting stack image... heroku-20
Getting and translating plan... Heroku Free $0/mo --> Render Free $0/mo
Getting instance count... 1
Getting custom domains... 0 custom domain(s)
Getting environment variables... 2 environment variable(s)
Getting add-ons... 0 add-on(s)

? Select addons to import.

Create render.yaml file and Dockerfile.render? This will overwrite any existing files with the same name. (y/n): y
Generating render.yaml file... done
Generating Dockerfile.render... done

=== Environment variables excluded from render.yaml
The following environment variables were not included in the generated
  render.yaml file because they potentially contain secrets. You may need to
  manually add them to your service in the Render Dashboard.

- JWT_SECRET:

=== Follow these steps to complete import of service(s) and database(s) to Render
1. Add, commit, and push the generated render.yaml and Dockerfile.render to GitHub or GitLab.
2. Go to https://dashboard.render.com/select-repo?type=iac
3. Search for and select this repository.
4. Verify the plan showing the resources that Render will create, and
   then click 'Create New Resources'.
5. After the resources are deployed, you may need to manually add
   the above environment variables to your Web Service in the Render Dashboard.
   They were not included in the generated render.yaml because they potentially
   contain secrets.
```

<img src="https://github.com/UCSDTESC/Check-in/blob/master/src/assets/public/img/vectors/tesc-blue.svg" height="40px" />

# TESC Events

[![CircleCI](https://circleci.com/gh/UCSDTESC/Check-in.svg?style=svg)](https://circleci.com/gh/UCSDTESC/Check-in)

### TESC Events is a purpose-built registration and event management system for hackathons, recruiting events or any number of other student-centred initiatives.

The system allows organisers of events to create, update and manage their events registration system. Students are able to register for the events, manage their registration information and check in to the events all through the platform.

## Requirements

0. Node.js Version >= 8.2.1
1. MongoDB

## Installation

0. Clone Repository
1. Navigate to directory in bash
2. Run `npm install`
3. Copy `.env.example` to a new file `.env`
4. Enter all of the information into the `.env` file
5. Run Mongo in a Docker container - `docker run --rm -it --name tesc-checkin -p 32678:27017 mongo:latest`
6. Run `npm run migrate` to migrate and seed the database
7. If you ever need to "restart" with new data, run `npm run rollback` to remove data and migrate again

## Development

#### All pushes should be made to a feature branch

0. Run `npm start`
1. Navigate to `http://localhost:3000/`

## Acknowledgements

- [UCSD Triton Engineering Student Council](http://tesc.ucsd.edu)
- [SD Hacks](https://github.com/SDHacks)

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/hack-events-mern-victory.git
git push -u origin main
```

## Heroku

```java
heroku create hack-events-mern-victory
```

## Heroku MongoDB Environment Variables

```java
heroku config:set

heroku config:set JWT_SECRET="secret"

heroku config:set PUBLIC_URL="https://hack-events-mern-victory.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```
