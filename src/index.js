import './Style/Style.scss';
import { header } from './Components/Header';
import { home } from './Components/Home';
import { footer } from './Components/Footer';

const AppConstructor = (() => {
	const App = document.getElementById('App');

	App.append(header);
	App.append(home);
	App.append(footer);

	const menuItems = Array.from(document.getElementsByClassName('nav-item'));
	let activeNav = menuItems[0];
	activeNav.classList.add('active');

	menuItems.forEach(item => {
		item.addEventListener('click', () => {
			const itemID = parseInt(item.id);
			activeNav = menuItems[itemID];
			menuItems.forEach(i => {
				menuItems[menuItems.indexOf(i)].classList.remove('active');
			})
			activeNav.classList.add('active');
			pageSwitch();
		})
	})

	console.log(activeNav);

	const pageSwitch = () => {
		App.innerHTML = '';
		if (activeNav.id == 0) {
			App.append(header);
			App.append(home);
			App.append(footer);
		} else if (activeNav.id == 1) {
			App.append(header);
			App.append(footer);
		} else if (activeNav.id == 2) {
			App.append(header);
			App.append(footer);
		}
	}
	
})();

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = () => {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById('main-nav').style.background = '#222222';
		document.getElementById('P').style.fill = '#F63E37'
	} else {
		document.getElementById('main-nav').style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.70) 20%, rgba(0,0,0,0.25) 50%, rgba(0, 0, 0, 0) 100%)';
		document.getElementById('P').style.fill = '#FFFFFF'
	}
};