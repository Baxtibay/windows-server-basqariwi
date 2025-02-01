const form = document.querySelector('.form');


const answersDB = () => [
  {
    quostion: "Question",
    a: "Answer",
    b: "Answer",
    c: "Answer",
    d: "Answer"
  },
  {
    quostion: "Question",
    a: "Answer",
    b: "Answer",
    c: "Answer",
    d: "Answer"
  },
  {
    quostion: "Question",
    a: "Answer",
    b: "Answer",
    c: "Answer",
    d: "Answer"
  },
  {
    quostion: "Question",
    a: "Answer",
    b: "Answer",
    c: "Answer",
    d: "Answer"
  },
  {
    quostion: "Question",
    a: "Answer",
    b: "Answer",
    c: "Answer",
    d: "Answer"
  },
  {
    quostion: "Question",
    a: "Answer",
    b: "Answer",
    c: "Answer",
    d: "Answer"
  },
  {
    quostion: "Question",
    a: "Answer",
    b: "Answer",
    c: "Answer",
    d: "Answer"
  },
  {
    quostion: "Question",
    a: "Answer",
    b: "Answer",
    c: "Answer",
    d: "Answer"
  },
  {
    quostion: "Question",
    a: "Answer",
    b: "Answer",
    c: "Answer",
    d: "Answer"
  },
  {
    quostion: "Question",
    a: "Answer",
    b: "Answer",
    c: "Answer",
    d: "Answer"
  },
];

answersDB().forEach((item, index) => {
  const container = document.createElement('div')

  container.innerHTML = `

      <ul class="test-list">
      <span class="quostion-text">${index + 1}. ${item.quostion}</span>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.a}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.b}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.c}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input class="answer-input" type="radio" name="${index}"> ${item.d}
              </label>
            </li>
        </ul>
  `
  form.append(container)
})

// elHtml
const elButton = document.querySelector('#generate')
const elAnswerContent = document.querySelector('.result')
// const elsAnswers = document.querySelectorAll('.js-buttons')
// console.log(elsAnswers);

elAnswerContent.innerHTML = ''
const buttonNumber = []

headerContent()
counter(25)
createSendButton('div', 'button-submit', 'Yakunlash', elAnswerContent)
// When clicked, background changed other color
if(elButton) {
  elButton.addEventListener('click', () => {
    const button = document.createElement('button')
    button.classList.add('button-primary')
    button.textContent = 26

    elAnswerContent.appendChild(button)
  })
}

// Clicker function
if(elAnswerContent) {
  elAnswerContent.addEventListener('click', (evt) => {
    if(evt.target.matches('.button-primary')) {
      evt.target.classList.add('background-color')
    }
  })
}

// Generate 50 answers
if(elAnswerContent) {
  elAnswerContent.addEventListener('click', (evt) => {
    if(evt.target.matches('.button-submit')) {
      elAnswerContent.innerHTML = ''

      headerContent()
      counter(50)
      createSendButton('div',
        'button-submit',
        'Yakunlash',
        elAnswerContent
      )
    }
  })
}


// ------------------========= FUNCTIONS START =======-------------

// BUTTON counter
function counter(count) {
  for(let i = 1; i <= count; i++) {
    buttonNumber.push(i)
    createButton()
  }
}


// CREAT BUTTON FUNCTION
function createButton() {
  const button = document.createElement('button')
    button.classList.add('button-primary', 'js-buttons')
    elAnswerContent.appendChild(button)

  buttonNumber.forEach(item => {
    button.textContent = item
  })
}


// Content header maker
function headerContent() {
  const span = document.createElement('span')
  span.classList.add('answer')

  span.innerHTML = `
    <a href="file/novaya.txt" class="answer__link" target="_blank">Javoblar
    </a>
  `
  elAnswerContent.appendChild(span)
}

// CREATE SEND BUTTON
function createSendButton(div, clasName, text, append) {
  div = document.createElement(div)
  div.classList.add(clasName)
  div.style.textAlign = 'center'
  div.textContent = text
  append.appendChild(div)
}

// ------------------========= FUNCTIONS END =======-------------