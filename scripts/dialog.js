document.addEventListener('DOMContentLoaded', function() {
  const memoryDialog = document.getElementById('memory-dialog');
  const saveButton = document.querySelector('.save-memory-btn');
  
  if (!memoryDialog || !saveButton) return;

  saveButton.addEventListener('click', function(event) {
    event.preventDefault();
    memoryDialog.showModal();
  });

  memoryDialog.addEventListener('click', function(event) {
    const rect = memoryDialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      memoryDialog.close();
    }
  });

  memoryDialog.addEventListener('cancel', function(event) {
    event.preventDefault();
  });
});