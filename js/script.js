const setInnerText = (id, value) => {
    const element = document.getElementById(id);
    element.innerText = value;
}

const apiKey = `448dcdf7a1cb30a46c2234cbbec12ca7`;
const loadData = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data))
        .catch(error => console.log(error));
}
const showData = data => {
    setInnerText('temparature', data.main.temp);
    setInnerText('city', data.name);
    setInnerText('condition', data.weather[0].main ? data.weather[0].main : 'N/A');
}
loadData('Dhaka');

// search functional activities
const processSearch = () => {
    const searchInputField = document.getElementById('search-input-field');
    const searchValue = searchInputField.value;
    loadData(searchValue);
}

//search [button]
document.getElementById('btn-search').addEventListener('click', function () {
    processSearch();
});

//search [enter key]
document.getElementById('search-input-field').addEventListener('keyup', function (event) {
    console.log(event.key)
    if (event.key === 'Enter') {
        processSearch();
    }
});


