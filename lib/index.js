import http from 'http';
import axios from 'axios';

http.createServer(async(req, res) => {
	res.writeHead(200, { 
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	});
	
	const response = await axios({
		method: 'get',
		url: `http://rm.pixel.alx${req.url}`,
		headers: {
			'X-Redmine-API-Key': '78ceb44a9628fd43baf65d108ea063b61fe152ba',
			'Content-Type': 'application/json'
		}
	});
	
	res.end(JSON.stringify(response.data));
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');




