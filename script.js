// Elementos
const characterId = document.querySelector("#characterId");
const Button = document.querySelector("#btn");
const content = document.querySelector("#content");
const img = document.querySelector("#img");
// Fetch
const getInfo = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((response) => response.json())
    .then((dados) => {
        console.log(dados);
        return dados
    });
    return result
}

// Evento
Button.addEventListener('click', async (event) => {
    event.preventDefault();

    const result = await getInfo(characterId.value)

    content.textContent = `${JSON.stringify(result)}`
    content.classList.remove("hide")

    img.src = `${(result.image)}`
});
