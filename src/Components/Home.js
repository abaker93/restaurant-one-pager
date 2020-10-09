const home = document.createElement('main');
home.setAttribute('id', 'about');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const header = document.createElement('header');

const h2 = document.createElement('h2');
h2.innerText = 'About Us';

const subheader = document.createElement('span');
subheader.setAttribute('class', 'subheader');
subheader.innerText = 'What\'s our story?';

const left = document.createElement('div');
left.setAttribute('class', 'left');

const photo1 = document.createElement('div');
photo1.setAttribute('class', 'photo1');

const photo2 = document.createElement('div');
photo2.setAttribute('class', 'photo2');

const right = document.createElement('div');
right.setAttribute('class', 'right');
right.innerHTML =
    `<h3>It Started, Quite Simply, Like This...</h3>
    <p class="strong">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p>Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.</p>
    <div class="buttons">
        <button class="btn-light">Learn More</button>
        <button class="btn-dark">See the Menu!</button>
    </div>`

home.append(container);
container.append(header);
header.append(h2);
header.append(subheader);
container.append(left);
left.append(photo1);
left.append(photo2);
container.append(right);

export { home };