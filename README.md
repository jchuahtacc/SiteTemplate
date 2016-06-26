# Bootstrap/RequireJS Site Template

This site template implements RequireJS and Bootstrap. It includes shims for
[Firebase](https://www.firebase.com/docs/web/api/) and
[Bootstrap Growl](https://github.com/ifightcrime/bootstrap-growl). In addition,
it includes an example Bootstrap plugin for a Firebase account sign-in and
management navbar list item.

### Usage

[`./js/app.js`](./js/app.js) is the main script for this template. `initialize`
 in the `App.prototype` is the functionally similar to jQuery's `$(document).ready()`.
Additional plugins and Javascript files can be added to `main.js`.

### Firebase

This project includes a Firebase login Bootstrap interface plugin. To add Firebase login functionality:

- Create a [Firebase](https://firebase.google.com/) project
- Enable E-mail/Password authentication on your Firebase project
- Uncomment the code pertaining to Firebase and `fbaccountdropdown` in [`./js/app.js`](./js/app.js)
- Replace the Firebase URL parameter `https://my.firebaseio.com` with your project URL
