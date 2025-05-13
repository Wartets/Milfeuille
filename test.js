document.addEventListener("DOMContentLoaded", function () {
	const resultBox = document.getElementById("result");

	document.getElementById("dessert-form").addEventListener("submit", function (e) {
		e.preventDefault();

		const outcomes = [
			"Tu es fait pour un millefeuille narcissique qui ne partage pas sa crème.",
			"Tu es l’âme sœur d’un éclair au café malicieux et bipolaire.",
			"Tu mérites un opéra dramatique, mais il t’a ghosté pour une religieuse.",
			"Ton destin est lié à une tarte tatin instable mais généreuse.",
			"Ton seul vrai match est une boîte de madeleines vides.",
			"Tu as été jugé incompatible avec toutes les pâtisseries connues. Consulte un confiseur."
		];

		const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
		resultBox.innerHTML = `<p class="animated-text">${outcome}</p>`;
	});
});
