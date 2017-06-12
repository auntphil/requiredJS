// JavaScript Document

//Runs the onLoad function as soon as the page is loaded. 
window.onload = onLoad;
var curRadio;
var curCheck;

function getFormValues(formId) {

	document.getElementById('error_message').style.display = 'none';
    var form = document.getElementById(formId);//Selects the Form
	var error = false; //Sets Error to false
	var type = ''; //Sets Error to false
	var length = form.length;
	curRadio = '';
	curCheck = '';
	
	var name;
	var nameLength;
	var nameElements;
	
	var required = [];
	
	//Loops through each control in the form
    for (var i=0, length; i<length; i++) {
		//checkAlphaNumeric(form, i);
		
		form[i].style.outline = 'initial';
		
		/*Checks if the control is required*/
		if(hasClass(form[i],'required'))
		{ //The control is required
			/*If Blank*/
			if(form[i].value == "")
			{
				error = true; //Sets error to true
				break; //Breaks out of the loop. There is no reason to search for more errors. 
			}
			
			/*If Control is a radio*/
			if(form[i].type == "radio") 
			{ //control is a radio button
				if(checkboxRadio(true,form,i)){
					error = true;
					break;
				}
			}//if
			
			
			if(form[i].type == "checkbox") //Checking if the control is a checkbox
			{
				if(checkboxRadio(false,form,i)){
					error=true;
					break;
				}
			}//if
		}//if
    }//for
	
	if(error) //Checks if an error has occured
	{//An error has occurred. 
		switch(type){
			case 'AlphaNumberic':
				errorClass = "AlphaNumb";
				errorMessage = "Field can only be Letters or Numbers"
				break;
			default:
				errorClass = "required";
				errorMessage = "Required Fields are Missing."
				break;
		}
		document.getElementById('error_message').innerHTML = errorMessage;
		document.getElementById('error_message').style.display = "inline";
		
		for (var i=0, length; i<length; i++) { //Loops through each control in the form
			if(hasClass(form[i],errorClass)) //Checking if the control is required
			{ //The control is required
				if(!hasClass(form[i].value,"require_red"))
				{
					form[i].style.outline = '1px solid red';
				}
			}
		}
		return false; //Stops the form from submitting. 
	}else{
		return true;
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

/******************************************************
 Checking if the Checkbox OR Radio is Checked and Required
******************************************************/
function checkboxRadio(type,form,i){
	/*Checking if the Radio Group has been checked before*/
	if(curRadio == form[i].name || curCheck == form[i].name){
		return false;	//The Group of Radio Buttons has already been checked. This iteration can be skipped.
	}else{
		if(type){
			curRadio = form[i].name;						//Getting the Name of the current Radio Button
			name = curRadio;								//Setting the name as the same as the curRadio	
		}else{
			curCheck = form[i].name;						//Getting the Name of the current Radio Button
			name = curCheck;								//Setting the name as the same as the curRadio	
		}
		nameElements = document.getElementsByName(name);	//Getting a list of all elements with the same name
		nameLength = nameElements.length;					//Getting the length of the list
	}//else
	
	/*Loops through each radio button in this group*/
	for (var j=0, nameLength; j<nameLength; j++) {
		if(nameElements[j].checked){
			error = false;	//Checked. No Error
			break;			//Break Loop
		}else{
			error = true;	//Not Checked. Error Continue Loop
		} //if
	}//for
	/*Is there an error*/
	if(error)
		return true;
	else
		return false;
}
/******************************************************
 Checking if the Input is Alpha Numeric Only
******************************************************/
function checkAlphaNumeric(form, i){
	/*******************************************
	 *Checking if a field is Number or Letter Only
	 *******************************************/	
	if(hasClass(form[i],'AlphaNumb')){					//Checking for AlphaNumberic Class
		if(!/^[a-zA-Z0-9\s]+$/.test(form[i].value)){	//If the Field has anything other than Alpha Numeric and Space
			if(form[i].value != '')						//Allows for the field to be blank
			{
				type="AlphaNumberic"		//Error Type
				error=true;					//Error
				break;						//Ends Loop
			}
		}
	}
}

