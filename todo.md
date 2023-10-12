1. udah buat card
2. bikin posisinya ke tengah
3. kasi margin sama padding
4. merubah warna background
5. posisikan card kesamping
6. lalu buat button input dan text input

const url = 'https://covid-193.p.rapidapi.com/statistics?country=usa';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '82a3d09da4msh19c0f34b57d7244p16d24bjsn01c6df371531',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

try {
	const response = fetch(url, options).then((result) => result.json()).then((data) => {console.log(data)})

	console.log(result);
} catch (error) {
	console.error(error);
}