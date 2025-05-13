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
let crise = false;

// Ajoute un millefeuille cliquable aléatoire
function createPopupJeu() {
	const popup = $('<div class="popup-jeu">🍰</div>');
	$('#jeu-zone').append(popup);
	popup.css({
		position: 'absolute',
		top: Math.random() * ($('#jeu-zone').height() - 40) + 'px',
		left: Math.random() * ($('#jeu-zone').width() - 40) + 'px',
		fontSize: '2em',
		cursor: 'pointer'
	});
	popup.click(() => {
		score++;
		$('#score').text(score);
		popup.remove();
		if (score % 10 === 0) triggerEvent();
	});
	setTimeout(() => popup.fadeOut(1000, () => popup.remove()), 3000);
}

// Événements absurdes aléatoires
function triggerEvent() {
	const events = [
		() => alert("🌩 Météorites de crème fouettée !"),
		() => {
			$('body').addClass('flashy');
			setTimeout(() => $('body').removeClass('flashy'), 2000);
		},
		() => {
			for (let i = 0; i < 10; i++) createPopupJeu();
		},
		() => $('body').css('transform', `rotate(${Math.random() * 360}deg)`)
	];
	const randomEvent = events[Math.floor(Math.random() * events.length)];
	randomEvent();
}

function createFallingPatisserie() {
	const img = document.createElement("img");
	img.src = patisseries[Math.floor(Math.random() * patisseries.length)];
	img.className = "falling";
	img.style.left = Math.random() * window.innerWidth + "px";
	document.body.appendChild(img);
	setTimeout(() => img.remove(), 7000);
}

setInterval(createFallingPatisserie, 500);

// Millefeuilles qui apparaissent toutes les 800ms
setInterval(() => {
	if (!crise) createPopupJeu();
}, 800);

// Mode Crise de Sucre
$('#panicMode').click(() => {
	crise = true;
	$('body').addClass('flashy');
	let explosion = setInterval(() => {
		const popup = $('<div class="popup-jeu">💥</div>');
		$('#jeu-zone').append(popup);
		popup.css({
			position: 'absolute',
			top: Math.random() * ($('#jeu-zone').height() - 30) + 'px',
			left: Math.random() * ($('#jeu-zone').width() - 30) + 'px',
			fontSize: '3em',
			opacity: 0.8
		});
		setTimeout(() => popup.remove(), 1000);
	}, 200);
	setTimeout(() => {
		clearInterval(explosion);
		$('body').removeClass('flashy');
		crise = false;
	}, 5000);
});


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

$(document).ready(function () {
	// Bouton principal
	$('#milfeuilleBtn').click(function () {
		for (let i = 0; i < 5; i++) {
			createPopup(randomBeaufMessage());
		}
	});

	// Popup régulière
	setInterval(() => {
		createPopup(randomBeaufMessage());
	}, 5000); // toutes les 5 sec

	// Liste de blagues / messages débiles
	function randomBeaufMessage() {
		const messages = [
			"🔥 Ce millefeuille est plus chaud que ton four !",
			"🥐 Tu veux du feuilleté ? T’en auras jusqu’à l’indigestion !",
			"💘 L’amour c’est comme la crème : faut pas lésiner sur la couche.",
			"⚠️ ALERTE : trop de sucre dans ton regard.",
			"💋 Un millefeuille t’attend... en peignoir de chocolat.",
			"👑 Rejoins le royaume des feuilletés sexy.",
			"💔 Il t’a quitté ? Nous on te nappe de tendresse.",
			"🍰 Clique ici pour fondre… et pas que du cœur.",
			"👀 Tes pupilles brillent plus que le glaçage de Suzette.",
			"🎉 Félicitations, tu viens de gagner une nuit avec Jean-Croûte !",
			"📍Localisation : dans ton cœur (et dans ton estomac).",
			"🤤 98% des gens likent les millefeuilles… et toi ?",
			"🎶 T’as le look millefeuille, baby.",
			"🥵 Encore un popup ? Oui. Parce que t’en redemandes."
		];
		return messages[Math.floor(Math.random() * messages.length)];
	}

	// Générateur de popup
	function createPopup(text) {
		const popup = $('<div class="popup popup-surprise"></div>').text(text);
		$('body').append(popup);
		popup.css({
			position: 'fixed',
			top: Math.random() * (window.innerHeight - 150) + 'px',
			left: Math.random() * (window.innerWidth - 300) + 'px',
			background: 'linear-gradient(45deg, #FF00FF, #FFFF00)',
			color: '#000',
			padding: '30px',
			border: '5px double #ff69b4',
			fontFamily: "'Comic Sans MS', cursive",
			fontSize: '1.5em',
			textAlign: 'center',
			zIndex: 9999,
			transform: `rotate(${Math.random() * 10 - 5}deg)`,
			boxShadow: '0 0 25px magenta',
			animation: 'popFlash 0.5s ease-out',
		});
		setTimeout(() => popup.fadeOut(3000, () => popup.remove()), 9000);
	}

	// Animation personnalisée (à placer aussi en CSS)
	const style = document.createElement("style");
	style.innerHTML = `
	@keyframes popFlash {
		from { transform: scale(0.5) rotate(0deg); opacity: 0; }
		to { transform: scale(1) rotate(5deg); opacity: 1; }
	}
	`;
	document.head.appendChild(style);
});

$('.faq-item').click(function () {
	alert("Ceci n'est pas une vraie réponse. Mais votre vie non plus.");
});

// Fonction pour vérifier si l'utilisateur a accepté les cookies
function checkCookieConsent() {
    const consent = getCookie("cookieConsent");
    if (consent === "true") {
        document.getElementById("consent-popup").style.display = "none";
    }
}

// Fonction pour définir un cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Fonction pour récupérer un cookie
function getCookie(name) {
    let nameEq = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEq) === 0) {
            return c.substring(nameEq.length, c.length);
        }
    }
    return "";
}

// Fonction exécutée lorsque l'utilisateur accepte les cookies
function acceptCookies() {
    setCookie("cookieConsent", "true", 365);  // Définit un cookie valable 365 jours
    document.getElementById("consent-popup").style.display = "none";
}

// Appel de la fonction au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    checkCookieConsent();  // Vérifie si l'utilisateur a déjà accepté les cookies
});

// Ajout de l'événement pour le bouton d'acceptation des cookies
document.getElementById("accept").addEventListener("click", acceptCookies);
