$(function() {	  
		
		//$("#aaa").click(function(){
			
		$(".x-datepicker").datepicker({
			showOn: "button", //(用both時後面有圖示按鈕) button
			buttonImage: "../images/icon/calendar.png",
			buttonImageOnly: true,//true
			changeMonth: true,
			changeYear: true,
			dateFormat: 'yymmdd',
			//maxDate: new Date(),最大日期
			onClose: function (dateText, inst) {   
              if ($(window.event.srcElement).hasClass('ui-datepicker-close')){				  
            	  $("#" + inst.id).val('');
                  //$.datepicker._clearDate("#" + inst.id)
              }
			  //$('#ui-datepicker-div').remove();
            }, 
			showButtonPanel: true
		 });
	//});	
	
	
		$( "#datepicker" ).datepicker( "option", $.datepicker.regional['zh-TW'] );
		//$.datepicker.setDefaults($.datepicker.regional[ "zh-TW" ]);

	/*$(".x-datepicker").datepick({
			dateFormat: 'yyyy/mm/dd'
				},
				$.extend($.datepick.regional['zh-TW']));
		*/
		
		/*$.datepicker._generateHTML_Old = $.datepicker._generateHTML; 
		$.datepicker._generateHTML = function(inst) { 
			res = this._generateHTML_Old(inst); 
			res = res.replace("_hideDatepicker()","_clearDate('#"+inst.id+"')"); 
			return res; 
		} */
		
		$(".x-datepicker-readonly").keydown(function (e){
			switch(e.keyCode) {  
		      case 46: // delete 
			  case 8: // backspace
				  $.datepicker._clearDate(e.target);
			    break; 
			  default: 
				  e.preventDefault(); 
			    break; 
			}
		});
		
		
		
	});