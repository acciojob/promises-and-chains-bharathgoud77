//your JS code here. If required.
let promise = new Promise(resolve, reject)
{
	setTimeout(function(){
		var age= document.getElementById("age").value;
		var name = document.getElementById("name").value;
		if(age >= 18){
			window.alert(`Welcome, ${name}. You can vote.`)
		}
		else{
			window.alert(`Oh sorry ${name}. You aren't old enough`)
		}
	},4000}
}