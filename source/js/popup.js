var popup = document.querySelector('.popup');
var buttonOpenPopup = document.querySelector('.contest__button');
var buttonsClosePopup = document.querySelectorAll('.popup__button');
var popupWarning = document.querySelector('.popup--warning');
var submitPopup = document.querySelector('.popup--submit');

buttonOpenPopup.addEventListener('click', function (e) {
  e.preventDefault();

  if (isFormDataValid()) {
    submitPopup.classList.add('popup--show');
  } else {
    popupWarning.classList.add('popup--show');
  }
});

for (var i = 0; i < buttonsClosePopup.length; i++) {
  var buttonClosePopup = buttonsClosePopup[i];

  buttonClosePopup.addEventListener('click', function (e) {
    e.preventDefault();
    submitPopup.classList.remove('popup--show');
    popupWarning.classList.remove('popup--show');
  });
}

form.addEventListeners('submit', function (e) {
  e.preventDefault();
  submitPopup.classList.add('popup--show');
});

function isFormDataValid() {

  var name = document.querySelector('#name').value;
  var surname = document.querySelector('#surname').value;
  var email = document.querySelector('#email').value;

  if (!name || !surname || !email) return false;

  return true;
}
