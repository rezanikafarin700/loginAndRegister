function ajax2(path)
{

	var request;
	var arr;

	if (window.XMLHttpRequest)
	{
		request = new XMLHttpRequest();
	}
	else
	{
		request = new ActiveXObject('Microsoft.XMLHTTP');
	}

	request.open('GET', path)

	request.onreadystatechange = function()
	{
		if (request.readyState === 4 && request.status === 200)
		{
			arr = JSON.parse(request.responseText);
			console.log(request);
		}
	}

	request.send();
	return arr;
}

export default ajex2;