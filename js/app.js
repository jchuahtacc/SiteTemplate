define(['jquery',
      // 'fbaccountdropdown',
        'bootstrapgrowl',
        'firebase', 'bootstrap'], function($) {
  function App() {
      // var Firebase = require('firebase');
      // this.firebase = new Firebase("https://my.firebaseio.com");

      $(document).ready(this.initialize.apply(this));
  };
  App.prototype = {
      constructor: App,
      initialize: function() {
        console.log("Hello, console!");

        // this.fbaccountdropdown = new FBAccountDropdown(this.firebase);
      }
  };
  return App;
});
