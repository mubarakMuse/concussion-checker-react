const proxyurl = "https://cors-anywhere.herokuapp.com/";
// let  gifUrl = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=M3erJ2EvHLhoSNjZQFOuUa5w9CQDXRhB&limit=5"

export const nearByHospitalUrl = (coords) => {
return (proxyurl + `https://maps.googleapis.com/maps/api/place/nearbysearch/json
?location=${coords.latitude},${coords.longitude}
&radius=1500
&types=hospital
&key=AIzaSyAWbscDIvvENp5nKXUrXmq31UcC6QE0mdU`)
}