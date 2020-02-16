/* -------------------------------------------------------------------------- */
/*                                  All Cards                                 */
/* -------------------------------------------------------------------------- */
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
/********************
/*  Create Cards
***********************/
    cardCreator(cards[0])
    cardCreator(cards[2])
    cardCreator(cards[0])
    cardCreator(cards[1])
    cardCreator(cards[2])
    cardCreator(cards[1])
/* -------------- Front-side Cards And Limited Array(Only 2 ID) ------------- */
    var frontCards = document.getElementsByClassName("front-card");
    var twoIdsArr = [];
/* --------------------- Add Eventlistener To All Cards --------------------- */
    for(var i =0 ; i <frontCards.length ;i++){
        frontCards[i].addEventListener('click',function(event){
        this.parentElement.classList.add("fliping");
        var _firstImg = this.nextElementSibling.lastChild;
        twoIdsArr.push(_firstImg.getAttribute("class"))
        if(twoIdsArr.length === 2){
            if(Number(twoIdsArr[0]) === Number((twoIdsArr[1]))+1 || Number((twoIdsArr[0]))+1 === Number(twoIdsArr[1])){
                setTimeout(function(){
                    displayNone(document.getElementsByClassName(twoIdsArr[0])[0],document.getElementsByClassName(twoIdsArr[1])[0]);
                    twoIdsArr = []
                },1000)
            }else{
                setTimeout(function(){
                    fliping(document.getElementsByClassName(twoIdsArr[0])[0],document.getElementsByClassName(twoIdsArr[1])[0])
                    twoIdsArr = []
                },500)
            }
        }
    })
    }
/* -------------------------------------------------------------------------- */
/*                           fliping Cards Function                           */
/* -------------------------------------------------------------------------- */
function fliping(FirstEleInTheArr,SecondEleInTheArr){
    FirstEleInTheArr.parentElement.parentElement.classList.remove("fliping");
    SecondEleInTheArr.parentElement.parentElement.classList.remove("fliping")
}
/* -------------------------------------------------------------------------- */
/*                           Hide the Cards Function                          */
/* -------------------------------------------------------------------------- */
function displayNone(FirstCard,secondCard){
    FirstCard.parentElement.style.display ="none";
    secondCard.parentElement.style.display = "none";
}
/* -------------------------------------------------------------------------- */
/*                           Create The Dom Function                          */
/* -------------------------------------------------------------------------- */

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
