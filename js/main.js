var typeasfast = ">Type the query as fast as possible"
var i = 0;
var blink = false;

var interval = setInterval(function(){
    $('#queryasfast').text($('#queryasfast').text() + typeasfast[i]);
    i++;
    if(i == typeasfast.length){
        setInterval(function(){
            blink 
            ? $('#queryasfast').text($('#queryasfast').text()+'_')
            : $('#queryasfast').text(typeasfast);
            blink = !blink;
        },600);
        clearInterval(interval);
    }
},50)

