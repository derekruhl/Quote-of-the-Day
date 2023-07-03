// Math.random
// Math.floor 1-10
// random quote for each case (and use switch statements)
// any parameters? just a function??
// Make it a full webpage with HTML and CSS

function getRandomQuote() {
    let num = Math.floor(Math.random() * 10);

    switch (num) {
        case 0:
            console.log('To love abundantly is to live abundantly, and to love forever is to live forever. -Henry Drummond');
            break;
        case 1:
            console.log("Go forth under the open sky, and list To Nature's teachings. -William Cullen Bryant");
            break;
        case 2:
            console.log('They do not love that do not show their love. -William Shakespeare');
            break;
        case 3:
            console.log('If it were not for hopes, the heart would break. -Thomas Fuller');
            break;
        case 4:
            console.log('Someday is not a day of the week. -Denise Brennan-Nelson');
            break;
        case 5:
            console.log("Your time is limited, so don't waste it living someone else's life. -Steve Jobs");
            break;
        case 6:
            console.log("Be patient with yourself. Self-growth is tender; it's holy ground. There's no greater investment. -Stephen Covey");
            break;
        case 7:
            console.log("I'd rather regret the things I've done than regret the things I haven't done. -Lucille Ball");
            break;
        case 8:
            console.log('Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new. -Brian Tracy');
            break;
        case 9:
            console.log('Done is better than perfect. -Sheryl Sandberg');
            break;      
    }
  }
  
  console.log(getRandomQuote());