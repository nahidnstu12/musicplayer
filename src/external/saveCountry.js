const country_code = localStorage.getItem("(country_code")

const GeoAPI = 'https://freegeoip.app/json/';

const fetchCountry = async () =>{
    const data = await (await fetch(GeoAPI)).json()
    localStorage.setItem("country_code",data.country_code)
    console.log(data)
}
if(!country_code){
    fetchCountry()
}