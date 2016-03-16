$(document).ready(function(){
	
	$('.slider').append('<div class="my-handle ui-slider-handle"></div>');
	console.log($("#slider_1_value_field").val());

	setDbLoadValue("slider_1",setInitialValue("slider_1"));
	setDbLoadValue("slider_2",setInitialValue("slider_2"));
	setDbLoadValue("slider_3",setInitialValue("slider_3"));
	setDbLoadValue("slider_4",setInitialValue("slider_4"));
	setDbLoadValue("slider_5",setInitialValue("slider_5"));

	setSlider("slider_1",setInitialValue("slider_1"));
	setSlider("slider_2",setInitialValue("slider_2"));
	setSlider("slider_3",setInitialValue("slider_3"));
	setSlider("slider_4",setInitialValue("slider_4"));
	setSlider("slider_5",setInitialValue("slider_5"));

	$("#satisfaction_index").html(parseInt(parseInt($("#slider_1_value").html()) + parseInt($("#slider_2_value").html()) + parseInt($("#slider_3_value").html()) + parseInt($("#slider_4_value").html()) + parseInt($("#slider_5_value").html())  ));
	
	function setInitialValue(slider_num) {
		if ($("#"+slider_num+"_value_field").val() < 1) {
	            	
	        temp = 1;
	        return temp;
	    }
	    else {
	        temp= $("#"+slider_num+"_value_field").val();
	        return temp;
	    }
	}

	function setSlider(slider_num,temp){
		$("#"+ slider_num ).slider(
		{
	            
	            value: temp,
	            min: 1,
	            max: 5,
	            step: 1,

	            slide: function( event, ui ) {
	            	setSliderValue(slider_num+"_value",ui);
	            	setFieldsValue(slider_num+"_value");
	            	changeEmoticon(slider_num);
	            }
		}
	);
	}

	function setDbLoadValue(slider_num,temp) {
		$( "#"+slider_num+"_value").html( temp );

	}

	function changeEmoticon(slider_num) {
		if (parseInt($( "#"+slider_num+"_value").html()) == 3 ) {
			// $( "#"+slider_num).children().addClass()
		}

	}


	function setSliderValue(slider_element,ui) {

		$( "#"+slider_element).html( ui.value );
        $("#satisfaction_index").html(parseInt(parseInt($("#slider_1_value").html()) + parseInt($("#slider_2_value").html()) + parseInt($("#slider_3_value").html()) + parseInt($("#slider_4_value").html()) + parseInt($("#slider_5_value").html())  ));
	}
	function setFieldsValue(slider_element){
		$("#"+slider_element+"_field").attr("value", parseInt($( "#"+slider_element).html())) ;
	}

  });