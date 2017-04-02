const uri = 'http://api.openweathermap.org/data/2.5/weather?q='

const city = document.getElementById("city")
const country = document.getElementById("country")

const cityData = []

const description=[]

let show=document.getElementById('display');

let api='17082fe38d74dc55a9ac0a752a687f6d'


fetch(`${uri}+city+country+"&units=metric"+"&APPID"+${api}`)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)
    
    cityData.push(data)


    console.log(data.coord.lat)
console.log(data.coord.lon)
    description.push(data.weather[0])
    console.log(data.main.name);
show.append(cityData);
  })
  .catch((e) => console.log(e, "what's happening dave?"))

  console.log('city data array', cityData)
  console.log('city description array', description)