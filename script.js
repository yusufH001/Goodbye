window.onload = function () {
  // Typewriter letter content
  const letterText = `
Mi Cachetona,
I wanted to take a moment to write you this letter,
to express how much you mean to me and how much I will miss you.
You are an incredible person,
and I am so grateful for the time we spent together.
You have a beautiful heart, and your kindness and warmth
You will always be in my heart, shining brighter than the stars.

I really enjoyed talking to you every day — 
you made my days feel so much better just by being there.

I'm truly sorry for not being exactly what you were looking for.

Sometimes love means knowing when to let go,
and even if we're not meant to be forever,
I will always cherish the moments we shared.

Gracias por todo, mi hermosa.

Goodbye, con todo mi amor.
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
