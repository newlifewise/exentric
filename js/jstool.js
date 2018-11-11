// JavaScript Document
$(document).ready(function(){	
  
	 
  $('td').find("input.addZero").change(function() {  
	   
	   var str = "";
	   var $Value=$( this ).val();
	   if(!isNaN($Value)){
		if($Value.length<$( this ).attr('maxLength'))
		{
		  for (var i=0; i<$( this ).attr('maxLength')-$Value.length; i++){
     str = str + "0";
		}
		$(this).val(str +$(this).val());
		}
	}else{
		alert("只能填數字");
	}  
	   
});
});