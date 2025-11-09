import './styles.css';

const emailErrorsDisplay = document.querySelector('.emailErrorContainer');
const emailInput = document.querySelector('#email');

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('Form is being checked!');
	const email = form.email.value.trim();
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		emailInput.setCustomValidity(' ');
		const p = document.createElement('p');
		p.textContent = 'Adresse email invalide!';
		emailErrorsDisplay.append(p);
		return;
	}
	console.log('Formulaire validé');
});
