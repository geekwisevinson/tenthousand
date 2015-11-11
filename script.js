document.addEventListener('DOMContentLoaded',function(){


    dice = 5;
    array_dice = {};

    for (var i=0;i<dice;i++){
        var d = document.createElement('div');
        array_dice[i] = d;
        document.body.appendChild(d);
        var random_number = Math.floor(Math.random()*6) +1;
        array_dice[i].style.width = '100px';
        array_dice[i].style.border = '1px black solid';
        array_dice[i].style.display = 'inline-block';
        array_dice[i].style.height = '100px';
        array_dice[i].innerHTML = random_number + '';
        array_dice[i].addEventListener('touchstart',function(){
            var random_number = Math.floor(Math.random()*6) +1;
            this.innerHTML = random_number + '';
        })
    }
});





