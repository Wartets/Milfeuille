document.addEventListener("DOMContentLoaded", function () {
	const resultBox = document.getElementById("result");

	document.getElementById("dessert-form").addEventListener("submit", function (e) {
		e.preventDefault();

const form = document.getElementById("dessert-form");
const selects = form.querySelectorAll("select");

const outcomes = {
  "sucre_sirop": "Ton âme sœur est une barbe à papa sarcastique.",
  "pate_sablee": "Tu vibres au même rythme qu’un cookie sous pression.",
  "vide_fourrage": "Un chou vide t’attend. Il est aussi paumé que toi.",
  "gifle_eclair": "Tu es en couple toxique avec un éclair au rhum.",
  "four_oublie": "Ton destin ? Une carbonisation sensuelle avec une tarte aux pêches.",
  "topping_vermicelles": "Tu partages ton instabilité émotionnelle avec un donut sous MDMA.",
  "ignore_religieuse": "Ton absence de foi pâtissière t’amène vers un clafoutis nihiliste."
};

let finalResults = [];

selects.forEach((select, i) => {
	const selected = select.options[select.selectedIndex].text.toLowerCase();
	if (selected.includes("sirop")) finalResults.push(outcomes["sucre_sirop"]);
	if (selected.includes("sablée")) finalResults.push(outcomes["pate_sablee"]);
	if (selected.includes("vide")) finalResults.push(outcomes["vide_fourrage"]);
	if (selected.includes("gifle")) finalResults.push(outcomes["gifle_eclair"]);
	if (selected.includes("oublié")) finalResults.push(outcomes["four_oublie"]);
	if (selected.includes("vermicelles")) finalResults.push(outcomes["topping_vermicelles"]);
	if (selected.includes("ignore")) finalResults.push(outcomes["ignore_religieuse"]);
});

const shuffled = finalResults.sort(() => 0.5 - Math.random());
resultBox.innerHTML = `<p class="animated-text">${shuffled[0] || "Tu es une pâte sans destin, mais pleine d'espoir."}</p>`;

	});
});
