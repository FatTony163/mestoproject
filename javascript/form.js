// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-job');


// Обработчик «отправки» формы,
function formSubmitHandler(evt) {
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value
    document.getElementsByClassName(".popup__input-name")[0].value
    document.getElementsByClassName(".popup__input-job")[0].value
        // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent



}
//profile__name
//profile__position
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
formElement.addEventListener('submit', formSubmitHandler);