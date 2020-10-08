const footer = document.createElement('footer');
footer.setAttribute('id', 'footer');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const contact = document.createElement('div');
contact.setAttribute('id', 'footer-contact');
contact.innerHTML =
	`<h3>Contact Us</h3>
	<p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc.</p>
	<ul>
		<li>
			<svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg>
			<span>555-555-5555</span>
		</li>
		<li>
			<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
			<span>info@website.com</span>
		</li>
		<li>
			<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
			<span>123 Street Dr.<br />City, ST USA</span>
		</li>
	</ul>`;

const recipes = document.createElement('div');
recipes.setAttribute('id', 'footer-recipes');
recipes.innerHTML =
	`<h3>Latest Recipes</h3>
	<ul>
		<li>
			<img src="../src/img/footer.jpg" />
			<h4>Fancy Pizza 1</h4>
			<p>Lorem ipsum dolor sit amet</p>
		</li>
		<li>
			<img src="../src/img/footer.jpg" />
			<h4>Fancy Pizza 2</h4>
			<p>Lorem ipsum dolor sit amet</p>
		</li>
		<li>
			<img src="../src/img/footer.jpg" />
			<h4>Fancy Pizza 3</h4>
			<p>Lorem ipsum dolor sit amet</p>
		</li>
	</ul>`;

const hours = document.createElement('div');
hours.setAttribute('id', 'footer-hours');
hours.innerHTML =
	`<h3>Hours</h3>
	<ul>
		<li>
			<p class="strong">Monday</p>
			<p>5pm - 11pm</p>
		</li>
		<li>
			<p class="strong">Tuesday</p>
			<p>5pm - 11pm</p>
		</li>
		<li>
			<p class="strong">Wednesday</p>
			<p>Closed</p>
		</li>
		<li>
			<p class="strong">Thursday</p>
			<p>5pm - 11pm</p>
		</li>
		<li>
			<p class="strong">Friday</p>
			<p>5pm - Midnight</p>
		</li>
		<li>
			<p class="strong">Saturday</p>
			<p>4pm - Midnight</p>
		</li>
		<li>
			<p class="strong">Sunday</p>
			<p>5pm - 11pm</p>
		</li>
	</ul>`;

const subfooter = document.createElement('div');
subfooter.setAttribute('id', 'subfooter');
subfooter.innerHTML =
	`<p><a target="_blank" href="http://annabaker.design" />Anna Baker Design</a></p>`;


footer.append(container);
container.append(contact);
container.append(recipes);
container.append(hours);
footer.append(subfooter);

export { footer };