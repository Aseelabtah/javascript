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