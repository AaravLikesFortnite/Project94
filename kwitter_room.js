
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAa0qXM43jjCH9jfRNAf0LDjZQ7V2nyrSQ",
      authDomain: "let-s-chat-7abf9.firebaseapp.com",
      databaseURL: "https://let-s-chat-7abf9-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-7abf9",
      storageBucket: "let-s-chat-7abf9.appspot.com",
      messagingSenderId: "929686378339",
      appId: "1:929686378339:web:91e13ad2c610a1f3a22556"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
