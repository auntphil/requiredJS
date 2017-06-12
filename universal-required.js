/****************************
 *Universal Require			*
 *Author: Andrew Hochmuth	*
 *Build: 1.0				*
 *Date: June 12, 2017		*
 ****************************/

var curRadio;
var curCheck;

var checkRequired = [];
var radioRequired = [];

//Runs the onLoad function as soon as the page is loaded. 
window.onload = onLoad;

function getFormValues(formId) {
	if (formId === undefined) {
        var form = document.forms[0];
    }else{
		var form = document.getElementById(formId);//Selects the Form
	}
	
	if(form === null){
		errorMessage = "Cannot submit the form. Problem with the form"
		document.getElementById('error_message').innerHTML = errorMessage;
		document.getElementById('error_message').style.display = "inline";
		return false;
	}

	document.getElementById('error_message').style.display = 'none';
    
	var error = false; //Sets Error to false
	var type = ''; //Sets Error to false
	var length = form.length;
	curRadio = '';
	curCheck = '';
	
	var name;
	var nameLength;
	var nameElements;

	var AlphaNumericError = false;
	var AlphaNumericName = [];
	
	requiredFields = [];
	var requiredFieldsLength = 0;
	checkRequired = [];
	radioRequired = [];
	
	//Loops through each control in the form
    for (var i=0; i<length; i++) {
		form[i].style.outline = 'none';
		
		if(checkAlphaNumeric(form, i)){
			console.log('AlphaNumberic Fail');
			AlphaNumericError = true;
			AlphaNumericName.push(form[i].name);
		}
		
		form[i].style.outline = 'initial';
		
		/*Checks if the control is required*/
		if(hasClass(form[i],'required'))
		{ //The control is required
			/*If Blank*/
			if(form[i].value == "")
			{
				error = true; //Sets error to true
			}
			
			/*If Control is a radio*/
			if(form[i].type == "radio") 
			{ //control is a radio button
				if(checkboxRadio(true,form,i)){
					error = true;
				}
			}//if
			
			
			if(form[i].type == "checkbox") //Checking if the control is a checkbox
			{
				if(checkboxRadio(false,form,i)){
					error=true;
				}
			}//if
		}//if
    }//for
	if(AlphaNumericError){
		errorMessage = "Highlighted Fields Must be Alpha Numberic Only."
		
		document.getElementById('error_message').innerHTML = errorMessage;
		document.getElementById('error_message').style.display = "inline";
		
		for(j=0;j<AlphaNumericName.length;j++){
			AlphaNumericElem = document.getElementsByName(AlphaNumericName[j]);
			for (i = 0; i < AlphaNumericElem.length; i++) {
				AlphaNumericElem[i].style.outline = '2px solid red';
				
			}
		}
		
		return false;
	}
	if(error) //Checks if an error has occured
	{//An error has occurred. 
		errorMessage = "Required Fields are Missing."

		document.getElementById('error_message').innerHTML = errorMessage;
		document.getElementById('error_message').style.display = "inline";
		
		requiredFields = document.querySelectorAll(".required");
		requiredFieldsLength = requiredFields.length;
		
		for (var i=0; i<requiredFieldsLength; i++) { //Loops through each control in the form
			if(requiredFields[i].value == '' || radioRequired.indexOf(requiredFields[i].name) != -1 || checkRequired.indexOf(requiredFields[i].name) != -1)
				requiredFields[i].style.outline = '2px solid red';
		}
		return false; //Stops the form from submitting. 
	}else{
		return true;
	}
}

/*Checking if element has class*/
function hasClass(elem, cls){
	return (' ' + elem.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

/******************************************************
 OnLoad. Grabs the form
******************************************************/
function onLoad(){
	var form = document.forms[0];
	if(form === undefined){
		return;
	}else{
		if(form.getAttribute("onsubmit") == undefined)
			form.setAttribute("onSubmit", "return getFormValues();")
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
	for (var j=0; j<nameLength; j++) {
		if(nameElements[j].checked){
			if(type){
				if(radioRequired.indexOf(nameElements[j].name) != -1){
					temp = radioRequired.indexOf(nameElements[j].name);
					radioRequired.splice(temp,1);
				}
			}else{
				if(checkRequired.indexOf(nameElements[j].name) != -1){
					temp = checkRequired.indexOf(nameElements[j].name);
					checkRequired.splice(temp,1);
				}
			}
			error = false;	//Checked. No Error
			break;			//Break Loop
		}else{
			error = true;	//Not Checked. Error Continue Loop
			if(type){
				console.log('Radio');
				if(radioRequired.indexOf(nameElements[j].name) == -1)
					radioRequired.push(nameElements[j].name);
			}else{
				console.log('Check');
				if(checkRequired.indexOf(nameElements[j].name) == -1)
					checkRequired.push(nameElements[j].name);
			}
		} //if
	}//for
	/*Is there an error*/
	console.log(checkRequired);
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
	if(hasClass(form[i],'AlphaNumeric')){					//Checking for AlphaNumberic Class
		if(!/^[a-zA-Z0-9\s]+$/.test(form[i].value)){	//If the Field has anything other than Alpha Numeric and Space
			if(form[i].value != '')						//Allows for the field to be blank
			{
				type="AlphaNumberic"		//Error Type
				return true;				//Error
			}
		}
	}
	return false;
}

