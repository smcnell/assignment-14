
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  var stringNumber= answerPTagWithValue.textContent
  var intValInElement=parseInt(stringNumber)
  answerPTagWithValue.innerHTML= intValInElement*2
  // you do the rest

})


document.querySelector("#color-circle button").addEventListener('click',function(){
  var circleImg= document.querySelector("#circle-bw")
  console.log(circleImg)
  if (circleImg.style.backgroundColor==="rgb(255, 255, 255)"){
  circleImg.style.backgroundColor= "black"}
  else {circleImg.style.backgroundColor= "rgb(255, 255, 255)"}


})

document.querySelector("#blow-up button").addEventListener('click',function(){

  var redCircle=document.getElementById("circle-red")
  var redCircleStyles= window.getComputedStyle(redCircle)
  var originalWidth= redCircleStyles.width
  var widthNumVal= parseInt(originalWidth)
  var getBiggaWidth= widthNumVal * 2


  var redCircle=document.getElementById("circle-red")
  var redCircleStyles= window.getComputedStyle(redCircle)
  var originalHeight= redCircleStyles.height
  var heightNumVal= parseInt(originalHeight) +1
  var getBiggaHeight= heightNumVal * 2

if (getBiggaWidth < 320){
  redCircle.style.width= getBiggaWidth +"px"
  redCircle.style.height= getBiggaHeight +"px"
}
else {
  redCircle.style.width="40px"
  redCircle.style.height="40px"
}

})





document.querySelector("#remove button").addEventListener('click',function(){
  var noMoInactive= document.querySelectorAll(".exercise-item li")

  // console.log(noMoInactive)



  for (var i=0; i < noMoInactive.length; i++){

    if (noMoInactive[i].className.indexOf("inactive") >=0){
      noMoInactive[i].style.fontSize="0"}
      }


})



// document.querySelector("#reverse-squares button").addEventListener('click',function(){
//   var squares= document.querySelectorAll(".answer-box span")
//   console.log(squares)
//   var backwards=""
//   // for (var i=0; i < squares.length; i++){
//     // console.log(squares[0])
//    var first= squares[0]
//    var second=squares[1]
//    var third= squares[2]
//    var fourth= squares[3]
//    var fifth=squares[4]
//    var sixth=squares[5]
//    var seventh=squares[6]
//
//    backwards= seventh + sixth + fifth + fourth+ third+ second + first;
//    console.log(backwards)
//    squares=backwards
//
//
//
// })



document.querySelector("#pig-latin button").addEventListener('click',function(){
  var listEl= document.querySelectorAll("#tasks li")
  // console.log("---------------")
  console.log(listEl)
  var backwardsWord= ""

  for (var i=0; i <listEl.length; i++){
  var oneLi= listEl[i].textContent


  for (var b= oneLi.length-1; b >=0; b--){

    backwardsWord= backwardsWord + oneLi[b]
    // console.log(backwardsWord)
  }
} listEl.innerHTML=backwardsWord




})





//
// document.querySelector("#cycle-image button").addEventListener('click',function(){
//    //TASK #8
// })
