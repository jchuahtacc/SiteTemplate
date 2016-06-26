# Bootstrap/Firebase Site Template

This site template implements Bootstrap and Firebase.

### Usage

[`./public/js/site.js`](./public/js/site.js) is the main script for this template. Any Javascript
that must wait for the UI to finish loading can go in `$(document).ready()`.

### Firebase

This project includes a Firebase boilerplate and helper functions.

- Create a [Firebase](https://firebase.google.com/) project
- Select _Auth_ in the left panel, then select the _Sign-In Method_ pane under the _Authentication_ panel. Enable Google Sign-in.
- Click the _Web Setup_ link in the upper left of the page.
  This will have your `config` variable, including API keys and URLs.
  Replace the `config` in ['./public/js/site.js'](./public/js/site.js) with your `config`

### Firebase Click

You can use the Firebase CLI to test this page and deploy it to Google's
Firebase hosting.

- Install [NodeJS](http://nodejs.org).
- From a terminal, install the Firebase CLI with `npm install -g firebase-tools`
- From within the [`./public`](./public) directory, run `firebase serve` to get host
  the page locally at [`http://localhost:5000`](http://localhost:5000)
- To deploy the site to Firebase's free hosting, go to the root of this project
  in the terminal and run `firebase init`. Select your database project, leave
  the rest of the settings at defaults (just hit enter a whole bunch) and then
  type `firbase deploy`.
