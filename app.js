
let score = 1;
let scoreinit = 0;

if (scoreinit == 1){
    scoretext.innerHTML = "<h3>Score: "+ score +"</h3>"
    scoreinit = scoreinit + 1
    score = score + 1
}
document.getElementById('InputText')
let x = 1
    card.onclick = function() {

        if(x % 2 == 0){
            document.getElementById("card").src="http://assets.fightland.com/content-images/contentimage/52727/tanaka-embu-3.jpg"
        }
        
        if (x % 2 == 1){
            document.getElementById("card").src="https://www.publicdomainpictures.net/pictures/130000/nahled/check-mark-icon.jpg"
            scoretext.innerHTML = "<h3>Score:" + score + "</h3>";
            console.log("work");
 
        }
        x++;
        score = score + 0.5;
    } 

    let y = 1
    card1.onclick = function() {

        if(y % 2 == 0){

            document.getElementById("card1").src="https://previews.123rf.com/images/gearstd/gearstd1610/gearstd161000079/64199579-businessman-acting-like-he-is-punching-someone-on-a-white-background-facing-challenges-tough-competi.jpg"
        }
        
        if (y % 2 == 1){
            document.getElementById("card1").src="https://www.pnglot.com/pngfile/detail/23-233895_image-red-cross-wrong-cross-png-transparent.png"
        }
        y++;
    } 

let z = 1
    card2.onclick = function (){
    if (z % 2 == 0){
        document.getElementById("card2").src="http://s2.glbimg.com/9-6YFVHi1_eAI1MoSFaQxL2nuLY=/s.glbimg.com/jo/g1/f/original/2015/10/18/capoeira_museu_1.jpg"
    }
    if (z % 2 == 1){
        document.getElementById("card2").src="https://www.publicdomainpictures.net/pictures/130000/nahled/check-mark-icon.jpg"
        scoretext.innerHTML = "<h3>Score:" + score + "<h3>";
        console.log("work");
    }
    z++;
    score = score + 0.5;
}
let c = 1
    card3.onclick = function (){
    if (c % 2 == 0){
        document.getElementById("card3").src="https://i.ytimg.com/vi/Avr54VCNMXY/maxresdefault.jpg"
    }
    if (c % 2 == 1){
        document.getElementById("card3").src="https://www.pnglot.com/pngfile/detail/23-233895_image-red-cross-wrong-cross-png-transparent.png"
    }
    c++
}

let v = 1
card4.onclick = function (){
    if (v % 2 == 0){
        document.getElementById("card4").src="http://breal.tv/wp-content/uploads/2017/02/mma.jpg"
    }
    if (v % 2 == 1){
        document.getElementById("card4").src="https://www.publicdomainpictures.net/pictures/130000/nahled/check-mark-icon.jpg   "
        scoretext.innerHTML = "<h3>Score:" + score + "<h3>";
        console.log("work");
    }
    v++
    score = score + 0.5;
} 
let b = 1
card5.onclick = function (){
    if (b % 2 == 0){
        document.getElementById("card5").src="https://previews.123rf.com/images/gearstd/gearstd1610/gearstd161000079/64199579-businessman-acting-like-he-is-punching-someone-on-a-white-background-facing-challenges-tough-competi.jpg"
    }
    if (b % 2 == 1){
        document.getElementById("card5").src="https://www.pnglot.com/pngfile/detail/23-233895_image-red-cross-wrong-cross-png-transparent.png   "
        scoretext.innerHTML = "<h3>Score:" + score + "<h3>";
        console.log("work");
    }
    b++

} 
let h = 1
card6.onclick = function (){
    if (h % 2 == 0){
        document.getElementById("card6").src="https://i.ytimg.com/vi/e5-EpEAQLQE/maxresdefault.jpg"
    }
    if (h % 2 == 1){
        document.getElementById("card6").src="https://www.pnglot.com/pngfile/detail/23-233895_image-red-cross-wrong-cross-png-transparent.png  "
        
        console.log("work");
    }
    h++

} 

let f = 1
card7.onclick = function (){
    if (f % 2 == 0){
        document.getElementById("card7").src="https://i.ytimg.com/vi/PyG-khWjsFw/maxresdefault.jpg"
    }
    if (f % 2 == 1){
        document.getElementById("card7").src="https://www.publicdomainpictures.net/pictures/130000/nahled/check-mark-icon.jpg   "
        scoretext.innerHTML = "<h3>Score:" + score + "<h3>";
        console.log("work");

    }
    f++
    score = score + 0.5;
} 
let k = 1
card8.onclick = function (){
    if (k % 2 == 0){
        document.getElementById("card8").src="https://muaythaiauthority.com/wp-content/uploads/2016/04/Teep-main-photo-e1459514031792.jpg   "
    }
    if (k % 2 == 1){
        document.getElementById("card8").src="https://www.publicdomainpictures.net/pictures/130000/nahled/check-mark-icon.jpg   "
        scoretext.innerHTML = "<h3>Score:" + score + "<h3>";
        console.log("work");

    }
    k++
    score = score + 0.5;
} 

let l = 1;
card9.onclick = function (){
    if (l % 2 == 0){
        document.getElementById("card9").src="http://s2.glbimg.com/9-6YFVHi1_eAI1MoSFaQxL2nuLY=/s.glbimg.com/jo/g1/f/original/2015/10/18/capoeira_museu_1.jpg"
    }
    if (l % 2 == 1){
        document.getElementById("card9").src="https://www.pnglot.com/pngfile/detail/23-233895_image-red-cross-wrong-cross-png-transparent.png "
        console.log("work");
    }
    l++
}

    let a = 0
    setInterval (() => {
        if (a % 12 == 0) {
            document.body.style.background = "red"
        }
        if (a % 12 == 1) {
            document.body.style.background = "orange"
        }
        if (a % 12 == 2) {
            document.body.style.background = "yellow"
        }
        if (a % 12 == 3) {
            document.body.style.background = "green"
        }
        if (a % 12 == 4) {
            document.body.style.background = "blue"
        }
        if (a % 12 == 5) {
            document.body.style.background = "indigo"
        }
        if (a % 12 == 6) {
            document.body.style.background = "violet"
        }
        if (a % 12 == 7) {
            document.body.style.background = "indigo"
        }
        if (a % 12 == 8) {
            document.body.style.background = "blue"
        }
        if (a % 12 == 9) {
            document.body.style.background = "green"
        }
        if (a % 12 == 10) {
            document.body.style.background = "yellow"
        }
        if (a % 12 == 11) {
            document.body.style.background = "orange"
        }
        if (a % 12 == 12) {
            document.body.style.background = "red"
        }
        a = a + 1
    }, 1000)
