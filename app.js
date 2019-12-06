


  




let x = 1
    card.onclick = function() {

        if(x % 2 == 0){
            document.getElementById("card").src="http://assets.fightland.com/content-images/contentimage/52727/tanaka-embu-3.jpg"
        }
        
        if (x % 2 == 1){
            document.getElementById("card").src="https://www.maa.org/sites/default/files/images/columns/colm/card40.gif"
        }
        x++;
    } 

    let y = 1
    card1.onclick = function() {

        if(y % 2 == 0){
            document.getElementById("card1").src="https://i.pinimg.com/originals/85/1e/bd/851ebd52c5bafae169c4b983a42a0624.png"
        }
        
        if (y % 2 == 1){
            document.getElementById("card1").src="https://www.maa.org/sites/default/files/images/columns/colm/card40.gif"
        }
        y++;
    } 

