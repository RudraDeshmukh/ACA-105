Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
    camera=document.getElementById("webcam_live");
   
Webcam.attach(camera);

function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("webcam_snap").innerHTML='<img id="captured_image" src="'+data_uri+'">'

    })
}
console.log('ml5 version'+ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WHPlmLCu-/model.JSON',model_loaded);

function model_loaded(){
    console.log("The model is loaded")
}