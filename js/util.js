'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (evt, action) {
      var isInputInactive = document.querySelector('.setup-user-name') !== document.activeElement;
      if (evt.keyCode === ESC_KEYCODE) {
        if (isInputInactive) {
          action();
        } else {
          return;
        }
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };
})();
