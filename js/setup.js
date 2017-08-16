'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COLORS_OF_COAT = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var COLORS_OF_EYES = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

// function getRandomNumber(ArrLength) {
//   Math.floor(Math.random() * ArrLength);
// }
// name: WIZARD_NAMES[getRandomNumber(WIZARD_NAMES.length)]

var wizards = [
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_LAST_NAMES[Math.floor(Math.random() * WIZARD_LAST_NAMES.length)],
    coatColor: COLORS_OF_COAT[Math.floor(Math.random() * COLORS_OF_COAT.length)],
    eyesColor: COLORS_OF_EYES[Math.floor(Math.random() * COLORS_OF_EYES.length)]
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_LAST_NAMES[Math.floor(Math.random() * WIZARD_LAST_NAMES.length)],
    coatColor: COLORS_OF_COAT[Math.floor(Math.random() * COLORS_OF_COAT.length)],
    eyesColor: COLORS_OF_EYES[Math.floor(Math.random() * COLORS_OF_EYES.length)]
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_LAST_NAMES[Math.floor(Math.random() * WIZARD_LAST_NAMES.length)],
    coatColor: COLORS_OF_COAT[Math.floor(Math.random() * COLORS_OF_COAT.length)],
    eyesColor: COLORS_OF_EYES[Math.floor(Math.random() * COLORS_OF_EYES.length)]
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_LAST_NAMES[Math.floor(Math.random() * WIZARD_LAST_NAMES.length)],
    coatColor: COLORS_OF_COAT[Math.floor(Math.random() * COLORS_OF_COAT.length)],
    eyesColor: COLORS_OF_EYES[Math.floor(Math.random() * COLORS_OF_EYES.length)]
  }
];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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
