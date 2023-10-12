

const url = {link : `https://covid-193.p.rapidapi.com/statistics?country=`};
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "82a3d09da4msh19c0f34b57d7244p16d24bjsn01c6df371531",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

try {
  const response = fetch(url.link, options)
    .then((result) => result.json())
    .then((data) => {
      parseData(data);
    });
} catch (error) {
  console.error();
}

// parsed Active Cases, New Cases, Recovered Cases, Total Cases, Total Deaths, Total Tests

function parseData(people) {
    // console.log(people);
  const result = people.response.map((aktivitas) => {
    const parseAktivitas = {
      ActiveCases: `${aktivitas.cases.active}`,
      NewCases: `${aktivitas.cases.new}`,
      RecoveredCases:`${aktivitas.cases.recovered}`,
      TotalCases: `${aktivitas.cases.total}`,
      totalDeaths: `${aktivitas.deaths.total}`,
      TotalTests: `${aktivitas.tests.total}`,
    };
    return parseAktivitas
  })
  console.log(result)
}


function tampilkanData() {
  const inputDataElement = document.getElementById("inputData");
  const inputData = inputDataElement.value;
  url.link = `https://covid-193.p.rapidapi.com/statistics?country=${inputData}`
}

// function findCountry(country) {
//     var name = document.getElementById("nama").value;
// }
