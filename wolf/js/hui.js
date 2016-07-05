		var boss=document.getElementById("boss");
		var da=document.getElementById("da");
		var Start=document.getElementById("Start");
		var time;
		var timel;
		var tiaoli=document.getElementById("tiaoli");
		var tiao=document.getElementById("tiao");
		var text1 = document.createTextNode("Game Over");
		var dat =document.getElementById("dat");
			//时间滚动条
		Start.onclick=function(){
			Start.style.display="none";

			function ty(){//时间条
				tiao.scrollLeft++
				if (tiao.scrollLeft==180) {
					//da.style.display="none";
					console.log(tiao.scrollLeft);
					clearInterval(ty);
					//boss.removeChild(da);
					Start.style.display = 'block';
					Start.innerText = "Game Over";
				}
				
			}
				setInterval(ty,2);
				setInterval(suiji,2090);
				dalang();



				//位置随机
			function suiji(){
				var num = Math.floor(Math.random()*9);
				switch(num){
					case 0:{
						da.style.top=160+"px";
						da.style.left=20+"px";
						break;
					}
					case 1:{
						da.style.top=120+"px";
						da.style.left=95+"px";
						break;
					}
					case 2:{
						da.style.top=140+"px";
						da.style.left=186+"px";
						break;
					}
					case 3:{
						da.style.top=220+"px";
						da.style.left=15+"px";
						break;
					}
					case 4:{
						da.style.top=190+"px";
						da.style.left=105+"px";
						break;
					}
					case 5:{
						da.style.top=210+"px";
						da.style.left=200+"px";
						break;
					}
					case 6:{
						da.style.top=295+"px";
						da.style.left=30+"px";
						break;
					}
					case 7:{
						da.style.top=275+"px";
						da.style.left=120+"px";
						break;
					}
					case 8:{
						da.style.top=295+"px";
						da.style.left=217+"px";
						break;
					}

				}
			}

		}
			//大狼运动
			function dalang(){

				function dal(){	

				da.style.display="block";
				da.scrollLeft+=108;
				if (da.scrollLeft%540==0) {
					clearInterval(time);
					timel=setInterval(down,200);
				}
				da.onclick=function (){
					da.scrollLeft=648;
				 	time3 = setInterval(test,200)
				}
			}

				function test() {
					clearInterval(time);
					clearInterval(timel);
					da.scrollLeft+=108;
					if (da.scrollLeft >= 972) {
						clearInterval(time3);
						clearInterval(timel);
						da.scrollLeft = 0;
						da.style.display = "none";						
						time = setInterval(dal,200);
					}
				}

				function down(){
					if(da.scrollLeft>=0){
						da.scrollLeft-=108;
						if (da.scrollLeft==0) {
							time = setInterval(dal,200);
							clearInterval(timel);
							da.style.display="none";
						}
					} 
				}

				time = setInterval(dal,200);
			}
			

