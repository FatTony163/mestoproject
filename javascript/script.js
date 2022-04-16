const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');

let profileName = document.querySelector('.profile__name')
let profileJob = document.querySelector('.profile__position')
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-job');

function popupOpenToggle(evt) {
    console.log("evt", evt);
    popup.classList.toggle('popup_visible')
}

popupCloseButton.addEventListener('click', popupOpenToggle);

function editProfile() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    popupOpenToggle();
}

popupOpenButton.addEventListener('click', editProfile);

// Обработчик «отправки» формы,
function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupOpenToggle();
}

formElement.addEventListener('submit', formSubmitHandler);