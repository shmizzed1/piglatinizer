// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {

$("button").click(function(){
	 var a = $("input").val();
	 var result = sentenceToPigLatin(a);
	 $(".print").text(result);
});

function sentenceToPigLatin(word) {
	var arr = word.split(' ');
	for (var i = 0; i < arr.length; i++){
		if(arr[i].slice(0,1) === "b" || 
			arr[i].slice(0,1) ==="c"||
			arr[i].slice(0,1) === "d" || 
			arr[i].slice(0,1) === "f" || 
			arr[i].slice(0,1) === "g" || 
			arr[i].slice(0,1) === "h" || 
			arr[i].slice(0,1) === "j" ||
			arr[i].slice(0,1) === "k" || 
			arr[i].slice(0,1) === "l" ||
			arr[i].slice(0,1) === "m" ||
			arr[i].slice(0,1) === "n" || 
			arr[i].slice(0,1) === "p" || 
			arr[i].slice(0,1) === "q" || 
			arr[i].slice(0,1) === "r" || 
			arr[i].slice(0,1) === "s" || 
			arr[i].slice(0,1) === "t" || 
			arr[i].slice(0,1) === "v" || 
			arr[i].slice(0,1) === "w" || 
			arr[i].slice(0,1) === "x" || 
			arr[i].slice(0,1) === "y" || 
			arr[i].slice(0,1) === "z"){
			var firstletter = arr[i].slice(0,1)
			arr[i] = arr[i].slice(1,(arr[i].length)) + firstletter + "ay"
		}
		else {
			arr[i] = arr[i] + "ay"	
		}
		//arr[i] = arr[i] + "ay ";
		//console.log(arr[i].slice(0,1);
	}	
	return(arr);
}
})

// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 




// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance
