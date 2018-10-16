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