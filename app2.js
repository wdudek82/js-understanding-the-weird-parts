const g = G$('Tony', 'Alicea', 'en');

// console.log(g);

g.greet().setLang('es').greet(true).log().HTMLGreeting('#greeting');

document.getElementById('login').addEventListener('click', () => {
  const lang = document.getElementById('lang').value;
  g.setLang(lang).HTMLGreeting('#greeting');
});
