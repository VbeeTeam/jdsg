function topScroll(){
	window.onscroll = function(){
		var nav = $("#navId");
		var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
		document.title = _scroll;
		if(_scroll >= 31){
			nav.style.position = "fixed";
			nav.style.top = 0;						
		} else {
			nav.style.position = "relative";
			nav.style.top = 0;			
		}
	}

	
}
	