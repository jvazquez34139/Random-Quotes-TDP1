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
function printQuote(){
  const quote = getRandomQuote(quotes);
  let html = "";
  quote.index = quotes.indexOf(quote);
  document.getElementById("quote").innerHTML = quote.quote;

  //check for citation
  if(quote.index === 3 || quote.index === 2){
    html = quote.source + "<span class=\"citation\">" + quote.citation + "</span>"

    //checks for year
    if(quote.index === 2){
      html += "<span class=\"year\">" + quote.year + "</span>"
    }
    document.getElementById("source").innerHTML = html;
  }else{
    document.getElementById("source").innerHTML = quote.source;
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
  if(timerTicker === 200){
    printQuote();
  }
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var newQuoteTimer = setInterval(timer,100);
