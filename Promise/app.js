const countries = [
    { id:1, name:'Türkiye' },
    { id:2, name:'Italy' },
    { id:3, name:'USA' }
];

const cities = [
    {id:1, countryId: 1, name: 'Adana' },
    {id:34, countryId:1, name: 'İstanbul'},
    {id:100, countryId:3, name:'New York'}
];

const getCountries = () => {
    return new Promise((resolve, reject) => {
        resolve(countries);
    })
}

const getCities = (countryId) => {
    return new Promise((resolve, reject) => {
        var result = cities.filter(x => x.countryId == countryId);
        resolve(result);
    });
}

getCountries().then( (data) => {
    const countryId = data[0].id;

    getCities(countryId).then( (city) => {
        console.log(city);
    })
});