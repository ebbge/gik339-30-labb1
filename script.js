const checkbox = document.getElementById('divStyle'); 

const textfields = document.querySelectorAll('.textfield'); 

const button = document.getElementsByClassName('button')[0]; 

const divElement = document.querySelector('#emptyDiv'); 

function handleInputEvent(e) {
    console.log('Avsändare (target):', e.target); 

    const inputName = e.target.name; 
    console.log('Name-attribut:', inputName);

    divElement.innerHTML = e.target.value;

}

checkbox.addEventListener('change', function() {
    const colorInput = Array.from(textfields).find(input => input.id === 'color'); 
    const color = colorInput.value; 
    divElement.style.backgroundColor = color; 
});

textfields.forEach(textfield => {
    textfield.addEventListener('input', handleInputEvent); 
});
