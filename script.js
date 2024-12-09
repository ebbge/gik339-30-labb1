/* Uppgift 4 - Skapa variabler */
const checkbox = document.getElementById('divStyle');

const textfields = document.querySelectorAll('.textfield');

const button = document.querySelector('.button');

const divElement = document.getElementById('emptyDiv');

/* Uppgift 5 - Skapa en fördefinierad funktion */
function handleInput(e) {
  console.log('Avsändare (target):', e.target);

  const inputName = e.target.name;
  console.log('Name-attribut:', inputName);

  if (inputName === 'content') {
    divElement.innerHTML = e.target.value;
  }
}
/* Uppgift 6 Koppla eventlyssnare */
checkbox.addEventListener('change', (e) => {
  const colorInput = document.querySelector('#color');

  if (colorInput) {
    const color = colorInput.value;
    divElement.style.backgroundColor = color;
  } else {
    console.error('Färginputfältet med id="color" finns inte!');
  }
});

textfields.forEach((textfield) => {
  textfield.addEventListener('input', handleInput);
});

button.addEventListener('click', (e) => {
  divElement.remove();
  console.log('Elementet har tagits bort');
});
