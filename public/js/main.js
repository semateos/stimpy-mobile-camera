console.log('js goes here you sick little monkey');

$(document).ready(function(){

	console.log('ready');

    $('.bg img').fullscreener();

    function onSuccess(imageData) {
        var image = document.getElementById('photo');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

    $('.text button').on('touchstart click', function(e){

        e.stopPropagation(); e.preventDefault();
        
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });
    })

});