<h1>Universal Required JS</h1>

<p>The default required fields for forms can be tricky because the new HTML5 forms are not supported by all browsers, looking at you IE! There is also no room for customization. Universal Required JS looks to fix that issue by implementing a simple script to check if required fields are marked and display a message and outline the inputs if they are now.</p>

<i><b>JQuery is not needed. Universal Required JS is pure JavaScript<b/></i>
<h3>Problems with Builtin Form Method</h3>
<ul>
    <li>HTML 5 Required</li>
    <li>HTML required="required"</li>
    <li>No Customization</li>
</ul>
	
<h3>FILES</h3>
<ul>
    <li>universal-required.js<br/>
    	<i>- Does all the calculations</i></li>
    <li>universal-required.css<br/>
    	<i>- Only has one class for red outline</i></li>
    <li>index.html<br/>
    	<i>- Test page to show the script</i></li>
</ul>

<h3>DEFAULT CONFIGURATION</h3>
<b>Required<b>
<ul>
    <li>Inputs need to be part of the 'required' class.</li>
	<li>Form has the id of From1</li>
	<li>onsubmit="return getFormValues();"</li>
</ul>
<b>Results of Requirements failure</b>
<ul>
    <li>Message is displayed above the submit button</li>
	<li>All Required Inputs are outlined in red.</li>
	
<b>Special Characters</b>
<p>You can now filter characters that are not wanted. using the NoSpecialChar class</p>
<ul>
    <li>Characters are removed immediately when they are typed (except Ie, removes on lose focus)</li>
    <li>Characters are Easily Added</li>
</ul>
<b>Results Special Character Failure</b>
<ul>
    <li>The Characer is removed the box</li>
    <li>Other characters are unchanged</li>
</ul>
		
<h3>CUSTIMZATION</h3>
In the early development of the Script there is little easy customization. More will be coming.
	
<h3>INFORMATION</h3>
<b>Radio Buttons</b>
<ul>
	<li>Required class only has to be on one of the radios per group, you can place on all if you would like</li>
    <li>Only the radio with the required class with be outlined<br/>
	    <i>+ May fix this in future versions</i></li>
</ul>
	
