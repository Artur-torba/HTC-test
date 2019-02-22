window.onload = function(){
	document.querySelector('.tabs-header').addEventListener('click', fTabs);
	function fTabs(event){
		console.log(event);
		if (event.target.className == 'tab-h') {
			var dataTab = event.target.getAttribute('data-tab');
			//dataTab -номер вкладки, которую нужноотобразить.
			var tabBody = document.getElementsByClassName('tab-b');
			// Отключаю класс active
			var tabH = document.getElementsByClassName('tab-h');
			for(var i=0; i<tabH.length; i++){
				tabH[i].classList.remove('active');
			}
			event.target.classList.add('active');
			//все вкладки с содержимым
			for (var i=0; i<tabBody.length; i++){
				if(dataTab==i){ 
					tabBody[i].style.display = 'block';
				}
				else{
					tabBody[i].style.display = 'none';
				}
			}
		}
		
	}


      var music = document.getElementById('music');
         music.onclick = function(){
	       this.className = 'hide';
}

       var computer = document.getElementById('computer');
computer.onclick = function(){
	this.className = 'hide';
}
var radio = document.getElementById('radio');
radio.onclick = function(){
	this.className = 'hide';
}
var dance = document.getElementById('dance');
dance.onclick = function(){
	this.className = 'hide';
}
var pussy = document.getElementById('pussy');
pussy.onclick = function(){
	this.className = 'hide';
}



var addfriend = document.getElementById('addfriend');
addfriend.onclick = function(){
var select = document.getElementById('select');
var option = select.options[select.selectedIndex].value;
if(option == 'music'){
	music.classList.remove('hide')
}
if(option == 'computers'){
	computer.classList.remove('hide')
}
else if(option == 'radio'){
	radio.classList.remove('hide')
}
else if(option == 'dance'){
	dance.classList.remove('hide')
}
else if(option == 'pussy'){
	pussy.classList.remove('hide')
}
 }
 
    var input1 = document.getElementById('name');
        input1.value = localStorage.getItem('dataForMyInput1') || 'Виталя Гора';
        input1.oninput = function(){
        localStorage.setItem('dataForMyInput1', input1.value);
    }

    var input2 = document.getElementById('phone');
        input2.value = localStorage.getItem('dataForMyInput2') || '+7 (982) 797 67 57';
        input2.oninput = function(){
        localStorage.setItem('dataForMyInput2', input2.value);
    }
    
    var input3 = document.getElementById('email');
        input3.value = localStorage.getItem('dataForMyInput3') || 'artur.torba@mail.ru';
        input3.oninput = function(){
        localStorage.setItem('dataForMyInput3', input3.value);
    }
}

	

