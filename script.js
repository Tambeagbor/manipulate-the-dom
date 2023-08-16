let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitle = document.querySelector('#main-title');
  mainTitle.textContent = "Shorter Title";

  // Part 2
  document.body.style.backgroundColor = "#f2f2f2"; // You can replace this color code with the color of your choice

  // Part 3
  const favoriteThingsList = document.querySelector('#favorite-things');
  const lastListItem = favoriteThingsList.lastElementChild;
  if (lastListItem) {
    favoriteThingsList.removeChild(lastListItem);
  }

  // Part 4
  const specialTitles = document.querySelectorAll('.special-title');
  specialTitles.forEach(title => {
    title.style.fontSize = '2rem';
  });

  // Part 5
  const pastRacesList = document.querySelector('#past-races');
  const chicagoRace = pastRacesList.querySelector('li:last-child'); // Assuming Chicago is the last list item
  if (chicagoRace) {
    pastRacesList.removeChild(chicagoRace);
  }

  // Part 6
  const newCity = 'New York'; // Replace this with the name of the new city
  const newRaceItem = document.createElement('li');
  newRaceItem.textContent = newCity;
  pastRacesList.appendChild(newRaceItem);

  // Part 7
  const blogContainer = document.querySelector('.blog-container');
  const newBlogPost = document.createElement('div');
  newBlogPost.classList.add('blog-post');

  const newBlogTitle = document.createElement('h2');
  newBlogTitle.textContent = `Exploring ${newCity}`;

  const newBlogContent = document.createElement('p');
  newBlogContent.textContent = `I recently had the opportunity to visit ${newCity} and explore its vibrant culture and landmarks. The experience was truly unforgettable.`;

  newBlogPost.appendChild(newBlogTitle);
  newBlogPost.appendChild(newBlogContent);
  blogContainer.appendChild(newBlogPost);

  // Part 8 (Random Quote Click Event)
  const quoteTitle = document.querySelector('#quote-title');
  quoteTitle.addEventListener('click', randomQuote);

  // Part 9 (Mouse Events)
  const blogPosts = document.querySelectorAll('.blog-post');
  blogPosts.forEach(blogPost => {
    // Mouseout event handler
    blogPost.addEventListener('mouseout', () => {
      blogPost.classList.toggle('purple');
    });

    // Mouseenter event handler
    blogPost.addEventListener('mouseenter', () => {
      blogPost.classList.toggle('red');
    });
  });
});

