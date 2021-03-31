const baseURL = 'https://rickandmortyapi.com/api';

const getCharacter = async () => {
  const response = await fetch(`${baseURL}/character`);
  const character = await response.json();
  return character;
};

console.log(getCharacter());
const characterContainer = document.querySelector('.character-container');

window.addEventListener('load', async () => {
  const data = await getCharacter();
  console.log(data.results);

  function getDOMContent() {
    const characterImage = data.results[0].image;
    const characterName = data.results[0].name;
    const characterGender = data.results[0].gender;

    const characterImage1 = data.results[1].image;
    const characterName1 = data.results[1].name;
    const characterGender1 = data.results[1].gender;
    characterContainer.innerHTML = `
        <div class="character">
            <img src=${characterImage} />
            <h3 class="name">${characterName}</h3>
            <h4>${characterGender}</h4>
        </div>
            <div class="character">
            <img src=${characterImage1} />
            <h3 class="name">${characterName1}</h3>
        <h4>${characterGender1}</h4>
      `;
  }
  getDOMContent();
});
