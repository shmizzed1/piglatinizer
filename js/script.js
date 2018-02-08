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
			if (arr[i].slice(0,1) = "b" || "c" || "d" ||  "f" || "g" || "j" || "k" || "m" || "n" || "l" || "p" || "q" || "r" ||"s" || "t" || "v" || "w" || "x" || "z" ){
			arr[i] = arr[i] + "ay "
			else ()
			{
			arr[i] = arr[i] + "cat "
			}
		}
	return arr;
}	



// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
/*function ayadder(arr){
	for (var i = 0; i < arr.length; i++){
	return(array[i] + "ay");
	}
	
}
*/




});







// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance


