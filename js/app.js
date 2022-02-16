let fetchInfo = fetch('https://v3.football.api-sports.io/status')
  .then(response => response.json())
  .then(json => {
	console.log(json);
  });

// let request = new XMLHttpRequest();
// request.open('get', '"https://v3.football.api-sports.io/status"');
// request.setRequestHeader('Content-type', 'application/json, charset=UTF-8');
// request.send();

// request.addEventListener('readystatechange', ()=> {
// 	if(request.readyState === 4 && request.status === 200) {
// 		console.log(JSON.parse(request.response));
// 	}
// });
