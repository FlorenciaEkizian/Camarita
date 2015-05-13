    window.addEventListener('load', function(){
    	// Wait for PhoneGap to load
   		document.addEventListener("deviceready", arrancar, false);
    }, false);
    

    // PhoneGap is ready
    function arrancar() {
    	var startBtn = $('#startBtn');
    	
    	startBtn.click(function(){
    		sacarFoto();
    	});
    	
    }
    
    // toca el boton para sacar foto
    function sacarFoto() {
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
		destinationType: Camera.DestinationType.DATA_URL
		});
    }

	function onSuccess(imageData) {
		var image = document.getElementById('myImage');
		image.src = "data:image/jpeg;base64," + imageData;
	}
	
	function onFail(message) {
		alert('Failed because: ' + message);
	}   
