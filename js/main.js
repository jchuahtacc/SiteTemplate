require.config({
  baseUrl: "js",
  shim : {
        "bootstrap" : { "deps" : ['jquery'] },
        "bootstrapgrowl" : { "deps" : ['jquery']},
        "firebase" : { exports: 'Firebase' }
    },
  paths: {
      jquery: "libs/jquery-2.2.0.min",
      app: "app",
      "bootstrap" :  "libs/bootstrap.min",
      firebase : "libs/firebase",
      text: "libs/text",
      bootstrapgrowl : "libs/jquery.bootstrap-growl.min"
  },
  packages: [
    {
      name: "fbloginmodal",
      location: "packages/fb-login-modal",
      main: "fb-login-modal"
    },
    {
      name: "fbchangepwmodal",
      location: "packages/fb-changepw-modal",
      main: "fb-changepw-modal"
    },
    {
      name: "fbcreatemodal",
      location: "packages/fb-create-modal",
      main: "fb-create-modal"
    },
    {
      name: "fbresetmodal",
      location: "packages/fb-reset-modal",
      main: "fb-reset-modal"
    },
    {
      name: "fbaccountdropdown",
      location: "packages/fb-account-dropdown",
      main: "fb-account-dropdown"
    },
  ]
});


require(['require'], function(require) {
  require(['app'], function(App) {
      var a = new App();
  });
});
