let turnon = true;
function changecolor (){
    if(turnon){
        document.getElementById('images').src = './images/imagevang.jpg'

    } else {
        document.getElementById('images').src = './images/light.png'   
    }
    turnon = !turnon;   
}
