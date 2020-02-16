var cards = [{
    "id" : 1,
    "src" :"https://i.imgur.com/qX7y3ts.jpg",
    "count" :100
},
{
    "id":2,
    "src":"https://i.imgur.com/EJfNGXb.jpg",
    "count":200
},{
    "id":3,
    "src":"https://i.imgur.com/sj8zJDA.jpg",
    "count":300
}
]
var cardGame = document.getElementById("cardGame");
var normalGame = document.getElementById("normal");
/********************
/*  start the turn 
***********************/
    cardCreator(cards[0])
    cardCreator(cards[2])
    cardCreator(cards[0])
    cardCreator(cards[1])
    cardCreator(cards[2])
    cardCreator(cards[1])
    var imgs = document.getElementsByTagName("img");
    var frontCards = document.getElementsByClassName("front-card")
    var twoIdsArr = [];
    for(var i =0 ; i <imgs.length ;i++){

/* -------------------------------------------------------------------------- */
/*                                 first Click                                */
/* -------------------------------------------------------------------------- */
        frontCards[i].addEventListener('click',function(event){
        this.parentElement.classList.add("fliping");
        var _firstImg = this.nextElementSibling.lastChild;
        twoIdsArr.push(_firstImg.getAttribute("id"))
        if(twoIdsArr.length <= 1){
            for(var i = 0; i<imgs.length;i++){
/* -------------------------------------------------------------------------- */
/*                                Second Click                                */
/* -------------------------------------------------------------------------- */
                frontCards[i].addEventListener('click',function(){
                    this.parentElement.classList.add("fliping")
                    _secondImg = this.nextElementSibling.lastChild
                    if(_firstImg.getAttribute("id") === _secondImg.getAttribute("id")){ 
                        if(Number(_firstImg.getAttribute("class")) === Number(_secondImg.getAttribute("class")) + 1 || Number(_firstImg.getAttribute("class")) + 1 === Number(_secondImg.getAttribute("class"))){
                            setTimeout(function(){
                                displayNone(_firstImg,_secondImg)
                            },2000)
                    }
                }
            })
        }
    }else{
        
        if(twoIdsArr[0] != twoIdsArr[1]){
            
        var firstElementCounter = document.getElementById(twoIdsArr[0]).getAttribute("class")
        var secondElementCouter = document.getElementById(twoIdsArr[1]).getAttribute("class")
        setTimeout(function(){
            document.getElementsByClassName(firstElementCounter)[0].parentElement.parentElement.classList.remove("fliping");
            document.getElementsByClassName(secondElementCouter)[0].parentElement.parentElement.classList.remove("fliping");
            twoIdsArr=[]
        },1000)  
        }
    }
    })
}

















function displayNone(FirstCard,secondCard){
    FirstCard.parentElement.style.display ="none";
    secondCard.parentElement.style.display = "none";
}









function cardCreator(obj){
    var divCreatorParent= document.createElement("div");
    divCreatorParent.style.display ="inline-block";
    divCreatorParent.classList.add("parent")
    var divCreatorFrontCard = document.createElement("div");
    divCreatorFrontCard.classList.add("front-card");
    divCreatorParent.appendChild(divCreatorFrontCard);
    var divCreatorBackCard = document.createElement("div");
    divCreatorBackCard.classList.add("back-card");
    divCreatorParent.appendChild(divCreatorBackCard);
    cardGame.appendChild(divCreatorParent)
    var imgCreator = document.createElement("img")
    imgCreator.setAttribute("src",obj.src)
    imgCreator.setAttribute("id",obj.id)
    imgCreator.classList.add(obj.count++)
    imgCreator.style.display ="inline-block"
    divCreatorBackCard.appendChild(imgCreator)
}



// for (var i = 0; i < imgs.length; i++) {
//   imgs[i].addEventListener("click", function handler() {
//         var _self = this;
//         pushingArr.push(this.getAttribute("id"));
//         console.log(pushingArr);
//         if (pushingArr.length <= 1) {
//         console.log(pushingArr.length);
//         for (var i = 0; i < imgs.length; i++) {
//             imgs[i].addEventListener("click", function() {
//                 pushingArr.shift()
//             if (_self.getAttribute("src") === this.getAttribute("src")) {
//                 if (Number(_self.getAttribute("class")) == Number(this.getAttribute("class") + 1) || Number(_self.getAttribute("class") + 1) == Number(this.getAttribute("class"))){
//                 _self.style.display = "none";
//                 this.style.display = " none";
//                 }
//             }
//             });
//         }
//         }else{
//             pushingArr.shift();
//             console.log(pushingArr);
//         }
//     });
// }

// var allImg = document.getElementsByTagName("img");
// var arr = [].slice.call(allImg)
// arr.every(function(img) {
//     img.addEventListener("click",function handler(){
//         var _self = this;
//         console.log(arr)
//         arr.every(function(img) {
//             img.addEventListener("click",function (){
//                 if(_self.getAttribute("src") === this.getAttribute("src")){
//                     if( Number(_self.getAttribute("class")) == Number(this.getAttribute("class")+1) || Number(_self.getAttribute("class")+1) == Number(this.getAttribute("class")) ){
//                     _self.style.display = "none";
//                     this.style.display =" none"
//                 }
//             }else{
//                 _self.removeEventListener('click', handler)
//                 console.log("yo")
//             }
//         })
//     })
// })
// })
