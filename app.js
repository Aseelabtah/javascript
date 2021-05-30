var Incendies = "INCENDIES";



var userName = prompt("Whats your name ?");
alert("welcome to our websit " + userName )


var favMovie = prompt("What is your fav movie  ?");
// console.log(userAge);

if(favMovie === Incendies ){
  // console.log("what do you work ?");
  document.write("<p> Welcome to the club </p>")
}else if(favMovie === "the call"){
  document.write('<img src="https://pbs.twimg.com/profile_images/1324093768618909697/Ij-CAeyd_400x400.jpg" width="250px" alt="AOT"/>')
}else{
  alert('please next time answer either INCENDIES or Incendies ')} 



  var charectersName = prompt ('hello please enter your fav charecter name from Incendies movie !');

while (charectersName !== 'Lubna' && 
  charectesName !== 'Maxim')
  {
    charectesName = prompt ('please enter the charecter Name Lubna or Maxim ')
  } 

 function nameChar (){
   var userPhoto;

   if (charectersName === 'Lubna' ){
     userPhoto= '<img src = " https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Loubna_Azabal.jpg/220px-Loubna_Azabal.jpg" >';

   } else if (charectersName === 'Maxim' ){
     userPhoto='< img src = " https://r.search.yahoo.com/_ylt=AwrEzNzxlrNgE18AryqJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2UyNDA5NWZhZWY2OTc2NzVmMWE2NjI0ZmJjZGJhMjY4BGdwb3MDNwRpdANiaW5n/RV=2/RE=1622411121/RO=11/RU=https%3a%2f%2fagencem.com%2fen%2factors%2fgaudette-maxim%2f/RK=2/RS=x3Iu.kQL0N5GkkXv9KxanQDM4RI-">';
     var imgesNumber = prompt('how many image do you want ?');
     
     for (var i=0 ; i < imgesNumber ;
       i++ ){
         document.write(userPhoto);
       }
       } 
       }
       nameChar();


  