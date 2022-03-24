// menu reponsive js
const bar = document.querySelector('.bar')
const menuReponnsive = document.querySelector('.menu-main-list-reponsive')
let countMenu = 0;
bar.onclick = function(){
	if(countMenu == 0)
	{
		menuReponnsive.style = "height: 100%";
		countMenu = 1;
	}
	else{
		menuReponnsive.style = "height: 0px";
		countMenu = 0;
	}
}
// acodion
 var accodrion = document.querySelectorAll('.menu-main-list-item-reponsive');
 // var accodrion = document.querySelectorAll('.dropdow-menu-reponsive');
 console.log(accodrion);
 for (i = 0; i < accodrion.length; i++){
	accodrion[i].onclick = function(event){
		event.preventDefault()
		this.classList.toggle('active');
	 }
 }
// category js
const tabsall = document.querySelectorAll('.control-cate-select-item')
const tabsContentall = document.querySelectorAll('.silder-card')
tabsall.forEach((tab, index) =>{
	tab.addEventListener("click", () =>{
		tabsContentall.forEach((tabContent)=>{
			tabContent.classList.remove('active')
		}) 
		tabsall.forEach((tab)=>{
			tab.classList.remove('active')	
		}) 
		console.log(index);

		tabsall[index].classList.add('active')
		tabsContentall[index].classList.add('active')	
		
	})
})