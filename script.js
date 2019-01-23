const listData = document.getElementById("list-data");
const buttonOne = document.getElementById("first");
const buttonTwo = document.getElementById("second");
const buttonThree = document.getElementById("third");
const buttonFour = document.getElementById("forth");

const popularTag = ["final kamehameha", "odama rasengan", "mangekyo sharingan", "galick gun", "minato namikaze  "];
const buttonNum = [0,1,2,3];
let randomPopular = [];
let randomBtn = [];


var codes = randomOne();
randomButton(codes[0], codes[1], codes[2], codes[3]);
getTerm(randomTag());


function randomOne() {

    let i = buttonNum.length;
    let index;

    while(i--){
        index = Math.floor(Math.random()*(i+1));
        randomBtn.push(buttonNum[index]);
        buttonNum.splice(index,1);
    }


    return [randomBtn[0], randomBtn[1], randomBtn[2], randomBtn[3]]
}

function randomButton(randomNum, randomNum2, randomNum3, randomNum4){

    let i = popularTag.length;
    let index = 0;

    while(i--){
        index = Math.floor(Math.random()*(i+1));
        randomPopular.push(popularTag[index]);
        popularTag.splice(index,1);
    }
    

    buttonOne.innerHTML = randomPopular[randomNum];
    buttonTwo.innerHTML = randomPopular[randomNum2];
    buttonThree.innerHTML = randomPopular[randomNum3]; 
    buttonFour.innerHTML = randomPopular[randomNum4];
}


function randomTag() {
    let i = popularTag.length;
    let index = 0;

    while(i--){
        index = Math.floor(Math.random()*(i+1));
        randomPopular.push(popularTag[index]);
        popularTag.splice(index,1);
    }

    
    return randomPopular[0];
};


function getTerm(tagName) {
    fetch("https://api.tumblr.com/v2/tagged?tag=" + tagName + "&api_key=3ZZjiejGpvmRmlsEwphrVIlXJgVifeCgHcByh1Qk6EbdQWRjHZ")
    .then(function(response){
        return response.json();
    })
    .then(function(result){

        listData.innerHTML = "";
        
        const items = result.response;

        for(let i = 0; i < items.length; i++){
            const item = items[i];

            if(item.photos != undefined){

                const altSize = item.photos[0].alt_sizes; 
                const ImgSrc = altSize[altSize.length - 3].url; 
     
                const img = document.createElement("img");
                img.src = ImgSrc;
                
                const li = document.createElement("li");
                li.appendChild(img);
     
                listData.appendChild(li);
            }
           
        }
        
    })

}



buttonOne.onclick = function(){


    if(buttonOne.innerHTML==randomPopular[0]){
        alert("You Got It Bro");        
    }
    else{
        alert("Nahh! Wrong Answer Bro !");
    }
    location.reload();
} 

buttonTwo.onclick = function(){

    if(buttonTwo.innerHTML==randomPopular[0]){
        alert("You Got It Bro!");      
    }
    else{
        alert("Nahh! Wrong Answer Bro !");
    }
    location.reload();
} 

buttonThree.onclick = function(){

    if(buttonThree.innerHTML==randomPopular[0]){
        alert("You Got It Bro!");      
    }
    else{
        alert("Nahh! Wrong Answer Bro !");
    }
    location.reload();
} 

buttonFour.onclick = function(){

    if(buttonFour.innerHTML==randomPopular[0]){
        alert("You Got It Bro");   
    }
    else{
        alert("Nahh! Wrong Answer Bro !");
    }
    location.reload();
} 

// ANIMATION
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 120 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

