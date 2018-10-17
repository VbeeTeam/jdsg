function ajaxs(){
	$("#btn1").onclick = function(){
//				let str = "userName="+$("#userName").value+"&userPass="+$("#userPass").value;
//				
//				ajaxByPromise({
//					"method":"post",
//					"url":"regSave.php",
//					"param":str
//				}).then(function(){
//					//5、接收响应
//					let str = xhr.responseText;
//					if(str=="1"){
//						alert("注册成功！");						
//					}else if(str=="-1"){
//						$("#tite").style.display = "block";
//						$("#tite").innerHTML="注册失败，用户名已经存在";
//					}else{
//						$("#tite").style.display = "block";
//						$("#tite").innerHTML="注册失败，服务器出错！";
//					}			
//				});
//				
				
				//1、创建对象
				let xhr = new XMLHttpRequest();
				
				//2、设置请求参数
				xhr.open("post","regSave.php",true);
				
				//3、设置回调函数
				xhr.onreadystatechange = function(){
					if(xhr.readyState==4 && xhr.status==200){
						//5、接收响应
						let str = xhr.responseText;
						if(str=="1"){
							alert("注册成功！");
							location.href="index.html";
						}else if(str=="-1"){
							$("#tite").style.display = "block";
							$("#tite").innerHTML="注册失败，用户名已经存在";
						}else{
							$("#tite").style.display = "block";
							$("#tite").innerHTML="注册失败，服务器出错！";
						}
					}
				}
				
				xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				
				//4、发送请求
				let str2 = "userName="+$("#userName").value+"&userPass="+$("#userPass").value;
				xhr.send(str2);
			}
}
	