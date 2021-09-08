// All the DOM selectors stored as short variables
const chat = document.getElementById('chat')
const welcomeButton = document.getElementById('welcomeBtn')
const sendBtn = document.getElementsByClassName('send-btn')
const input = document.getElementById('input')
const inputWrapper = document.getElementById('input-wrapper')


// Global variables, if you need any, declared here

// Functions declared here

let questionNumber = 1

const botReply = (message) => {
  showMessage(message, 'bot')
}

const userReply = (message) => {
  showMessage(message, 'user')
}

// This function will add a chat bubble in the correct place based on who the sender is



const showMessage = (message, sender) => {
  if (sender === 'user') {
    console.log();
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
 questionNumber = 0
  showMessage(`Hello there Beat Bot!`, 'user')
  setTimeout (() => botGreeting(), 1000)
  // Just to check it out, change 'bot' to 'user' here 👆
}

welcomeButton.onclick = function () {
  if (welcomeButton.style.display !== 'none') {
    welcomeButton.style.display = 'none'; {
      greeting(showMessage, 'user')
      }
    };
}

const botGreeting = () => {
  showMessage(`Hello there human, what's your name?`, 'bot')
  nextQuestion()
  
  // Just to check it out, change 'bot' to 'user' here 👆
}


/*const nextQuestion = ()=>{
  console.log('questionNumber', questionNumber)
 if (questionNumber === 1){
    botGreeting(`Hello there human, what's your name?`, 'bot')
    input.value =''
    
  }
}*/

const handleNameInput = (event) => {
  event.preventDefault()
  
  const name = nameInput.value
  showMessage(name, 'user')
  nameInput.value = ''

  setTimeout(() => whatMood(name), 1000)
}

const whatMood = () => {
  questionNumber = 1
  botReply(`Oh ${name} what mood are you in?`)
}

const moods = (type) => {
  questionNumber++

  botReply(`Totally understand your ${type} mood, let me give you some beats to match it`)

  if(type === 'sad', 'depressed', 'blue') {
   inputWrapper.innerHTML = `
   <select id="select">
    <option value="" selected disabled> Select a beat..</option>
    <option value="Hassle">Erik Hassle - Hurtful</option>
    <option value="TheFray">The Fray - How to save a life</option>
    <option value="Coldplay">Coldplay - Fix you</option>
  </select>
  `
  } else if (type === 'happy', 'glad', 'excited') {
    inputWrapper.innerHTML = `
   <select id="select">
    <option value="" selected disabled> Select a beat..</option>
    <option value="Pharell">Pharell Williams - Happy</option>
    <option value="Timberlake">Justin Timberlake - Can't stop the feeling</option>
    <option value="Beyonce">Beyonce - Single ladies</option>
  </select>
  `
  } else if (type === 'angry', 'mad', 'frustrated', 'irritated') {
    inputWrapper.innerHTML = `
   <select id="select">
    <option value="" selected disabled> Select a beat..</option>
    <option value="Pink">Pink - So what</option>
    <option value="Swift">Taylor Swift - I knew you were trouble</option>
    <option value="CudiWest">Kid Cudi, Kanye West - Erase Me</option>
  </select>
  `
 } else (type === 'in love', 'love', 'romantic'); {
  inputWrapper.innerHTML = `
 <select id="select">
  <option value="" selected disabled> Select a beat..</option>
  <option value="Legend">John Legend - All of me</option>
  <option value="Houston">Whitney Houston - I will always love you</option>
  <option value="Carey">Mariah Carey - We Belong Together</option>
</select>
`
 }



/*const nextQuestion = (message) => {
  console.log('questionNumber', questionNumber)

  if (questionNumber === 1) {
    userReply(message)
    input.value = ''
    setTimeout(() => whatMood(message), 1000)
  } else if (questionNumber === 2) {
    userReply(message)
    input.value = ''
    setTimeout(() => moods(message), 1000)
  } else if (questionNumber === 3) {
    userReply(message)
    input.value = ''
    setTimeout(() => showDishSize(message), 1000)
  } else if (questionNumber === 4) {
    userReply(message)
    setTimeout(() => showPrice(message), 1000)
  } else {
    userReply(message)
    setTimeout(thankYou, 1000)
  }
}*/


/*const nextQuestion = ()=>{
  console.log('questionNumber', questionNumber)
  switch(questionNumer){
    case 1: //botens nästa sak
      break;
    case 2:
      break;
      default:
        break;
  }
  
}*/


// Set up your eventlisteners here

// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
//setTimeout(greeting, 1000)

sendBtn.addEventListener('click', () => nextQuestion(input.value))
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input.value) nextQuestion(input.value)
})
