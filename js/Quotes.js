const quotes =[
    {quote : "Life is a tragedy when seen in close-up, but a comedy in long-shot.",
     author: "Charlie Chaplin"
    },
    { quote: "Life isn't fair. It's just fairer than death, that's all.",
      author: "William Goldman"
    },
    {quote : "Eighty percent of success is showing up.",
     author: "Woody Allen"
    },
    { quote: "There is only one success - to be able to spend your life in your own way.",
      author: "Christopher Morley"
    },
    { quote: "The world is full of suffering but it is also full of people overcoming it.",
      author: "Helen Keller"
    },
    { quote: "There is no security on this earth, there is only opportunity.",
      author: "General Douglas MacArthur"
    },
    { quote: "I'm youth, I'm joy, I'm a little bird that has broken out of the egg.",
      author: "James M. Barrie"
    },
    { quote: "When we were children, we used to think that when we were grown-up we would no longer be vulnerable. But to grow up is to accept vulnerability... To be alive is to be vulnerable.",
      author: "Madeleine L'Engle"
    },
    { quote: "Happiness lies in the joy of achievement and the thrill of creative effort.",
      author: "Theodore Roosevelt"
    },
    {quote : "Determine never to be idle...It is wonderful how much may be done if we are always doing.",
     author : "Thomas Jeffeson"
    }    
];
// 명언들의 개수를 파악하자 -=> .length
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;