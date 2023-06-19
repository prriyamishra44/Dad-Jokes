const button = document.getElementById('btn')

const joke = document.getElementById('joke');

const apiKey = "Z7y9I0cc5c5cQIgEA35fyA==Y5oVFf35KowrtNi9";

const option ={
    method: "GET",
    headers:{
        "X-Api-Key" : apiKey,
    },
}
const url = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

  try {
    joke.innerText = "Updating..."
   button.disabled = true;
   button.innerText = "Loading.."
  const response = await fetch(url,option)
  const data = await response.json();
  button.disabled = false;
   button.innerText = "Tell Me a Joke"

  joke.innerText= data[0].joke;
  
    
  } catch (error) {
    button.disabled = false;
    button.innerText = "Tell Me a Joke"
    joke.innerText = "An error happened, tyr again latter"
 
    
  }
  
}

button.addEventListener('click', getJoke)