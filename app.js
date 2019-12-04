


  




let x = 0
    card.onclick = function() {

        if(x % 2 == 0){
            document.getElementById("card").src="https://i.pinimg.com/originals/85/1e/bd/851ebd52c5bafae169c4b983a42a0624.png"
        }
        
        if (x % 2 == 1){
            document.getElementById("card").src="https://www.maa.org/sites/default/files/images/columns/colm/card40.gif"
        }
        x++;
    } 

