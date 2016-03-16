$("#slider").slider(
{
            value:100,
            min: 0,
            max: 500,
            step: 50,
            slide: function( event, ui ) {
                $( "#slider-value" ).html( ui.value );
            }
}
);

$( "#slider-value" ).html(  $('#slider').slider('value') );
