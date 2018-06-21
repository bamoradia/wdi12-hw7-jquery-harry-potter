if (typeof jQuery == 'undefined'){
  //console.log('oops! I still have to link my jQuery properly!');
} else {
  //console.log('I did it! I linked jQuery and this js file!')
};

const $body = $('body');
const $container = $('#container');
//console.log($container);

//First Year
const $h1 = $('<h1>');
//console.log($h1)

$h1.text('First Year at Hogwarts');
$body.append($h1);



//Second Year
const $h2 = $('<h2>');

$h2.text('Fred Flubberton');
$body.append($h2);

const $h3 = $('<h3>');

$h3.text('Ravenclaw');
$body.append($h3);

const $h4 = $('<h4>');

$h4.text('Binkers');
$body.append($h4);
$h4.addClass('Owl');

const $h4_2 = $('<h4>');

$h4_2.text('13" Kingwood wand with an alligator scale core');
$body.append($h4_2);

