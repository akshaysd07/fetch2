const api= "https://thatcopy.pw/catapi/rest/";
fetch(api)
.then(response=>response.json())
.then(jsonData=>console.log(jsonData))
catch{error=>console.log("Error in fetch:" +error)}
