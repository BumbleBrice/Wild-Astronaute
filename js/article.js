"use strict"

function newArticle(minArticle){
	let newArticle = '<div class="articleMax"><button class="cross">x</button>';
	newArticle += $(minArticle).html();
	newArticle += '</div>';
	$(".col70").html(newArticle);
}

function closeArticle() {
	$(".col70").on("click", "button", () => {
		$(".articleMax").remove();
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