
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
  if (circleImg.style.backgroundColor!=="black"){
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



document.querySelector("#reverse-squares button").addEventListener('click',function(){
  var squares= document.querySelectorAll(".answer-box span");
  var daBox = document.querySelector("#reverse-squares .answer-box")
  var squareEl=document.querySelector(".square");
  var newArry = []
  for(i = 0; i < squares.length; i++){
    // console.log(squares[i])
    newArry.unshift(squares[i])
  }
  console.log(newArry)



  // newArry.reverse()
  // console.log()
  daBox.innerHTML = ""
  // console.log(daBox)
  for(b = 0; b < newArry.length; b++){
    // console.log(newArry[b])
    // console.log(newArry[b].element)
    console.log(newArry[b])
    daBox.innerHTML += "<span class='" + newArry[b].className + "'>" + newArry[b].textContent + "</span>"
  }
  console.log(daBox)




  //  boxEl.innerHTML=
  //  "<span class='square s2'>1</span>"+
  //  "<span class='square s1'>2</span>"+
  //  "<span class='square s2'>3</span>" +
  //  "<span class='square s1'>4</span>" +
  //  "<span class='square s1'>5</span>"+
  //  "<span class='square s1'>6</span>"+
  //  "<span class='square s3'>7</span>"

  //  console.log(boxEl.innerHTML)

})





document.querySelector("#pig-latin button").addEventListener('click',function(){
  var listEl= document.querySelectorAll("#tasks li");
  var tasksEl= document.querySelector("#tasks")

  // console.log("---------------")
  // console.log(listEl);
  var backwardsWord= "";

  for (var i=0; i <listEl.length; i++){
    var oneLi= listEl[i].textContent;

    backwardsWord+= "<li>";
    for (var b= oneLi.length-1; b >=0; b--){

      backwardsWord= backwardsWord + oneLi[b];
      // console.log(backwardsWord)
    }
    backwardsWord+= "</li>";
  }
  // backwardsWord= "<ul>" + backwardsWord + "</ul>"
  // console.log(backwardsWord);
  // listEl.innerHTML=backwardsWord
  tasksEl.innerHTML=backwardsWord;
  // console.log(listEl.innerHTML)


})






document.querySelector("#cycle-image button").addEventListener('click',function(){
  var picEl= document.querySelectorAll("#city-img")
  console.log(picEl)

    for (var i = 0; i < picEl.length; i++) {
    var imageElem = picEl[i]
    var random= Math.random()*50
    var floor= Math.floor(random)
    // console.log(floor)
    var source= (imageElem.getAttribute("src"));
    // console.log(source)
    if (source.indexOf(1)===20){
      source="./images/city-photo-"+floor + "4.jpg"
    }console.log(source)


    }


})
