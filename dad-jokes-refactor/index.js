import { jokeButton } from './elements.js';

// Named export (we can have lots of these)
export async function fetchJoke(loader) {
  // thrn loeader on
  loader.classList.remove('hidden');
  jokeButton.classList.add('hidden');
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await res.json();
  // thrn the loader off
  loader.classList.add('hidden');
  jokeButton.classList.remove('hidden');
  return data;
}