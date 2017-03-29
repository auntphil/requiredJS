// JavaScript Document

//Runs the onLoad function as soon as the page is loaded. 
window.onload = onLoad;

function getFormValues() {
	document.getElementById('error_message').style.display = 'none';
    var form = document.getElementById('Form1');//Selects the Form
	var error = false; //Sets Error to false
	var length = form.length;
	var curRadio;
	var curCheck;
    for (var i=0, length; i<length; i++) { //Loops through each control in the form
		if(hasClass(form[i],'required'))//Checking if the control is required
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
			
			
			if(form[i].type == "checkbox") //Checking if the control is a checkbox
			{ //control is a checkbox			
			
				if(curCheck == form[i].name) //Checking if the checkbox has already been checked. 
				{ //Already been checked. Skipping this iteration
					continue;
				}else{ //Not checked before. Adding checkbox to current.
					curCheck = form[i].name;
				}//else
				
				for (var j=0, length; j<length; j++) { //Loops through each control in the form
					if(form[j].type == "checkbox") //Checking if checkbox
					{ //checkbox
						if(form[j].name == curCheck) //Check agains form[i]
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
		}//if
    }//for
	
	if(error) //Checks if an error has occured
	{//An error has occurred. 
		document.getElementById('error_message').style.display = "inline";
		//alert("Error Has Occured"); //Testing. Shows error has occurred
		for (var i=0, length; i<length; i++) { //Loops through each control in the form
			if(hasClass(form[i],"required")) //Checking if the control is required
			{ //The control is required
				if(!hasClass(form[i].value,"require_red"))
				{
					form[i].style.outline = '1px solid red';
				}
			}
		}
		return false; //Stops the form from submitting. 
	}
}

/*Checking if element has class*/
function hasClass(elem, cls)
{
	return (' ' + elem.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

/*All code that needs to run as soon as the page is ready is placed here.*/
function onLoad(){
	var elem, i;
	elem = document.querySelectorAll(".NoSpecialChar"); //Getting the elements by Class
	
	for(i = 0; i < elem.length; i++)//Goes through each element
	{	//Adds the onkeup attribute needed. 
		elem[i].setAttribute("onkeyup","stringTest(this)");
	}
}

/*Checks the string for bad characters*/
function stringTest(elem)
{
	//Bad Characers are searched for
	if(/[<>!$?\\//'"&]/g.test(elem.value))
	{	/*Removes the bad character
		<	>	!	$	?	/	\	'	"	&
		*/
		elem.value = elem.value.replace(/[<>!$?\\//'"&]/g,'');
	}
}