function ShowPassword()
{
	if(document.getElementById("pass").value!="")
	{
		document.getElementById("pass").type="text";
		document.getElementById("show").style.display="none";
		document.getElementById("hide").style.display="block";
	}
}
 
function HidePassword()
{
	if(document.getElementById("pass").type == "text")
	{
		document.getElementById("pass").type="password"
		document.getElementById("show").style.display="block";
		document.getElementById("hide").style.display="none";
	}
}