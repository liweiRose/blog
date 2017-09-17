window.onload=function(){

	                 function $(id){return document.getElementById(id);}
	                 var w_slider=$("w_slider");
	                 var slider_main=$("slider_main");
	                 var lis=slider_main.children;
	                 var ctrl=$("slider_ctrl");
	                 var spans=ctrl.children;
	                 var iNow=0;
	                 var timer=null;
	                 animate(lis[0],{opacity:100});
                     for(var i=0;i<spans.length;i++)
                     {
                     	spans[i].onclick=function(){
                     		if(this.className=="prev")
                     		{
                     			// 左侧点击 0----1
                     			animate(lis[iNow],{opacity:0});
                     			iNow=--iNow<0 ? lis.length-1 : iNow;
                     			animate(lis[iNow],{opacity:100});
                     		}
                     		else{
                     			// 点击右侧
                     			autoPlay();
                     		}
                     	}
                     }
                     clearInterval(timer);
                     timer=setInterval(autoPlay,2000);
                     w_slider.onmouseover=function(){
                     	ctrl.style.display="block";
                     	clearInterval(timer);
                     }
                      w_slider.onmouseout=function(){
                      	ctrl.style.display="none";
                     	timer=setInterval(autoPlay,2000);
                     }

                     function autoPlay(){
                     	        animate(lis[iNow],{opacity:0});
                     			iNow=++iNow > lis.length-1 ? 0 : iNow;
                     			animate(lis[iNow],{opacity:100});
                     }
                     
}