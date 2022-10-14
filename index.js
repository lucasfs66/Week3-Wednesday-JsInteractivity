//step 1
const form = document.querySelector('button')
const message = document.querySelector('#message')
//step 2

const addMovie = event => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    let list = document.querySelector('ul')
    let deleteBtn = document.createElement('button')

    movieTitle.textContent = inputField.value
   
    deleteBtn.textContent = 'X'
    
     

    movie.appendChild(movieTitle)
    movie.appendChild(deleteBtn)
    list.appendChild(movie)
    inputField.value = ''
    movieTitle.addEventListener('click', crossOffMovie)
    deleteBtn.addEventListener('click', deleteMovie)
   
}

const deleteMovie = event => {
    event.target.parentNode.remove()
    message.textContent = event.target.parentNode.textContent + ' delete!'
    revealMessage()
}

const crossOffMovie = event => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        console.log(event)
        message.textContent = event.target.textContent + ' watched!'
    } else {
        message.textContent = event.target.textContent + ' added back'
    }
    revealMessage()
}

const revealMessage = () => {
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
    message.classList.remove('hide')
}



//step 3

form.addEventListener('click', addMovie)

/* function addMovie(event) {
    event.preventDefault()
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteMovie)

    let ul = document.querySelector('ul')
    ul.appendChild(movie)
    inputField.value = ''
} */