'use strict';

(function () {
  var wizards = [];
  var wizardsData = {
    WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    WIZARD_LAST_NAMES: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    COLORS_OF_COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    COLORS_OF_EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    COLORS_OF_FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };
  var setupPlayer = document.querySelector('.setup-player');
  var wizardCoat = setupPlayer.querySelector('.wizard-coat');
  var wizardEyes = setupPlayer.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

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

  function colorize(arrayOfColors) {
    return getRandomVariable(arrayOfColors);
  }

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = colorize(wizardsData.COLORS_OF_COAT);
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = colorize(wizardsData.COLORS_OF_EYES);
  });

  wizardFireball.addEventListener('click', function () {
    wizardFireball.style.background = colorize(wizardsData.COLORS_OF_FIREBALL);
  });
})();
