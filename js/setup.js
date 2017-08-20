'use strict';

var i = 0;
var wizards = [];
var indexes = [];
var fullNames = [];
var fullNamesArr = [];
var randomArrIndex = [];

var wizardsData = {
  WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],

  WIZARD_LAST_NAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],

  COLORS_OF_COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],

  COLORS_OF_EYES: ['black', 'red', 'blue', 'yellow', 'green']
};

function getRandomVariable(wizardsAtribute) {
  return wizardsAtribute[Math.floor(Math.random() * wizardsAtribute.length)];
}

function getRandomArrIndex(wizardsAtribute, count) {
  while (randomArrIndex.length < count) {
    var randomNumber = Math.floor(Math.random() * wizardsAtribute.length);
    var foundedNumber = false;
    for (i = 0; i < count; i++) {
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
  indexes = getRandomArrIndex(wizardsData.WIZARD_NAMES, count);
  for (i = 0; i < count; i++) {
    fullNamesArr[i] = wizardsData.WIZARD_NAMES[indexes[i]] + ' ' + wizardsData.WIZARD_LAST_NAMES[indexes[i]];
  }
  return fullNamesArr;
}

function createWizardsData(count) {
  fullNames = makeFullName(count);
  for (var j = 0; j < count; j++) {
    wizards[j] = {
      name: fullNames[j],
      coatColor: getRandomVariable(wizardsData.COLORS_OF_COAT),
      eyesColor: getRandomVariable(wizardsData.COLORS_OF_EYES)
    };
  }
}

function renderWizards() {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  for (i = 0; i < wizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    similarListElement.appendChild(wizardElement);
  }
}

createWizardsData(4);

renderWizards();
