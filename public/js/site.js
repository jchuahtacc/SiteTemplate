var config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  storageBucket: "YOUR_STORAGE_BUCKET",
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    signedIn();
  } else {
    signedOut();
  }
});

function signedOut() {
  $("#statusPane").addClass("hidden");
  $("#googleLoginBtn").removeClass("hidden");
  $("#signOutBtn").addClass("hidden");
}

function signedIn() {
  $("#statusPane").removeClass("hidden");
  $("#googleLoginBtn").addClass("hidden");
  $("#signOutBtn").removeClass("hidden");

  firebase.database().ref("status/" + firebase.auth().currentUser.uid).once("value", function(snapshot) {
    var value = snapshot.val();
    $("#lastStatus").text(value);
  });
}

function updateStatus() {
  var newStatus = $("#newStatus").val();
  firebase.database().ref("status/" + firebase.auth().currentUser.uid).set(newStatus);
}

$(document).ready(function() {
  console.log("Hello world");
});
