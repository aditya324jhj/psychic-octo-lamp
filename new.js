let pic = ['1.jpg', '3.jpg', '5.jpg' , "6.jpg" , "7.jpg" ,"8.jpg" , '9.jpg' ];
let imageNumber = 0;
document.getElementById("myButton").addEventListener('click', changeImage);
function changeImage() {
    imageNumber = (imageNumber + 1) % pic.length;
    document.getElementById("myImage").src = pic[imageNumber];
}


classifier = ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded() {
    console.log('model Loaded!');
}

function check() {
    img =document.getElementById("myImage");
classifier.classify(img, gotResult);

}

function gotResult(error ,  results) {
    if (error) {
        console.error(error);
    }else {
        console.log(results)
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}





