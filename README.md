Universal Required JS

The default required fields for forms can be tricky because the new HTML5 forms are not supported by all browsers, looking at you IE! There is also no room for customization. Universal Required JS looks to fix that issue by implementing a simple script to check if required fields are marked and display a message and outline the inputs if they are now.

JQuery is not needed. Universal Required JS is pure JavaScript

Problems with Builtin Form Method
	- HTML 5 Required
	- HTML required="required"
	- No Customization
	
FILES
	universal-required.js
		-Does all the calculations
	universal-required.css
		-Only has one class for red outline
	index.html
		-Test page to show the script
	
DEFAULT CONFIGURATION
	Required
		-Inputs need to be part of the 'required' class.
		-Form has the id of From1
		-onsubmit="return getFormValues();"
	
	Results of Requirements failure
		-Message is displayed above the submit button
		-All Required Inputs are outlined in red.
		
CUSTIMZATION
	In the early development of the Script there is little easy customization. More will be coming.
	
INFORMATION
	Radio Buttons
		-Required class only has to be on one of the radios per group, you can place on all if you would like. 
		-Only the radio with the required class with be outlined
			+May fix this in future versions
			
	
