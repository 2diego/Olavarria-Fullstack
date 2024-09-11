const links = [
  'https://www.wikipedia.org',
  'https://www.google.com',
  'https://www.youtube.com',
  'https://www.github.com',
  'https://www.stackoverflow.com'
];

function goToRandomPage() {
  const randomIndex = Math.floor(Math.random() * links.length);
  const randomLink = links[randomIndex];
  window.location.href = randomLink;
}


document.getElementById('random-button').addEventListener('click', goToRandomPage);
