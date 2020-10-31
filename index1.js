var db = firebase.firestore();
function Data(){
	var inputtext = document.getElementById("text_field").value;
	var inputemail = document.getElementById("text_email").value;
	var inputnum = document.getElementById("num").value;
	var inputdomain = document.getElementById("domain").value;
	var inputhos = document.getElementById("hos").value;

db.collection("users").add({
    name: inputtext,
    email: inputemail,
    number:inputnum ,
    domain:inputdomain,
    hospital: inputhos

})
.then(function() {
    console.log("Document written  ");
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}
