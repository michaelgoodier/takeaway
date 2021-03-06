//json list of questions and takeaway options
var questionList = [
{
	key:1, 
	back:"none",
	type: 'q',
	header: "What mood are you in?", 
	options: {
		a: 'I couldn\'t care any less about my health, I want to massively gorge / I\'m feeling depressed.', 
		b: 'I feel like a bit of comfort indulgment on a night in, maybe watching a film for example.', 
		c: 'I can\'t be bothered to cook, but sort of want something healthy.'
	}, 
	result:{
		a: 16,
		b: 3,
		c: 4
	}
},
{
	key:16, 
	back:1,
	type: 'q',
	header: "Which would you prefer:", 
	options: {
		a: 'A bit of variety with my order, at least two different elements to the meal.', 
		b: 'I\'m okay eating just one thing for ages.'
	}, 
	result:{
		a: 14,
		b: 2
	}
},
{
	key:2, 
	back:1,
	type: 'q',
	header: "Which describes your mood better?", 
	options: {
		a: 'Honestly, I don\'t want to move.', 
		b: 'Just feel like over-indulging with something a bit greasy'
	}, 
	result:{
		a: 7,
		b: 8
	}
},
{
	key:3, 
	back:1,
	type: 'q',
	header: "Which would you prefer:", 
	options: {
		a: 'A bit of variety with my order, at least two different elements to the meal.', 
		b: 'I\'m okay eating just one thing for ages.'
	}, 
	result:{
		a: 5,
		b: 9,
	}
},
{
	key:4, 
	back:1,
	type: 'q',
	header: "Pick a flavour", 
	options: {
		a: 'Clean and savoury', 
		b: 'Fresh and spicy'
	}, 
	result:{
		a: 10,
		b: 11
	}
},
{
	key:5, 
	back:3,
	type: 'q',
	header: "How would you like to feel?", 
	options: {
		a: 'A slight food high followed by a bit of tiredness after being full.', 
		b: 'A slower build up to a slightly more wholesome fullness.',
		c: 'Sort of in-between both of these options actually.'
	}, 
	result:{
		a: 6,
		b: 12,
		c: 13
	}
},
{
	key:6,
	back:5,	
	type: 'q',
	header: "Do you feel like being a bit of a pig?", 
	options: {
		a: 'Yes, tonight I really don\'t care about being "healthy".', 
		b: 'While I don\'t necessarily have to eat something healthy, eating dirty doesn\'t form part of my motivating urge tonight.'
	}, 
	result:{
		a: 14,
		b: 15
	}
},
{
	key:7, 
	type: 'a',
	header: "a bucket of fried chicken", 
	logo: 'chicken.svg',
	links:{
		justeat: '/chicken',
		ubereats: 'UberEats',
		deliveroo: '&collection=fried+chicken'
	}
},
{
	key:8, 
	type: 'a',
	header: "a big kebab", 
	logo: 'kebab.svg',
	links:{
		justeat: '/kebabs',
		ubereats: 'UberEats',
		deliveroo: '&collection=kebab'
	}
},
{
	key:9, 
	type: 'a',
	header: "a pizza", 
	logo: 'pizza.svg',
	links:{
		justeat: '/pizza',
		ubereats: 'UberEats',
		deliveroo: '&collection=pizza'
	}
},
{
	key:10, 
	type: 'a',
	header: "a Japanese or sushi meal", 
	logo: 'sushi.svg',
	links:{
		justeat: '/japanese?cuisine=sushi',
		ubereats: 'UberEats',
		deliveroo: '&collection=japanese'
	}
},
{
	key:11, 
	type: 'a',
	header: "a Thai", 
	logo: 'thai.svg',
	links:{
		justeat: '/thai',
		ubereats: 'UberEats',
		deliveroo: '&collection=thai'
	}
},
{
	key: 12, 
	type: 'a',
	header: "an Indian", 
	logo: 'indian.svg',
	links:{
		justeat: '/indian',
		ubereats: 'UberEats',
		deliveroo: '&collection=indian'
	}
},
{
	key: 13, 
	type: 'a',
	header: "a Chinese.", 
	logo: 'chinese.svg',
	links:{
		justeat: '/chinese',
		ubereats: 'UberEats',
		deliveroo: '&collection=chinese'
	}
},
{
	key: 14, 
	type: 'a',
	header: "a burger or some fast food", 
	logo: 'fast_food.svg',
	links:{
		justeat: '/american?cuisine=burgers&cuisine=fastfood',
		ubereats: 'UberEats',
		deliveroo: '&collection=burgers'
	}
},
{
	key: 15, 
	type: 'a',
	header: "a portion of fish and chips", 
	logo: 'fish_and_chips.svg',
	links:{
		justeat: '/fish-and-chips',
		ubereats: 'UberEats',
		deliveroo: '&collection=fish+and+chips'
	}
}
]

