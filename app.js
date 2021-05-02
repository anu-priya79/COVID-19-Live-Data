const button = document.querySelector('button');
const form = document.querySelector('#searchForm')

const newTotalWorld = document.querySelector('#newTotalWorld');
const newDeathsWorld = document.querySelector('#newDeathsWorld');
const newRecovered = document.querySelector('#newRecoveredWorld');
const totalWorld = document.querySelector('#totalWorld');
const deathsWorld = document.querySelector('#deathsWorld');
const totalRecovered = document.querySelector('#recoveredWorld');

const newTotalIndia = document.querySelector('#newTotalIndia');
const newDeathsIndia = document.querySelector('#newDeathsIndia');
const newRecoveredIndia = document.querySelector('#newRecoveredIndia');
const totalIndia = document.querySelector('#totalIndia');
const deathsIndia = document.querySelector('#deathsIndia');
const totalRecoveredIndia = document.querySelector('#recoveredIndia');


form.addEventListener('submit', async function (e) {
    e.preventDefault();
    newTotalWorld.textContent = '';
    newDeathsWorld.textContent = '';
    newRecovered.textContent = '';
    totalWorld.textContent = '';
    deathsWorld.textContent = '';
    totalRecovered.textContent = '';

    newTotalIndia.textContent = '';
    newDeathsIndia.textContent = '';
    newRecoveredIndia.textContent = '';
    totalIndia.textContent = '';
    deathsIndia.textContent = '';
    totalRecoveredIndia.textContent = '';
    globalData();
    indiaData();
})

async function globalData() {
    const res = await axios.get('https://api.covid19api.com/summary');
    const globalNewConfirmed = res.data.Global.NewConfirmed;
    const globalNewDeaths = res.data.Global.NewDeaths;
    const globalNewRecovered = res.data.Global.NewRecovered;
    const globalTotalConfirmed = res.data.Global.TotalConfirmed;
    const globalTotalDeaths = res.data.Global.TotalDeaths;
    const globalTotalRecovered = res.data.Global.TotalRecovered;
    newTotalWorld.textContent = globalNewConfirmed;
    newDeathsWorld.textContent = globalNewDeaths;
    newRecovered.textContent = globalNewRecovered;
    totalWorld.textContent = globalTotalConfirmed;
    deathsWorld.textContent = globalTotalDeaths;
    totalRecovered.textContent = globalTotalRecovered;
}

async function indiaData() {
    const res = await axios.get('https://api.covid19api.com/summary');
    const indiaNewConfirmed = res.data.Countries[76].NewConfirmed;
    const indiaNewDeaths = res.data.Countries[76].NewDeaths;
    const indiaNewRecovered = res.data.Countries[76].NewRecovered;
    const indiaTotalConfirmed = res.data.Countries[76].TotalConfirmed;
    const indiaTotalDeaths = res.data.Countries[76].TotalDeaths;
    const indiaTotalRecovered = res.data.Countries[76].TotalRecovered;
    newTotalIndia.textContent = indiaNewConfirmed;
    newDeathsIndia.textContent = indiaNewDeaths;
    newRecoveredIndia.textContent = indiaNewRecovered;
    totalIndia.textContent = indiaTotalConfirmed;
    deathsIndia.textContent = indiaTotalDeaths;
    totalRecoveredIndia.textContent = indiaTotalRecovered;
}

globalData();
indiaData();