var firebaseConfig = {
    apiKey: "AIzaSyDeu7c8nJ3N4CdtTDxujdyeAxC22qOl-wE",
    authDomain: "webs-14d74.firebaseapp.com",
    databaseURL: "https://webs-14d74.firebaseio.com",
    projectId: "webs-14d74",
    storageBucket: "webs-14d74.appspot.com",
    messagingSenderId: "907323510936",
    appId: "1:907323510936:web:227f203bce4cbd7f5e40ed",
    measurementId: "G-Z9RXW57W1K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var messagesRef = firebase.database().ref('contactformmessages');
$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        email: $('.email').val(),
        subject: $('.subject').val(),
        message: $('.message').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});