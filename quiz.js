//list of questions
var questionList = [
{
	key:1, 
	question: "What mood are you in?", 
	answers: {
		a: 'Depressed, I don\'t give a fuck about myself, I want to gorge.', 
		b: 'I feel like a bit of comfort indulgment while watching a film, for example.', 
		c: 'I can\'t be bothered to cook, but sort-of want something healthy.'
	}, 
	result:{
		a: 2,
		b: 3,
		c: 4,
	}
},
{
	key:2, 
	question: "kfc/kebab", 
	answers: {
		a: 'kfc', 
		b: 'kebab'
	}, 
	result:{
		a: 'a bucket of fried chicken.',
		b: 'a big kebab.'
	}
},
{
	key:3, 
	question: "Which would you prefer:", 
	answers: {
		a: 'A bit of variety with my order, several small things perhaps.', 
		b: 'No, I\'m okay eating just one thing for ages.'
	}, 
	result:{
		a: 5,
		b: 'a Pizza.',
	}
},
{
	key:4, 
	question: "sushi/thai", 
	answers: {
		a: 'sushi/japanese', 
		b: 'thai'
	}, 
	result:{
		a: 'a Japanese or sushi meal.',
		b: 'a Thai.'
	}
},
{
	key:5, 
	question: "How would you like to feel?", 
	answers: {
		a: 'A slight food high followed by a bit of tiredness after being full.', 
		b: 'A slower build up to a slightly more wholesome fullness.',
		c: 'Sort of in-between both of these options actually.'
	}, 
	result:{
		a: 6,
		b: 'an Indian.',
		c: 'a Chinese.'
	}
},
{
	key:6, 
	question: "How would you like to feel?", 
	answers: {
		a: 'burger', 
		b: 'fish and chips'
	}, 
	result:{
		a: 'a burger meal.',
		b: 'a portion of Fish and Chips.'
	}
}
]
// function to check ig


//first we set question number to 1
var questionNumber = 1

//function to display questions, or results if it is a result
function showQuestion(questionNumber,questionList){

	var quizContainer = document.getElementById('quiz');
	var resultsContainer = document.getElementById('results');
	var output = [];
	var answers = [];
	//check if is a question number, otherwise display result
	if (isNaN(questionNumber)){
		output.push('<div class="answers">You should order ' + questionNumber + '</div>');
	} else {
		// for all of our questions
		for ( var i = 0; i < questionList.length; i++){

			var obj = questionList[i];
			//find the one that matches the number we want
			if(obj.key == questionNumber){
				console.log(obj.key)
				
				//if 
				
				for(letter in obj.answers){
					// ...add an html radio button
					answers.push(
					'<p>'
					+ '<label>'
					+ '<input type="radio" name="'+letter+'" value="'+obj.result[letter]+'" onclick="showQuestion(this.value,questionList)" class="button"> '
					+ letter.toUpperCase() + ': '
					+ obj.answers[letter]
					+ '</label>'
					+ '</p>'
					);
				}
					output.push(
					'<div class="question"><h3>' + obj.question + '</h3></div>'
					+ '<div class="answers">' + answers.join('') + '</div>'
					);
					console.log(output)
					console.log(quizContainer)
			}		
		}
	}
	quizContainer.innerHTML = output.join('');
}


showQuestion(1,questionList)
// on submit, show results
