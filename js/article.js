"use strict"

function newArticle(minArticle){
	let newArticle = '<div class="articleMax"><button class="fermerArticle"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>';
	newArticle += $(minArticle).html();
	newArticle += '</div>';
	$(".col70").html(newArticle);
	if (window.matchMedia("(max-width: 768px)").matches)
		$(".articleMini").addClass("hidden");
}

function closeArticle() {
	$(".col70").on("click", "button", () => {
		$(".articleMax").remove();
		$(".articleMini").removeClass("hidden");
	});
}

$(function(){
	let isPrinted = false;
		$(".articleMini").bind("click", (e) => {
			let minArticle = e.currentTarget;
			if(isPrinted){
				$(".articleMax").remove();
				isPrinted = false;
			}
			newArticle(minArticle);
			closeArticle();
			isPrinted = true;
		});
});