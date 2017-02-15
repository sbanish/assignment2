function submitFunction()
{
	var favMovie = document.getElementById("txtMovie");
	var favActor = document.getElementById("txtActor");
	var form = document.getElementById("form");
	var show = document.getElementById("show");
	var success = document.getElementById("success");
	
	if (favMovie.value=="" && favActor.value=="")
	{
		show.innerHTML="You left your favorite movie and actor empty";
	}
	else if(favMovie.value=="")
	{
		show.innerHTML="You left your favorite movie empty";
	}
	else if (favActor.value=="")
	{
		show.innerHTML="You left your favorite actor empty";
	}
	else
	{
		show.innerHTML="You have successfully submitted the form!";
		form.style.display="none";
	}
}