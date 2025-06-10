window.onload = function () {
  // Typewriter letter content
  const letterText = `
Dear Love,

I'm sorry...
Sometimes love, no matter how deep, isn't enough to keep two stars aligned.

Maybe we weren’t meant to last forever — 
but for a while, we were everything to each other.

You will always be a part of my sky.
Thank you for being my favorite constellation.

Goodbye, with love.
`;

  const letter = document.getElementById('letter');
  let index = 0;

  function typeWriter() {
    if (index < letterText.length) {
      letter.innerHTML += letterText.charAt(index);
      index++;
      setTimeout(typeWriter, 40); // Speed of typing
    }
  }

  setTimeout(typeWriter, 4000); // Start after 4 seconds

  // Create falling "I'm sorry" stars
  const container = document.getElementById('falling-text');
  for (let i = 0; i < 40; i++) {
    const text = document.createElement('div');
    text.classList.add('falling-text');
    text.innerText = "I'm sorry";
    text.style.left = Math.random() * 100 + 'vw';
    text.style.animationDuration = (5 + Math.random() * 7) + 's';
    text.style.animationDelay = (Math.random() * 5) + 's';
    text.style.fontSize = (1 + Math.random()).toFixed(1) + 'em';
    container.appendChild(text);
  }
};
