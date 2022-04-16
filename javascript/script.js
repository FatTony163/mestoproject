const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');

function popupOpenToggle(evt) {
    console.log("evt", evt);
    popup.classList.toggle('popup_visible')
}

popupOpenButton.addEventListener('click', popupOpenToggle);
popupCloseButton.addEventListener('click', popupOpenToggle);