$(document).ready(function(){
	alert('hello');
	$('.slider').append('<div class="my-handle ui-slider-handle"><svg height="18" width="14"><path d="M13,9 5,1 A 10,10 0, 0, 0, 5,17z"/></svg></div>');

	setSlider("slider_1");
	setSlider("slider_2");
	setSlider("slider_3");
	setSlider("slider_4");
	setSlider("slider_5");
	

	function setSlider(slider_num){
		$("#"+ slider_num ).slider(
		{
	            value:0,
	            min: 0,
	            max: 4,
	            step: 1,

	            slide: function( event, ui ) {
	            	setSliderValue(slider_num+"_value",ui);
	            	setFieldsValue(slider_num+"_value");
	            }
		}
	);
	}

	function setSliderValue(slider_element,ui) {

		$( "#"+slider_element).html( ui.value );
        $("#satisfaction_index").html(parseInt(parseInt($("#slider_1_value").html()) + parseInt($("#slider_2_value").html()) + parseInt($("#slider_3_value").html()) + parseInt($("#slider_4_value").html()) + parseInt($("#slider_5_value").html())  ));
    	console.log(parseInt($("#satisfaction_index").html()));

	}
	function setFieldsValue(slider_element){
		console.log($("#"+slider_element+"_field").val());
		$("#"+slider_element+"_field").value = parseInt($( "#"+slider_element).html());
		console.log('hello');
		console.log($("#"+slider_element+"_field").val());
	}

  });


