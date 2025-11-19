// Обработка диалогового окна
document.addEventListener('DOMContentLoaded', function() {
  const dialog = document.getElementById('dialog-id');
  const saveButton = document.querySelector('.footer-button');
  
  if (!dialog || !saveButton) return;

  // Открытие диалога
  saveButton.addEventListener('click', function(event) {
    event.preventDefault();
    dialog.showModal();
  });

  // Закрытие диалога по клику на подложку
  dialog.addEventListener('click', function(event) {
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      dialog.close();
    }
  });

  // Предотвращение закрытия по Escape если нужно
  dialog.addEventListener('cancel', function(event) {
    event.preventDefault();
  });
});