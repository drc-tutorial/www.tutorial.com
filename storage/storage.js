(function(){

	// var buttonSave = document.getElementById('save');
	var buttonClear = document.getElementById('clear');

	var inputName = document.getElementById('name');
	var inputEmail = document.getElementById('email');
	var textAreaMessage = document.getElementById('message');

	/*buttonSave.onclick = function(){
		save('contact', getContact());
	};*/

	inputName.onchange = changeHandler; 
	inputEmail.onchange = changeHandler;
	textAreaMessage.onchange = changeHandler;

	buttonClear.onclick = function(){
		clear();
	};

	function changeHandler(){
		save('contact', getContact());
	}

	function getContact(){
		return {
			name: inputName.value,
			email: inputEmail.value,
			message: textAreaMessage.value
		};
	}

	function save(key, value){
		localStorage[key] = JSON.stringify(value);
	}

	function clear(){

		inputName.value = '';
		inputEmail.value = '';
		textAreaMessage.value = '';

		localStorage.clear();
	}

	function populate(contact){
		inputName.value = contact.name;
		inputEmail.value = contact.email;
		textAreaMessage.value = contact.message;
	}

	function checkLocalStorage(){
		if(localStorage.length){
			populate(JSON.parse(localStorage.contact));
		}
	}

	checkLocalStorage();

})();