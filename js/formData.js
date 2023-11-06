const formData = document.querySelector(".email");

formData.addEventListener("submit", async (event) => {
  event.preventDefault();
  const userData = await Object.fromEntries(new FormData(formData));

  await fetch("https://iasasc.centralindia.cloudapp.azure.com/api/contact-us1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  }).then((response) => response.json());
  console.log(JSON.stringify(userData));
});

const InputEmailText = document.querySelector(".emailInput");

// const form = document.querySelector(".email");
// const nameInput = form.querySelector('[name="name"]');
// const emailInput = form.querySelector('[name="email"]');
// const messageInput = form.querySelector('[name="message"]');

const emailValidator = new RegExp("[a-z0-9]+@[a-z]+.com");


InputEmailText.oninput = function () {
  InputEmailText.style.color = "white";
  InputEmailText.style.border = "2px solid #ffffff";
};

formData.addEventListener("click", () => {
  if (!InputEmailText.value || emailValidator.test(InputEmailText.value)) {
    InputEmailText.style.color = "white";
    InputEmailText.style.border = "2px solid #ffffff";
  } else {
    InputEmailText.style.color = "red";
    InputEmailText.style.border = "2px solid red";
  }
});

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   nameInput.value = "";
//   emailInput.value = "";
//   messageInput.value = "";
  
// });
