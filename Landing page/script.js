// JavaScript code to add interactivity (optional)
// For example, you can add a smooth scroll to sections

document.querySelectorAll('.nav-links a').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});
