//DOM VARIABLES
$queryAsFast = $('#queryasfast');
$startMenu = $('#startmenu');

$typeasfast = "Type the query as fast as possible"

var textTypeAnim = setInterval(function(){
    $queryAsFast.text($queryAsFast.text() + $typeasfast[$queryAsFast.text().length]);
    if($queryAsFast.text().length == $typeasfast.length){
        clearInterval(textTypeAnim);
        $startMenu.addClass('hideme');
    }
},50)



var s = alasql('CREATE TABLE one (two INT)');
var ins = alasql('INSERT INTO one (two) VALUES (20)')
var ss = alasql('SELECT two FROM one')

console.log(ss[0]["two"]);

function executeQuery(){
    $('#excuseme').text(alasql($('#querybox').val()));
}