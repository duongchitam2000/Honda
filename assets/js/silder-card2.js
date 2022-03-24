window.addEventListener("load", function(){
    const silderMain2 = document.querySelector('.silder-main2');
    const cardSilder2 = document.querySelectorAll('.card-silder2');
    const widthCardSlider2 = cardSilder2[0].offsetWidth;
    const lenghtCardSlider2 = cardSilder2.length;
    console.log(cardSilder2);
    // let sumCard = (widthCardSlider*lenghtCardSlider2)/2;
    // console.log(sumCard)
    let tranX2 = 0; 
    const backSilder2 = document.querySelector('.back-silder-card2');
    const nextSilder2 = document.querySelector('.next-silder-card2');
    console.log(nextSilder2);
    let index = 0;
    changenextSilder2 = nextSilder2.onclick = function(){
        
        if(index >= lenghtCardSlider2-5) {
            
            index = 0;
            silderMain2.style = `transform: translateX(0px)`;
            tranX2 = 0;
            return;
        }
        // }if else(index < 1){return;}
        console.log(index)
        tranX2 = tranX2 - widthCardSlider2;
        silderMain2.style = `transform: translateX(${tranX2}px)`;
        // console.log(index);
        index++;
        console.log(index)
    }
    let mob_view = window.matchMedia("(max-width: 739px)");
    	if (mob_view.matches)
    	 {
            changenextSilder2 = nextSilder2.onclick = function(){
        
                if(index >= lenghtCardSlider2-2) {
                    
                    index = 0;
                    silderMain2.style = `transform: translateX(0px)`;
                    tranX2 = 0;
                    return;
                }
                // }if else(index < 1){return;}
                tranX2 = tranX2 - widthCardSlider2;
                silderMain2.style = `transform: translateX(${tranX2}px)`;
                // console.log(index);
                index++;
            }
    	 }
    changebackSilder2 = backSilder2.onclick = function(){
    
        if(index <1) {
            index = 0;
            return;
        }
        tranX2 = tranX2 + widthCardSlider2;
        silderMain2.style = `transform: translateX(${tranX2}px)`;
        // console.log(index);
        index--;
    }
    
                
        // setInterval(function(){
        // setInterval(changenextSilder2,5000);
        // }, 1000);
    
    
    // 
    
    });
