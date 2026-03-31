VANTA.FOG({
  el: "#intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,

  minHeight: 200,
  minWidth: 200,

  highlightColor: 0xFF7518,
  midtoneColor: 0xff8a5e,
  lowlightColor: 0x8a3f1e,
  baseColor: 0x0f0a08,

  blurFactor: 0.45,
  speed: 0.4,
  zoom: 1.0,

  scale: 5.0,
  scaleMobile: 5.0
});


(function() {
  emailjs.init("tj3XODZf-owBRa1mW"); 
})();


const form = document.querySelector("#contact form");
const nameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');
const messageInput = form.querySelector("textarea");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  [nameInput, emailInput, messageInput].forEach(input => {
    input.style.border = "none";
  });

  if (nameInput.value.trim().length < 2) {
    nameInput.style.border = "2px solid red";
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailInput.style.border = "2px solid red";
    isValid = false;
  }


  if (messageInput.value.trim().length < 10) {
    messageInput.style.border = "2px solid red";
    isValid = false;
  }

  if (isValid) {

    const params = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    };

    emailjs.send("service_9prkfqe", "template_tskaohl", params)
      .then(function() {
        alert("Повідомлення надіслано на Gmail ✅");
        form.reset();
      })
      .catch(function(error) {
        alert("Помилка відправки 😢");
        console.log(error);
      });

  } else {
    alert("Будь ласка, заповніть форму правильно ❗");
  }
});