function ajax1()
{
	var request;
	if (window.XMLHttpRequest)
	{
		request = new XMLHttpRequest();
	}
	else
	{
		request = new ActiveXObject('Microsoft.XMLHTTP');
	}

	request.open('GET', 'data.json');

	request.onreadystatechange = function()
	{
		if ((request.readyState === 4) && (request.status === 200))
		{
			var arr = JSON.parse(request.responseText);
			console.log(arr);
		}

	}
	request.send();

	return arr;

}

export default ajax1;