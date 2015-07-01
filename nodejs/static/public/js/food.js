(function(){

	var divFood = document.querySelector('.food');

	var xhr = new XMLHttpRequest();

	xhr.open('GET', './service/food', true);

	xhr.onload = function(){
		showFood(JSON.parse(xhr.responseText));
	};

	xhr.onerror = function(){
		alert('Service Failed');
	};

	xhr.send();

	function showFood(foods){

		var innerHTML = '';

		for (var i = 0; i < foods.length; i++) {
			innerHTML += '<div class="product">'
					  +	 '<img src="' + foods[i].thumb + '">'
					  +	 '<p class="name">' + foods[i].name + '</p>'
					  +	 '<p class="price">' + foods[i].price + '</p>'
					  +  '</div>';
		};

		divFood.innerHTML = innerHTML;
	}

})();