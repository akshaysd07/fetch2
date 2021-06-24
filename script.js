const api= "https://aws.random.cat/meow";
fetch(api)
.then(response=>response.json())
//.then(jsonData=>console.log(jsonData))  ---choose from cosnole what to display

.then(jsonData=>display(jsonData))
.catch(error=>console.log("Error in fetch:" +error))

var display=(data)=>{
    document.getElementById('img').src=data.file;
}
