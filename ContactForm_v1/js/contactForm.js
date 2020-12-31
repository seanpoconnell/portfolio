  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDcZSqsjYH7GIGSWvLP604Wqiz84MVMi40",
    authDomain: "portfolio-b2659.firebaseapp.com",
    databaseURL: "https://portfolio-b2659-default-rtdb.firebaseio.com",
    projectId: "portfolio-b2659",
    storageBucket: "portfolio-b2659.appspot.com",
    messagingSenderId: "75081926636",
    appId: "1:75081926636:web:26a5aec1ce3a0a719ee2c9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference contactInfo collections
let contactInfo = firebase.database().ref("info");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let subject = document.querySelector(".subject").value;
    let message = document.querySelector(".message").value;

    console.log(name, email, subject, message);
    saveContactInfo(name, email, subject, message);

    document.querySelector(".contact-form").reset();
    sendEmail(name, email, subject, message);
};

// Save info to Firebase
function saveContactInfo(name, email, subject, message) {
    let newContactInfo = contactInfo.push();
    newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
};

// Send Email Info
function sendEmail(name, email, subject, message){
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'seanoconnell96@gmail.com',
        Password: "ksvvzaerynnfvecx",
        To: 'seanoconnell96@gmail.com',
        From: `${email}`,
        Subject: `${subject}`,
        Body: `${name} <br/> ${email} <br/> ${message}`
    }).then((message) => Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'email sent successfully',
        showConfirmButton: false,
        timer: 1500
      }))
};
