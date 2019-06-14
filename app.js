async function getJoke() {
  // Vars
  const UIjokes = document.querySelector('.jokes');
  const UIloader = document.querySelector('.loader');

  const response = await fetch('https://sv443.net/jokeapi/category/Programming');
  const data = await response.json();
  console.log(data);
  let output = '';
  UIloader.style.display = 'block';
  UIjokes.style.display = 'none';
  setTimeout(() => {
    if (data.type === 'single') {
      output += `
      <div class="text-2">
      <h3>${data.joke}</h3>
      </div>
      `
    } else {
      output += `
      <div>
      <h4 class="text-1">${data.setup}<h4>
      <h3 class="text-2">${data.delivery}<h3>
      </div>
      `
    }
    UIloader.style.display = 'none';
    UIjokes.style.display = 'block';
    UIjokes.innerHTML = output;
  }, 2000)
}
getJoke();

document.querySelector('.btn').addEventListener('click', getJoke);