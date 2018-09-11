

/**
 * parabola( dom, {
		x : 400,
		y : 300
   })
 */

function parabola(ele, stop) {
	//y == a*x*x + b*x + c
	var a = -0.002;
	
	var centerPoint = {
		x : ele.offsetLeft,
		y : ele.offsetTop
	}
	
	var endPoint = {
		x : stop.x - centerPoint.x,
		y : -(stop.y - centerPoint.y)
	}
	
	//求出系数b
	var b = (endPoint.y - a*endPoint.x*endPoint.x)/endPoint.x;
	
	var offsetX = 0;
	window.requestAnimationFrame(function(){
		ele.style.left = centerPoint.x + offsetX + "px";
		ele.style.top = centerPoint.y - (a*offsetX*offsetX + b*offsetX) + "px";
		
		offsetX+=7;
		
		if(ele.offsetLeft >= stop.x) {
			ele.style.left = stop.x + "px";
			ele.style.top = stop.y + "px";
			return;
		}
		window.requestAnimationFrame(arguments.callee);
	})
}