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