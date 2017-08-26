'use strict';

var ESC_KEYCODE = 27;

var ENTER_KEYCODE = 13;

var wizards = [];

var wizardsData = {
  WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],

  WIZARD_LAST_NAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],

  COLORS_OF_COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],

  COLORS_OF_EYES: ['black', 'red', 'blue', 'yellow', 'green'],

  COLORS_OF_FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};

function getRandomVariable(wizardsAtribute) {
  return wizardsAtribute[Math.floor(Math.random() * wizardsAtribute.length)];
}

function getRandomArrIndex(wizardsAtribute, count) {
  var randomArrIndex = [];
  while (randomArrIndex.length < count) {
    var randomNumber = Math.floor(Math.random() * wizardsAtribute.length);
    var foundedNumber = false;
    for (var i = 0; i < count; i++) {
      if (randomArrIndex[i] === randomNumber) {
        foundedNumber = true;
        break;
      }
    }
    if (!foundedNumber) {
      randomArrIndex[randomArrIndex.length] = randomNumber;
    }
  }
  return randomArrIndex;
}

function makeFullName(count) {
  var fullNamesArr = [];
  var indexes = getRandomArrIndex(wizardsData.WIZARD_NAMES, count);
  for (var i = 0; i < count; i++) {
    fullNamesArr[i] = wizardsData.WIZARD_NAMES[indexes[i]] + ' ' + wizardsData.WIZARD_LAST_NAMES[indexes[i]];
  }
  return fullNamesArr;
}

function createWizardsData(count) {
  var fullNames = makeFullName(count);
  for (var i = 0; i < count; i++) {
    wizards[i] = {
      name: fullNames[i],
      coatColor: getRandomVariable(wizardsData.COLORS_OF_COAT),
      eyesColor: getRandomVariable(wizardsData.COLORS_OF_EYES)
    };
  }
  return wizards;
}

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
// var setupUserName = setup.querySelector('.setup-user-name');

function showModal() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', modalEscHandler);
}

function modalEscHandler(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeModal();
  }
}

function closeModal() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', modalEscHandler);
}

// function closeModal() {
//   if (!setupUserName.onfocus) {
//     setup.classList.add('hidden');
//     document.removeEventListener('keydown', modalEscHandler);
//   } else if (setupUserName.onfocus) {
//     setupUserName.setCustomValidity('Введите имя');
//   }
// }

// setupClose.addEventListener('click', function () {
//   closeModal();
// });

setupOpen.addEventListener('click', function () {
  showModal();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    showModal();
  }
});

setupClose.addEventListener('click', function () {
  // if (!setupUserName.focus) {
  closeModal();
  // } else if (setupUserName.focus) {
  //   setupUserName.setCustomValidity('Введите имя');
  // }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeModal();
  }
});

function renderWizards() {
  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  for (var i = 0; i < wizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    similarListElement.appendChild(wizardElement);
  }
}

createWizardsData(4);

renderWizards();

var setupPlayer = document.querySelector('.setup-player');
var wizardCoat = setupPlayer.querySelector('.wizard-coat');
var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomVariable(wizardsData.COLORS_OF_COAT);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomVariable(wizardsData.COLORS_OF_EYES);
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = getRandomVariable(wizardsData.COLORS_OF_FIREBALL);
});
