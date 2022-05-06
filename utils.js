export function renderGame(game) {
    const container = document.createElement('div');
    const title = document.createElement('h1');
    const pic = document.createElement('img');
    const word = document.createElement('p'); 

    title.textContent = game.name;
    pic.src = game.Image;
    word.textContent = `${game.name} is a good game`;
    container.append(title, pic, word);
    return container;

}