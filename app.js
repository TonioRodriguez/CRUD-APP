function inicio() {
  localStorage.clear()
}

window.onload = inicio;

const botonGuardar = document.getElementById('guardar')
const inputValue = document.querySelector('#input-1')
let arr = []

botonGuardar.addEventListener('click', () => {
  arr.push(inputValue.value)
  localStorage.setItem('lista', arr)
  inputValue.value = ''
  renderElement(arr)
})

function renderElement() {
  let container = document.getElementById('listitm')
  console.log(arr)
  if(arr === ['']){
    console.log('vacío')
    localStorage.clear()
  } else {
    container.innerHTML = '';// esta linea
    arr.forEach(function (el, index) {
    container.innerHTML += `
        <li id ="${index}" class= "list-group-item">
          ${el}
        </li>
        <button type="button" class="btn btn-danger btn-sm" id="delete" onclick="borrarElemento(${index})">Quitar</button>
        <button type="button" class="btn btn-warning btn-sm" id="edit" onclick="editarElemento(${index})">Editar</button>
      `;
  })
  }
}

function borrarElemento(i){
  arr.splice(i, 1)
  localStorage.setItem('lista', arr)
  renderElement()
}

function editarElemento(i) {
  let edited = prompt('Edita tu dirección :D')
  arr[i] = edited
  localStorage.setItem('lista', arr)
  renderElement()
}

function getElements() {
  let localS = localStorage.getItem('lista')
  arr = localS.split(',')
  renderElement()
}
getElements()

