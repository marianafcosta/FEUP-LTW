function onImageSelected(event) {

    event.preventDefault();
    event.stopPropagation();

    var input = event.target;
    var _validFileExtensions = [".png",".jpg",".jpeg"]; 

    if (input.type == "file") {
      var sFileName = input.value;

        if (sFileName.length > 0) {
          var blnValid = false;
            for (var j = 0; j < _validFileExtensions.length; j++) {
                var sCurExtension = _validFileExtensions[j];
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    break;
                }
            }
             
            if (!blnValid) {
                alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
                oInput.value = "";
                return false;
            }
        }
    }
    
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('uploadedImage');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
}

function onTrackSelected(event) {

  var _validFileExtensions = [".mp3"];    

    var input = event.target;

    if (input.type == "file") {
      var sFileName = input.value;

        if (sFileName.length > 0) {
          var blnValid = false;
            for (var j = 0; j < _validFileExtensions.length; j++) {
                var sCurExtension = _validFileExtensions[j];
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    break;
                }
            }
             
            if (!blnValid) {
                alert("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
                oInput.value = "";
                return false;
            }
        }
    }
    
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('uploadedTrack');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);

}