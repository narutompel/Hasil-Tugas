// const url = { link: `https://covid-193.p.rapidapi.com/statistics?country=` };
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "82a3d09da4msh19c0f34b57d7244p16d24bjsn01c6df371531",
//     "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
//   },
// };

// try {
//   const response = fetch(url.link, options)
//     .then((result) => result.json())
//     .then((data) => {
//       parseData(data);
//     });
// } catch (error) {
//   console.error();
// }

// // parsed Active Cases, New Cases, Recovered Cases, Total Cases, Total Deaths, Total Tests

// function parseData(people) {
//   // console.log(people);
//   const result = people.response.map((aktivitas) => {
//     const parseAktivitas = {
//       ActiveCases: `${aktivitas.cases.active}`,
//       NewCases: `${aktivitas.cases.new}`,
//       RecoveredCases: `${aktivitas.cases.recovered}`,
//       TotalCases: `${aktivitas.cases.total}`,
//       totalDeaths: `${aktivitas.deaths.total}`,
//       TotalTests: `${aktivitas.tests.total}`,
//     };
//     return parseAktivitas;
//   });
//   console.log(result);
// }

// // // ...
// // function parseData(people) {
// //   const result = people.response[0]; // Ambil data dari respons API (asumsi respons berupa array)
  
// //   // Update elemen HTML dengan ID yang sesuai dengan data yang diambil
// //   document.getElementById("outputActive").textContent = result.cases.active;
// //   document.getElementById("outputNew").textContent = result.cases.new;
// //   document.getElementById("outputRecovered").textContent = result.cases.recovered;
// //   document.getElementById("outputCases").textContent = result.cases.total;
// //   document.getElementById("outputDeath").textContent = result.deaths.total;
// //   document.getElementById("outputTest").textContent = result.tests.total;
// // }
// // // ...



// // function tampilkanData() {
// //   const inputDataElement = document.getElementById("inputData");
// //   const inputData = inputDataElement.value;
// //   const app =
// //     (url.link = `https://covid-193.p.rapidapi.com/statistics?country=${inputData}`);
// //   console.log(app);
// //   return app;
// // }
// // const cariButton = document.getElementById("cariButton");
// // cariButton.addEventListener("click", tampilkanData);

// function tampilkanData() {
//   const inputDataElement = document.getElementById("inputData");
//   const inputData = inputDataElement.value;
//   const apiUrl = `https://covid-193.p.rapidapi.com/statistics?country=${inputData}`;
  
//   fetch(apiUrl, options)
//     .then((response) => response.json())
//     .then((data) => {
//       parseData(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
// const cariButton = document.getElementById("cariButton");
// cariButton.addEventListener("click", tampilkanData);


// // function tampilkanData() {
// //   const inputDataElement = document.getElementById("inputData");
// //   const inputData = inputDataElement.value;
// //   url.link = `https://covid-193.p.rapidapi.com/statistics?country=${inputData}`;
// //   console.log(`https://covid-193.p.rapidapi.com/statistics?country=${inputData}`);
// // }

// // function findCountry(country) {
// //     var name = document.getElementById("nama").value;
// // }



const url = { link: `https://covid-193.p.rapidapi.com/statistics?country=` };
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "82a3d09da4msh19c0f34b57d7244p16d24bjsn01c6df371531",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

// Function to fetch and display data
function fetchDataAndDisplay(country) {
  const apiUrl = `https://covid-193.p.rapidapi.com/statistics?country=${country}`;

  fetch(apiUrl, options)
    .then((response) => response.json())
    .then((data) => {
      parseData(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function to parse and display data
function parseData(data) {
  const result = data.response[0]; // Assuming the response is an array

  // Update the HTML elements with the data
  document.getElementById("outputActive").textContent = result.cases.active;
  document.getElementById("outputNew").textContent = result.cases.new;
  document.getElementById("outputRecovered").textContent = result.cases.recovered;
  document.getElementById("outputCases").textContent = result.cases.total;
  document.getElementById("outputDeath").textContent = result.deaths.total;
  document.getElementById("outputTest").textContent = result.tests.total;
}

// Event listener for the "Cari" (Search) button
const cariButton = document.getElementById("cariButton");
cariButton.addEventListener("click", () => {
  const inputDataElement = document.getElementById("inputData");
  const inputData = inputDataElement.value;

  // Call the function to fetch and display data
  fetchDataAndDisplay(inputData);
});
