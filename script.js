const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const textHoliday = 'Feriados';

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1
function createDaysList() {
  const daysList = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const dayNumber = dezDaysList[index];
    const dayListItem = document.createElement('li');
    dayListItem.classList.add('day');
    dayListItem.innerText = dayNumber;
    daysList.appendChild(dayListItem);

    if (dayNumber === 24 || dayNumber === 25 || dayNumber === 31) {
      dayListItem.classList.add('holiday');
    }

    switch (dayNumber) {
      case 4:
        dayListItem.classList.add('friday');
        break; 
      case 11:
        dayListItem.classList.add('friday');
        break;
      case 18:
        dayListItem.classList.add('friday');
        break;
      case 25:
        dayListItem.classList.add('friday');
        break;
    }
  }
}

// Exercicio 2
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function createButtonHoliday(parametro) {
  const btnHoliday = document.createElement('button');
  btnHoliday.innerText = parametro;
  btnHoliday.id = 'btn-holiday';
  const buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(btnHoliday);
}

// Exercicio 3
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
function handleClickButtonHolidays() {
  const holidays = document.querySelectorAll('.holiday');
  for (const day of holidays) {
    day.classList.toggle('holiday-color');
  }
}

function changeHolidayColor() {
  const btnHolidays = document.getElementById('btn-holiday');
  btnHolidays.addEventListener('click', handleClickButtonHolidays)
}

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function createFridayButton(parameter) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const fridayButton = document.createElement('button');
  fridayButton.innerHTML = parameter;
  buttonsContainer.appendChild(fridayButton);
  fridayButton.setAttribute('name', 'Sexta-feira');
  fridayButton.id = 'btn-friday';
}

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
function createEventFridayButton() {
  const buttonFriday = document.querySelector('#btn-friday');
  buttonFriday.addEventListener('click', () => {
    const fridays = document.querySelectorAll('.friday');
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== 'SEXTOUUUU') {
        fridays[index].innerHTML = 'SEXTOUUUU';
      } else {
        fridays[index].innerHTML = (parseInt(fridays[index].nextSibling.innerText) - 1).toString();
      }
    }
  });
}


createDaysList();
createButtonHoliday(textHoliday);
changeHolidayColor();
createFridayButton('Sexta-feira');
createEventFridayButton();
