/*$(document).ready(function(){

//When mouse rolls over
$("li").mouseover(function(){
	$(this).animate({
		height: "60px",         
        opacity: 0.4
	},1500);
});
$("li").mouseout(function(){
	$(this).animate({
		height: "40px",         
        opacity: 1
	},1500);
});
});
*/
$(document).ready(function(){
var slideInterval = 0;
var timeSpeedSl =10;
var  slider = {};

slider = document.getElementById("slider");

 
slider.init = function(timeSpeed,timeWait){
 
 var curImg, curImgLeft, nextImgLeft, flag, i;
 
//запоминаем скорость (время каждого тика)
this.timeSpeed = timeSpeed;

 
//запоминаем сами картинки
this.images = this.getElementsByTagName("img");
 
//смотрим высоту по размерам первой картинки
 this.width = this.images[0].width;
this.height = this.images[0].height;

//запоминаем количество картинок
this.length = this.images.length;

//задаем размер нашему слайдеру по высоте первой картинки
// this.style.width = this.images.length*this.width+"px";
this.style.height = this.height +"px";
 

 
//начальные координаты картинок
for(i = 0; i < this.images.length; i++){
 this.images[i].style.left = this.width * i + "px";
}
 
//метод для таймера
this.timer = function (){
 
 
 count = 0;
 
 //запускаем функцию анимации
 animation()
 
 $('.slider').mouseenter(function(){
 	slider.timeWait =2000;
 })
 $('.slider').mouseleave(function(){
	slider.timeWait = slideInterval;
 })
 //анимируем наши картинки как большую ленту
 //при это каждую картинку, у которой CSS-свойство
 //left стало меньше -ширины картинки, помещаем в правый край ленты
function animation(){
	//alert(slider.images.length);
	 count--;
	 flag = false; 
	 for(i = 0; i < slider.images.length; i++){
	   curImg =  slider.images[i];
	   curImgLeft = parseInt(slider.images[i].style.left);
	   nextImgLeft = curImgLeft - 1 ;
	   //Если зашли за границу, сразу перекидываем картинку
	   //на правый край ленты и обнуляем счетчик
	    if(nextImgLeft <= -slider.width){
		  count = 0;
		  curImg.style.left = (slider.images.length-1)*slider.width + "px";
		 // alert(curImg.style.left);
		  timeSpeed = slider.timeWait ;
		  flag = true;
	  }
	   else {
	   //Иначе продолжаем двигаться. 
	   curImg.style.left = nextImgLeft + "px";
	 
	   //Если перескока картинки вправо не было, то без задержки
	   if (!flag) timeSpeed = slider.timeSpeed;
	   }
	 }
	 
	 
	 if (count > -slider.width) setTimeout(arguments.callee,timeSpeed)
	}

}


setTimeout(this.timer, 0)
}
 
 slider.init(timeSpeedSl,slideInterval);

});

