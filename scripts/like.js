/* этот скрипт использует такие имена классов:
✦ heart-icon — для svg-иконки анимированного сердца
✦ memory-card__like-btn — для кнопки Like рядом с иконкой
✦ memory-card__icon-btn — для кнопки, оборачивающей иконку
✦ heart-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ btn-text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

document.addEventListener('DOMContentLoaded', function() {
  const heartIcons = document.querySelectorAll('.heart-icon');
  const likeButtons = document.querySelectorAll('.memory-card__like-btn');
  const iconButtons = document.querySelectorAll('.memory-card__icon-btn');

  iconButtons.forEach((iconButton, index) => {
    iconButton.addEventListener('click', function(event) {
      event.preventDefault();
      toggleHeartLike(heartIcons[index], likeButtons[index]);
    });
  });

  likeButtons.forEach((button, index) => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      toggleHeartLike(heartIcons[index], button);
    });
  });

  function toggleHeartLike(heart, button) {
    heart.classList.toggle('heart-liked');
    updateButtonText(heart, button);
  }

  function updateButtonText(heart, button) {
    if ([...heart.classList].includes('heart-liked')) {
      setTimeout(
        () => (button.querySelector('.btn-text').textContent = 'Unlike'),
        500
      );
    } else {
      setTimeout(
        () => (button.querySelector('.btn-text').textContent = 'Like'),
        500
      );
    }
  }
});