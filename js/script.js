// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
  {
    quote:"You must be the change you wish to see in the world.",
    source:"Gandhi",
  },
  {
    quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    source:"Dr. Seuss",
  },
  {
    quote:"Love all, trust a few, do wrong to none.",
    source:"William Shakespeare",
  },
  {
    quote:"Success is not final, failure is not fatal: it is the courage to continue that counts.",
    source:"Winston Churchill"
  },
  {
    quote:"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    source:"Lao Tzu"
  }
];

// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote(){
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Create the printQuote funtion and name it printQuote
function randomHexColor(){
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
function printQuote(){
  var quote = getRandomQuote();
  document.getElementById("quote").innerHTML = quote.quote;
  document.getElementById("source").innerHTML = quote.source;
  console.log(randomHexColor());
  document.body.style.backgroundColor = "#" + randomHexColor();
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var newQuoteTimer = setInterval(printQuote,20000);
