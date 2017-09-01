'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var saveButton = setup.querySelector('.setup-submit');

  function modalEscHandler(evt) {
    window.util.isEscEvent(evt, closeModal);
  }

  function showModal() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', modalEscHandler);
  }

  function closeModal() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', modalEscHandler);
  }

  setupOpen.addEventListener('click', function () {
    showModal();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, showModal);
  });

  setupClose.addEventListener('click', function () {
    closeModal();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closeModal);
  });

  saveButton.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closeModal);
  });

  saveButton.addEventListener('click', function () {
    closeModal();
  });
})();
