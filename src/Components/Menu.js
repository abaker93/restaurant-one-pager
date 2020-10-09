const menu = document.createElement('main');
menu.setAttribute('id', 'menu');

const header = document.createElement('header');

const h2 = document.createElement('h2');
h2.innerText = 'Our Menu';

const subheader = document.createElement('span');
subheader.setAttribute('class', 'subheader');
subheader.innerText = 'Feeling Peckish?';

const byTheSlice = [
	{
		img: '../img/footer.jpg',
		name: 'Basic Pizza',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
		price: 7.25
	},
	{
		img: '../img/footer.jpg',
		name: 'Basic Pizza',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
		price: 7.50
	},
	{
		img: '../img/footer.jpg',
		name: 'Basic Pizza',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
		price: 4.50
	},
	{
		img: '../img/footer.jpg',
		name: 'Basic Pizza',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
		price: 7.50
	}
];

const wholePizza = [
	{
		img: '../img/footer.jpg',
		name: 'Fancy Pizza',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
		price: 17.25
	},
	{
		img: '../img/footer.jpg',
		name: 'Fancy Pizza',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
		price: 17.25
	},
	{
		img: '../img/footer.jpg',
		name: 'Fancy Pizza',
		description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
		price: 17.25
	},
	{
		img: '../img/footer.jpg',
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

byTheSlice.forEach(slice => {
	const li = document.createElement('li');
	li.innerHTML =
		`<img src="${slice.img}" />
		<h4>${slice.name}</h4>
		<span>${slice.price}</span>
		<p>${slice.description}</p>`;
	ul.append(li);
})

menu.append(header);
header.append(h2);
menu.append(byTheSliceList);
// byTheSliceList.append(sliceH3);
// byTheSliceList.append(sliceP);
// byTheSliceList.append(sliceUL);
// wholePizzaList.append(pizzaH3);
// wholePizzaList.append(pizzaP);

export { menu };