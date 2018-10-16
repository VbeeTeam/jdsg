function topA(){
	var a = $("#top_a");
	var span1 = a.children[0];
	var span2 = a.children[1];
	a.onmouseover = function(){
		span1.style.display = "none";
		span2.style.display = "block";		
	}
	a.onmouseout = function(){
		span1.style.display = "block";
		span2.style.display = "none";		
	}
}

function ulsBlock(){
	$(".duo")[0].onmouseover = function(){
		$("#ulId").style.display = "block";
	}
	$(".duo")[0].onmouseout = function(){
		$("#ulId").style.display = "none";
	}
}
function dengluDown(){
	let da = $("#denglus_da");
	let a1 = da.children[0];
	let a2 = da.children[1];
	let denglu1 = $(".denglus_tu")[0];
	let denglu2 = $(".denglus_two")[0];
	a1.onclick = function(){
		denglu1.style.display = "block";
		denglu2.style.display = "none";
		a1.style.color = "#e4393c";
		a2.style.color = "#666666";
	}
	a2.onclick = function(){
		denglu1.style.display = "none";
		denglu2.style.display = "block";
		a1.style.color = "#666666";
		a2.style.color = "#e4393c";
	}
}
