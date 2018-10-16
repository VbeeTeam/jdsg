
function go(){
	let zuo = $(".left");
	let you = $(".right");
	let tu = $(".tutu");
	
//	let left1 = 20;
//	let myTimer = null;
	let direction = -1;
//	for(let j=0;j<tu.length;j++){
		for(let i=0;i<zuo.length;i++){
		zuo[i].onclick = function(){
			let left1 = this.parentNode.children[1].offsetLeft;
//			if(myTimer!=null){
//				return;
//			}
			setTimeout(function(){
				//数据
				left1 = left1+(-direction)*560;
				//边界
				if(direction==-1){
					if(left1>21){
						left1=-539;
//						window.clearInterval(myTimer);
//						myTimer = null;
					}				
				}
				tu[i].style.left = left1+"px";
			},100);
		}
	}
	for(let j=0;j<you.length;j++){
		you[j].onclick = function(){
//			if(myTimer!=null){
//				return;
//			}
			let left1 = this.parentNode.children[1].offsetLeft;
			setTimeout(function(){
				//数据
				left1 = left1-560;
				//边界				
					if(left1<-539){
						left1=21;
//						window.clearInterval(myTimer);
//						myTimer=null;
					}
																		
				tu[j].style.left = left1+"px";				
			},100);
		}
	}
//	}
	
	
}
