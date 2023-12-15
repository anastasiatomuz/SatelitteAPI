async function getLoc(){
    const response = 
    await fetch("https://api.wheretheiss.at/v1/satellites/25544")
    const data = await response.json();
    const {latitude, longitude, velocity} = data;

    
    console.log(latitude);
    console.log(longitude);
    console.log(velocity)
    document.getElementById('lat').innerHTML = latitude;
    document.getElementById('lon').innerHTML = longitude;
    document.getElementById('vel').innerHTML = velocity;

    //updates content every second 
    //credit: https://stackoverflow.com/questions/32913226/auto-refresh-page-every-30-seconds
    window.setTimeout( function() {
        window.location.reload();
      }, 1000);
}

getLoc();