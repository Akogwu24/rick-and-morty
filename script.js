const baseURL = 'https://rickandmortyapi.com/api';

const getCharacter = async () => {
  const response = await fetch(`${baseURL}/character`);
  const character = await response.json();
  return character;
};

const characterContainer = document.querySelector('.character-container');

window.addEventListener('load', async () => {
  const data = await getCharacter();
  const characterData = data.results;
  characterData.map((character) => {
    characterContainer.innerHTML += `
      <div class="character">
        <img src=${character.image} />
        <h3 class="name">${character.name}</h3>
        <h4>${character.gender}</h4>
      </div>`;
  });
});
