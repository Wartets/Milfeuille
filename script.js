$(document).ready(function() {
	$('#milfeuilleBtn').click(function() {
		for (let i = 0; i < 3; i++) {
			createPopup("Félicitations ! Un milfeuille t'attend !");
		}
	});

	setInterval(() => {
		const messages = [
			"ALERTE : Taux de sucre détecté !",
			"CLIQUEZ POUR SAUVER CE MILFEUILLE !",
			"Félicitations ! Vous avez gagné un millefeuille !",
			"Votre gourmandise est détectée...",
			"URGENT : Millefeuille en détresse !"
		];
		const message = messages[Math.floor(Math.random() * messages.length)];
		createPopup(message);
	}, 10000);

	function createPopup(text) {
		const popup = $('<div class="popup"></div>').text(text);
		$('body').append(popup);
		popup.css({
			position: 'fixed',
			top: Math.random() * window.innerHeight + 'px',
			left: Math.random() * window.innerWidth + 'px',
			background: '#FF00FF',
			color: '#FFFF00',
			padding: '10px',
			border: '2px solid black',
			zIndex: 9999
		});
		setTimeout(() => popup.fadeOut(2000, () => popup.remove()), 8000);
	}
});

let score = 0;

function createPopupJeu() {
	const popup = $('<div class="popup-jeu">MILFEUILLE</div>');
	$('body').append(popup);
	popup.css({
		position: 'fixed',
		top: Math.random() * window.innerHeight + 'px',
		left: Math.random() * window.innerWidth + 'px',
		background: '#FFFF00',
		color: '#FF00FF',
		padding: '8px',
		border: '2px dotted black',
		zIndex: 9999,
		cursor: 'pointer'
	});
	popup.click(() => {
		score++;
		$('#score').text(score);
		popup.remove();
	});
	setTimeout(() => popup.remove(), 3000);
}

if (window.location.pathname.includes("jeu.html")) {
	setInterval(createPopupJeu, 800);
}

$("#contact").submit(function(e) {
	e.preventDefault();
	window.location.href = "https://youtu.be/L_LUpnjgPso";
});

const patisseries = ['croissant.png', 'macaron.png', 'milfeuille.png'];

function createFallingPatisserie() {
	const img = document.createElement("img");
	img.src = patisseries[Math.floor(Math.random() * patisseries.length)];
	img.className = "falling";
	img.style.left = Math.random() * window.innerWidth + "px";
	document.body.appendChild(img);
	setTimeout(() => img.remove(), 7000);
}

setInterval(createFallingPatisserie, 600);

$("#accept").click(() => {
	$("#consent-popup").fadeOut();
	alert("Bienvenue dans le four de l’amour.");
});

$("#geolocate").click(() => {
	alert("Erreur 503 : Le millefeuille s’est enfui par peur de l’engagement.");
});