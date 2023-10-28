const formData = document.querySelector('.email');

formData.addEventListener('submit', async (event) => {
  event.preventDefault();
  const userData = await Object.fromEntries(new FormData(formData));

  await fetch('http://iasasc.centralindia.cloudapp.azure.com:8088/api/contact-us', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
  console.log(JSON.stringify(userData));
});


const InputEmailText = document.querySelector('.emailInput');

const emailValidator = new RegExp('[a-z0-9]+@[a-z]+\.com');

InputEmailText.oninput = function() {
    InputEmailText.style.color = 'white';
    InputEmailText.style.border = '2px solid #ffffff';
};

formData.addEventListener('click', ()=>{
  if ( !InputEmailText.value || emailValidator.test(InputEmailText.value)) {
    InputEmailText.style.color = 'white';
    InputEmailText.style.border = '2px solid #ffffff';
  } else {
    InputEmailText.style.color = 'red';
    InputEmailText.style.border = '2px solid red';
  }
  
})


