// Create the array of quote objects and name it quotes
var timerTicker = 0;

// Create the getRandomQuote function and name it getRandomQuote
const getRandomQuote = quoteArray => {
  const randomIndex = Math.floor(Math.random() * quoteArray.length);
  return quoteArray[randomIndex];
}

//makes a random hexadecimal color;
const randomHexColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

// Create the printQuote funtion and name it printQuote
const printQuote = () => {
  const quote = getRandomQuote(quotes);
  document.getElementById("quote").innerHTML = quote.quote;
  let source = document.getElementById("source");
  source.innerHTML = quote.source;
  //check for citation
  if(quote.citation){
    source.innerHTML += "<span class=\"citation\">" + quote.citation + "</span>";
  }
  //checks for year
  if(quote.year){
    source.innerHTML += "<span class=\"year\">" + quote.year + "</span>";
  }
  //changes the color of the page's body
  document.body.style.backgroundColor = "#" + randomHexColor();
  //sets the timers ticks back to 0
  //so it only reprints automatically 20 secs after not clicking
  //instead of every 20 seconds exact regardless of the button clicked
  timerTicker = 0;
}

//keeps tracks of intervals
//prints quote 20 secs of not clicking the button
function timer(){
  timerTicker++;
  if(timerTicker === 30){
    printQuote();
  }
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

setInterval(timer,100);
