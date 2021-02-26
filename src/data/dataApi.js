const proxyurl = "https://cors-anywhere.herokuapp.com/";
// let  gifUrl = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling"

export const nearByHospitalUrl = (coords) => {
return (proxyurl + `https://maps.googleapis.com/maps/api/place/nearbysearch/json
?location=${coords.latitude},${coords.longitude}
&radius=1500
&types=hospital
&key=`)
}