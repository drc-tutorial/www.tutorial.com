(function(){

	var buttons = document.querySelectorAll('.controls button');

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function(event){
			ajax(event.target.value);
		};
	};

	function ajax(method){

		var xhr = new XMLHttpRequest();

		var url = method == 'get' ? './service/Raul' : './service';

		xhr.open(method, url, true);

		xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');

		xhr.onload = function(){
			console.log(xhr.responseText);
		};

		xhr.onerror = function(){
			alert('Service Failed');
		};

		xhr.send(JSON.stringify({name: 'Raul Gil'}));

	}

})();