const head = document.createElement('header');
head.setAttribute('id', 'head');

const heroTitle = document.createElement('div');
heroTitle.setAttribute('class', 'hero-title');

const subheader = document.createElement('span');
subheader.setAttribute('class', 'subheader');
subheader.innerText = 'World class pizza';

const h1 = document.createElement('h1');
h1.innerText = 'Delivery, Takeout, or Dinein!';

head.append(heroTitle);
heroTitle.append(subheader);
heroTitle.append(h1);

export { head };