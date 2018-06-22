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





//Third Year
const $ul = $('<ul>');
$ul.attr('storage', 'trunk')
$body.append($ul);

const $li = $('<li>');

$li.text('butter beer')
$ul.append($li);


const $li_2 = $('<li>');
$li_2.text('invisibility cloak')
$li_2.addClass('secret');
$ul.append($li_2);


const $li_3 = $('<li>');
$li_3.text('magic map')
$li_3.addClass('secret');
$ul.append($li_3);

const $li_4 = $('<li>');
$li_4.text('time turner')
$li_4.addClass('secret');
$ul.append($li_4);


const $li_5 = $('<li>');
$li_5.text('leash')
$li_5.addClass('owl');
$ul.append($li_5);


const $li_6 = $('<li>');
$li_6.text("Bertie Bott's Every Flavor [Jelly] Beans")
$ul.append($li_6);



//Year 4
const $h5 = $('<h5>');
$h5.text('Spring 2017')
$body.append($h5);

const $table = $('<table>');
$body.append($table);
const $thead = $('<thead>');
$table.append($thead);

$thead.append($('<th>').text('Day'));
$thead.append($('<th>').text('Classes'));

const $tr = $('<tr>');

$table.append($tr);
// console.log(document.getElementsByTagName('th'))
$tr.append($('<td>').text('Monday'));
$tr.append($('<td>').text('Herbology'));
$tr.append($('<td>').text('Divination'));


const $tr2 = $('<tr>');

$table.append($tr2);
$tr2.append($('<td>').text('Tuesday'));
$tr2.append($('<td>').text('History of Magic'));
$tr2.append($('<td>').text('Charms'));


const $tr3 = $('<tr>');

$table.append($tr3);
$tr3.append($('<td>').text('Wednesday'));
$tr3.append($('<td>').text('Defense Against the Dark Arts'));
$tr3.append($('<td>').text('Quidditch Practice'));

const $tr4 = $('<tr>');

$table.append($tr4);
$tr4.append($('<td>').text('Thursday'));
$tr4.append($('<td>').text('Potions'));
$tr4.append($('<td>').text('Transfiguration'));

const $tr5 = $('<tr>');

$table.append($tr5);
$tr5.append($('<td>').text('Friday'));
$tr5.append($('<td>').text('Broom Practice'));
$tr5.append($('<td>').text('Care of Magical Creatures'));



//Fifth Year

$('h4')[1].remove();
$('li')[0].remove();
$('ul').before('<h4>14" Elder Wood wand with a dragon tooth core</h4>');
console.log($('h4')[1]);
//$('h4')[1].css('color', 'indigo');


//console.log($('h4').filter($('.owl')));
$('h4').filter($('.owl')).remove();





