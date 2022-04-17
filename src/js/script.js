const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote")



// function for getting a random number from an array
Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

// fetching quotes from zenQuotes
const getRandomQuote = async () => {
    const url = "https://type.fit/api/quotes";  
    
    try {
        const response = await fetch(url);
        const responseData = await response.json();
        
        const randomQuote = responseData.sample();
        console.log(randomQuote);

        const text = randomQuote.text;
        const author = randomQuote.author;

        quoteText.innerText = " \" " + text ;
        quoteAuthor.innerText = "-- " + author;
    } catch (error) {
        console.log(`An error occurred: ${error}`)
    } finally {
        console.log("This is the last line")
    }

};

// loading a quote on page load
const init = () => {
    getRandomQuote();
    
};

window.onload = init;

// loading a new quote on button click
newQuoteButton.addEventListener("click", () => {
    getRandomQuote();
    console.log("button clicked")
  });