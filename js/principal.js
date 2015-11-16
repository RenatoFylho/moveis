var banners =
	["Os melhores do Brasil!", "Qualidade e preço baixo!"];
var bannerAtual = 0;
var banners = ["Do lixo ao luxo!","Reaproveitar é aproveitar!"];
function trocaBanner() {
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector(’h2#mensagem’).textContent =
	banners[bannerAtual];
}
setInterval(trocaBanner, 1000);
setInterval(trocaBanner, 2000);
