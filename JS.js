var database = [
  {
      userName: "meeky",
	    password: "makaveli"
  },
  {
      userName: "sweet",
      password: "pei"
  },
  {     
      userName: "pinky",
      password: "jri"
  }
];

var newsfeed = [
{
    username: "mekkky"
    

},
{
    username: "kamani"
	  
},
{
	  username: "rose"
	  
}

];



function signIn(username,password) {
	if(username === database[0].username && password === database[0].password) {
		console.log(newsfeed);
	} else {
		  alert("sorry, wrong username and password!");
	}

}

  var userNameprompt = prompt("what's your username?");
  var passwordprompt = prompt("what's your password?");

signIn(userNameprompt, passwordprompt);
