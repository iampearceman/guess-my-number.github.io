'use strict';

const random_number = gen_random_number();
let number_of_guesses = 20;
let users_input;

function gen_random_number() {
    const random_number = Math.floor(Math.random() * (20 - 1) + 1);
    return random_number;
}

const input = document.querySelector('input');
input.addEventListener('input', update_value_of_users_input);

function update_value_of_users_input(e) {
    users_input = e.target.value;
}


function play() {
    can_the_user_play();
}


function guess_counter() {
    number_of_guesses--;
    update_score();
}

function can_the_user_play() {
    if (number_of_guesses >= 1) {
        check_guess();
    } else {
        lost_the_game();
    }
}

function check_guess() {
    if (parseInt(users_input) === random_number) {
        won_the_game();
    } else if (users_input > random_number) {
        guess_counter();
        msg_update_too_high();
    } else {
        guess_counter();
        msg_update_too_low();
    }
}

function change_background_color_win() {
    document.body.style.backgroundColor = "green";
}

function change_background_color_lost() {
    document.body.style.backgroundColor = "red";
}

function reveal_number() {
    document.getElementById('number').innerText = random_number;
}

function update_score() {
    document.getElementById('score').innerText = number_of_guesses;
}

function msg_update_too_high() {
        document.getElementById('msg1').innerHTML = "Too High..";
}

function msg_update_too_low() {
    document.getElementById('msg1').innerHTML = "Too Low..";
}

function set_highscore() {
    document.getElementById('highscore').innerHTML = number_of_guesses;
}

function won_the_game() {
    reveal_number();
    document.getElementById('msg1').innerHTML = "You won.. 🟢";
    change_background_color_win();
    set_highscore();
}

function lost_the_game() {
    reveal_number()
    document.getElementById('msg1').innerHTML = "You lost.. 🔴 ";
    change_background_color_lost();
    set_highscore();
}