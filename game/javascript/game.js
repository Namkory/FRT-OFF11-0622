let randomnumber = Math.floor(Math.random() * 30);
let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

const playagain = $('#again')   
const btns = $$('.grid-item');


btns.forEach(function(btn, index){
     btn.onclick = function(){
        value = this.value;
        if(value == randomnumber){
            $('.active').classList.remove('active')
            $('.result-content-item-true').classList.add('active')
        }else if(value < randomnumber){
            $('.active').classList.remove('active')
            $('.result-content-item-falses').classList.add('active')
        }else if(value > randomnumber){
            $('.active').classList.remove('active')
            $('.result-content-item-falseb').classList.add('active')
        }
    }
})

playagain.addEventListener('click', function(){
    location.reload();
})


