
document.addEventListener('DOMContentLoaded',function(){

 setup = function() {
     players = prompt('How many players');


     if (isNaN(players)) {
         alert('enter a number');
         setup();
     } else {
         obj_players = {};
         arr_players = [];
         points_this_turn = 0;
         for (var i = 0; i < players; i++) {
             arr_players.push("player" + i);
             obj_players["player" + i] = {};
             obj_players["player" + i].points = 0;
             obj_players["player" + i].name = prompt('name');
         }
         turn = 0;
         btn = document.createElement('button');
         document.body.appendChild(btn);
         btn.innerHTML = 'roll all';
         btn.addEventListener('touchstart', function () {
           //  roll_all();
         });
         btn.addEventListener('click', function () {
             roll_all();
         });

         btn2 = document.createElement('button');
         document.body.appendChild(btn2);
         btn2.innerHTML = 'roll rest';
         btn2.addEventListener('touchstart', function () {
            // roll_rest();
         });
         btn2.addEventListener('click', function () {
             roll_rest();
         });

         btn3 = document.createElement('button');
         document.body.appendChild(btn3);
         btn3.innerHTML = 'finish turn';
         btn3.addEventListener('touchstart', function () {
            // finish_turn();
         });
         btn3.addEventListener('click', function () {
             finish_turn();
         });
         btn4 = document.createElement('button');
         document.body.appendChild(btn4);
         btn4.innerHTML = 'add points';
         btn4.addEventListener('touchstart', function () {
             //add_points();
         });
         btn4.addEventListener('click', function () {
             add_points();
         });

         btn5 = document.createElement('button');
         document.body.appendChild(btn5);
         btn5.innerHTML = 'lose points';
         btn5.addEventListener('touchstart', function () {
             //lose_points();
         });
         btn5.addEventListener('click', function () {
             lose_points();
         });

         div1 = document.createElement('div');
         document.body.appendChild(div1);
         div2 = document.createElement('div');
         document.body.appendChild(div2);
         for (var i = 0; i < players; i++) {
             div1.innerHTML += obj_players["player" + i].name + ' = ' + obj_players["player" + i].points + '<br />'
         }
         div1.innerHTML += 'Turn = ' + obj_players['player' + turn].name;
     }

    };
    setup();
});



var roll_all = function() {
    div2.innerHTML = '';
    dice = 6;
    array_dice = [];

    for (var i = 0; i < dice; i++) {
        var d = document.createElement('div');
        array_dice[i] = d;
        div2.appendChild(d);
        var random_number = Math.floor(Math.random() * 6) + 1;
        array_dice[i].value = random_number;

        array_dice[i].style.width = '80px';
        array_dice[i].style.height = '80px';
        array_dice[i].style.border = '1px black solid';
        array_dice[i].style.display = 'inline-block';
        array_dice[i].style.position = 'relative';
        array_dice[i].style.top = '0px';

        array_dice[i].innerHTML = random_number + '<br /> Not yet picked';
        array_dice[i].addEventListener('click', function () {
            console.log(this);
            this.style.top = '160px';
            this.innerHTML = this.value + '<br />' + 'picked';
            this.style.backgroundColor = 'lime';
        });
        array_dice[i].addEventListener('touchstart', function () {
            console.log(this);
            this.style.top = '160px';
            this.innerHTML = this.value + '<br />' + 'picked';
            this.style.backgroundColor = 'lime';
        });
    }
};

var roll_rest = function(){
        for (var i= 0 ; i<dice; i++){
           if(array_dice[i].style.top === '0px'){
               var random_number = Math.floor(Math.random() * 6) + 1;
               array_dice[i].value = random_number;
               array_dice[i].innerHTML = random_number + '<br /> Not yet picked';
           }
        }
};

var finish_turn= function(){
    points_this_turn = 0;
    turn +=1;
    if (turn == players){
        turn = 0;
    }

    div1.innerHTML = '';
    for (var i = 0; i<players; i++) {
        div1.innerHTML += obj_players["player"+i].name + ' = ' + obj_players["player"+i].points + '<br />'
    }
    div1.innerHTML += 'Turn = ' + obj_players['player'+turn].name;
};

var add_points = function(){
    var temp =  parseInt(prompt('add points'));
    if (isNaN(temp)){
        alert('enter a number');
        add_points();
    }else{
        points_this_turn += temp;
        obj_players['player'+turn].points += temp;
        div1.innerHTML = '';
        for (var i = 0; i<players; i++) {
            div1.innerHTML += obj_players["player"+i].name + ' = ' + obj_players["player"+i].points + '<br />'
        }
        div1.innerHTML += 'Turn = ' + obj_players['player'+turn].name;
    }


};

var lose_points = function(){
    obj_players['player'+turn].points -= points_this_turn;
    div1.innerHTML = '';
    for (var i = 0; i<players; i++) {
        div1.innerHTML += obj_players["player"+i].name + ' = ' + obj_players["player"+i].points + '<br />'
    }
    div1.innerHTML += 'Turn = ' + obj_players['player'+turn].name;
};