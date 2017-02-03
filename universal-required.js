// JavaScript Document

function getFormValues() {
	document.getElementById('error_message').style.display = 'none';
    var form = document.getElementById('Form1');//Selects the Form
	var error = false; //Sets Error to false
	var length = form.length;
	var curRadio;
    for (var i=0, length; i<length; i++) { //Loops through each control in the form
		if(form[i].className == "required" || form[i].className == "required require_red") //Checking if the control is required
		{ //The control is required
			if(form[i].value == "") //Checking if the control value is blank
			{ //Control value is blank and required
				error = true; //Sets error to true
				break; //Breaks out of the loop. There is no reason to search for more errors. 
			}
			
			if(form[i].type == "radio") //Checking if the control is a radio button
			{ //control is a radio button
			
				if(curRadio == form[i].name) //Checking if the radio has already been checked. 
				{ //Already been checked. Skipping this iteration
					continue;
				}else{ //Not checked before. Adding radio to current.
					curRadio = form[i].name;
				}//else
				
				for (var j=0, length; j<length; j++) { //Loops through each control in the form
					if(form[j].type == "radio") //Checking if radio
					{ //Radio
						if(form[j].name == curRadio) //Check agains form[i]
						{
							if(form[j].checked)
							{
								error = false;
								break;
							}else{
								error = true;
							} //if
						}//if
					}//if
				}//for
				if(error == true)
					break;
			}//if
			if(form[i].type == "checkbox" && !form[i].checked) //Checking if the control is a radio button
			{ //control is a radio button
					error = true;
					break;
			}//if
		}//if
    }//for
	
	if(error) //Checks if an error has occured
	{//An error has occurred. 
		document.getElementById('error_message').style.display = "inline";
		//alert("Error Has Occured"); //Testing. Shows error has occurred
		for (var i=0, length; i<length; i++) { //Loops through each control in the form
			if(form[i].className == "required") //Checking if the control is required
			{ //The control is required
				form[i].className += " require_red";
			}
		}
		return false; //Stops the form from submitting. 
	}
}