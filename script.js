document.addEventListener('DOMContentLoaded',function(){


    dice = 5;
    array_dice = {};

    for (var i=0;i<dice;i++){
        var d = document.createElement('img');
        array_dice[i] = d;
        document.body.appendChild(d);
        var random_number = Math.floor(Math.random()*6) +1;
        array_dice[i].src = 'images/die' + random_number +'.jpg';
        array_dice[i].addEventListener('touchstart',function(){
            var random_number = Math.floor(Math.random()*6) +1;
            this.src = 'images/die' + random_number +'.jpg';
        })
    }
});