//function to display questions, or takeaway options
function showQuestion(questionNumber,questionList){

	var quizContainer = document.getElementById('quiz');
	var resultsContainer = document.getElementById('results');
	var output = [];
	var options = [];
	var back_button = [];
	// for all of our questions
	for ( var i = 0; i < questionList.length; i++){

		var obj = questionList[i];
		//find the one that matches the number we want
		if(obj.key == questionNumber){
			//if a question
			if(obj.type == "q"){
				for(letter in obj.options){
					// ...add an html radio button
					options.push(
					'<p>'
					+ '<label>'
					+ '<input type="radio" name="'+letter+'" value="'+obj.result[letter]+'" onclick="showQuestion(this.value,questionList)" class="button"> '
					+ obj.options[letter]
					+ '</label>'
					+ '</p>'
					);
				}
				//if not first page 
				if(obj.key!=1){back_button  = '<div><div class="button ready" onclick="showQuestion('+obj.back+',questionList)"><<< Back</div></div>'}
				output.push(
				'<div class="header"><h3 class="centre">' + obj.header + '</h3></div>'
				+ '<div class="options">' + options.join('') + '</div>'
				+ back_button
				);
			} 
			//if an answer
			if(obj.type == "a"){
				back = 1
				justeat = obj.links.justeat;
				deliveroo = obj.links.deliveroo;
				output.push(
				'<div class="header"><h3 class="centre">You should order ' + obj.header + '.</h3></div>'
				+ '<img src="images/'+obj.logo+'" class="logo" />'
				+ '<div class="delivery_links">'
				+ '<p> Order '+obj.header+' to <input type="text" placeholder="your postcode" name="postcode" id="postcode" autocomplete="off"> on </p>'
				+ '<div class="button_row"><a id="justeatlink" target="_blank"><div class="button">Just Eat</div></a> or <a id="deliveroolink" target="_blank"><div class="button">Deliveroo</div></a></div>'
				+ '<p><a onclick="showQuestion('+1+',questionList)">Start again</a></p>'
				+ '</div>'
				);	
			}			
				
		}		
	}
	
	quizContainer.innerHTML = output.join('');
	//resize input field and change links etc
   	document.querySelector('input').addEventListener("keydown", resizeInput); // resize postcode box when postcode entered
	document.querySelector('input').addEventListener("keyup", changeLinks);// change links when postcode entered
}

//function to resize postcode box
function resizeInput() {
	var key = event.key
	//if backspace delete width
	if(key === "Backspace" || key === "Delete"){
		var width = this.value.length - 0.5;
	//if other key add width
	} else {
		var width = this.value.length + 1.5;
	}
	//set width
	this.style.width = width + "ch" ;	
}

//function to check if postcode is valid
function isValidPostcode(p) { 
    var postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i; 
    return postcodeRegEx.test(p); 
}

//function to activate links
function changeLinks() {
	pc= this.value;
	justeatlink = document.getElementById("justeatlink");
	deliveroolink = document.getElementById("deliveroolink");
    //when zero set to placeholder width and link 
	if(pc.length==0){
		this.style.width = "11ch";
	}
	//when valid postcode
	if(isValidPostcode(pc)){
		//update links
		justeatlink.href= 'https://www.just-eat.co.uk/area/'+pc+justeat;
		deliveroolink.href= 'https://deliveroo.co.uk/restaurants/example/place?postcode='+pc+deliveroo;
		//update styling
		justeatlink.querySelector("div").classList.add("ready");
		deliveroolink.querySelector("div").classList.add("ready");
	} else {
		//remove active styling
		justeatlink.querySelector("div").classList.remove("ready");
		deliveroolink.querySelector("div").classList.remove("ready");
		//remove href if it exists
		if(deliveroolink.hasAttribute("href")){
			deliveroolink.removeAttribute("href");
			justeatlink.removeAttribute("href");
		}
		
	}
}
//show question 1 on page load
showQuestion(1,questionList)
