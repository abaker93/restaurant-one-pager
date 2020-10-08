import './Style/Style.scss';

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