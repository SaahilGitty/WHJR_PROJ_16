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

const welcome = document.getElementById("welcome").value;
const message = document.getElementById("message");
const output = document.getElementById("output");

function load_name() {
    welcome.innerHTML = "#" + localStorage.getItem("room_name");
}

function send_msg() {
    msg = message.value;
    firebase.database().ref("room_name").push({
        name:localStorage.getItem("User Name"),
        message:msg,
        likes:0,
    });
    message.value = "";
}

function get_data() {
    firebase.database().ref(localStorage.getItem("room_name")).on("value", function(snapshot){
        snapshot.forEach(function(childSnapshot){
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != purpose) {
                firebase_message_id = childKey;
                message_data = childData;

                name = message_data['name'];
                msg = message_data['msg'];
                likes = name = message_data['likes'];

                name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
                message_with_tag = "<h4 class='message_h4'>" + msg + "</h4>";
                like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                output.innerHTML += row;
            }
        });
    });
}
get_data();