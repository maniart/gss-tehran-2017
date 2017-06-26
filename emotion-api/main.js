$(document).ready(function() {

  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var video = document.getElementById('video');
  var captureButton = document.getElementById('snap')

  function initWebCam() {
    console.log('init web cam');
    // Grab elements, create settings, etc.

    // Get access to the camera!
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Not adding `{ audio: true }` since we only want video now
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(function(stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
          })
          .catch(function(e) {
            console.error('an error occured while initializing webcam', e);
            alert('Oops! Can not initialize webcam');
          });
    }
  }

  function captureImage() {
    console.log('capture image called');
    // Elements for taking the snapshot
    context.drawImage(video, 0, 0, 640, 480);
  }

  function bindEvents() {
    captureButton.addEventListener('click', captureImage);
  }

  function uploadImage() {
    // TODO - implement this
  }

  function callEmotionApiWithImageUrl(url) {
    // TODO - implement this
  }

  function init() {
    console.log('global init');
    initWebCam();
    bindEvents();
  }

  // kick everything off
  init();

});





/*
$(document).ready(function() {
	
  // var endPoint = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0';
  // Request parameters
  var params = {
  };
  var endPoint = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?' + $.param(params);
	

  
  $.ajax({ 
    url: endPoint + $.param(params),
    beforeSend: function(xhrObj){
      // Request headers
      xhrObj.setRequestHeader('Content-Type','application/json');

      // NOTE: Replace the "Ocp-Apim-Subscription-Key" value with a valid subscription key.
      xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key', '8939d6ce496a4ab2aaec1710710d8ce0');
    },
    type: 'POST',
    // Request body
    data: '{"url": "https://scontent.xx.fbcdn.net/v/t1.0-9/19437763_10155472185647210_6449581982835567870_n.jpg?oh=e44b852ced2fa3dae05b3d7c8e6f96fb&oe=59C9F21B"}',
  })
  .done(function(data) {
    console.log('Success: ', data);
  })
  .fail(function(e) {
  	console.log('Faiure: ', e);
  });
});
*/