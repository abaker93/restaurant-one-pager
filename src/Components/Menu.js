const menu = document.createElement('section');
menu.setAttribute('id', 'menu');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const header = document.createElement('header');

const h2 = document.createElement('h2');
h2.innerText = 'Our Menu';

const subheader = document.createElement('span');
subheader.setAttribute('class', 'subheader');
subheader.innerText = 'Feeling Peckish?';

const byTheSlice = [
	{
		img: 'footer.jpg',
		name: 'Basic Pizza',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
		price: 7.25
	},
	{
		img: 'footer.jpg',
		name: 'Basic Pizza',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
		price: 7.50
	},
	{
		img: 'footer.jpg',
		name: 'Basic Pizza',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
		price: 4.50
	},
	{
		img: 'footer.jpg',
		name: 'Basic Pizza',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
		price: 7.50
	}
];

const wholePizza = [
	{
		img: 'footer.jpg',
		name: 'Fancy Pizza',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
		price: 17.25
	},
	{
		img: 'footer.jpg',
		name: 'Fancy Pizza',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
		price: 17.25
	},
	{
		img: 'footer.jpg',
		name: 'Fancy Pizza',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
		price: 17.25
	},
	{
		img: 'footer.jpg',
		name: 'Fancy Pizza',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
		price: 17.25
	}
];

const byTheSliceList = document.createElement('div');
const wholePizzaList = document.createElement('div');

const sliceH3 = document.createElement('h3');
sliceH3.innerText = 'By the slice';

const sliceP = document.createElement('p');
sliceP.innerText = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.';

const pizzaH3 = document.createElement('h3');
pizzaH3.innerText = 'Whole pizza';

const pizzaP = document.createElement('p');
pizzaP.innerText = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.';

const sliceUL = document.createElement('ul');
const pizzaUL = document.createElement('ul');

byTheSlice.forEach(slice => {
	const li = document.createElement('li');
	li.innerHTML =
		`<img src="../src/img/${slice.img}" />
		<h4>${slice.name}</h4>
		<span>${slice.price}</span>
		<p>${slice.description}</p>`;
	sliceUL.append(li);
})

wholePizza.forEach(pizza => {
	const li = document.createElement('li');
	li.innerHTML =
		`<img src="../src/img/${pizza.img}" />
		<h4>${pizza.name}</h4>
		<span>${pizza.price}</span>
		<p>${pizza.description}</p>`;
	pizzaUL.append(li);
})

menu.append(container);
container.append(header);
header.append(h2, subheader);
container.append(byTheSliceList, wholePizzaList);
byTheSliceList.append(sliceH3);
byTheSliceList.append(sliceP);
byTheSliceList.append(sliceUL);
wholePizzaList.append(pizzaH3);
wholePizzaList.append(pizzaP);
wholePizzaList.append(pizzaUL);

export { menu };