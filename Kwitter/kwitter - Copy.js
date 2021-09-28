var firebaseConfig = {
  apiKey: "AIzaSyAo6rn92HBj6KJYiM3X6psOtEAacqWi2E8",
  authDomain: "kwiteer-62623.firebaseapp.com",
  databaseURL: "https://kwiteer-62623-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kwiteer-62623",
  storageBucket: "kwiteer-62623.appspot.com",
  messagingSenderId: "227647386115",
  appId: "1:227647386115:web:6b09301294a2314a505436"
};


// Initialize Firebase
// var app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("User Name");
const welcome = document.getElementById("welcome");
const room = document.getElementById("room");

function load_name() {
    document.getElementById("welcome").innerHTML = "Welcome, " + localStorage.getItem("User Name")
}

function sign_out() {
    localStorage.setItem("User Name", "")
    window.location = "index.html";
}

function add_room()
{
  room_name = room.value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
