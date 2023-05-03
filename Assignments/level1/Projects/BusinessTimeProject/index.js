
function showLocation(position){
    let lattitude = position.coords.lattitude;
    let longitude = position.coords.longitude;
    let url = "https://nominatim.openstreetmap.org/reverse?format=jsonv2lat=" + lattitude + "&lon=" + longitude;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let city = data.address.city || data.address.town || data.address.village;
            let state = data.address.state || data.address.province;
            let country = data.address.country;
            document.getElementById("location.text").innerHTML = city + ", " + state + ",  " + country;
        })

        .catch(error => {
            console.log(error);
            document.getElementById("location.text").innerHTML = "Unable to detect your location";
        });
    }

    function showError(error){
        console.log(error);
        document.getElementById("location.text").innerHTML = "Unable to detect your location";
    }

    if (navigation.geolocation){
        navigator.geolocation.getCurrentPosition(showLocation, showError);
        else {
            document.getElementById("location.text").innerHTML = "Geolocation is not supported by this browser";
        }
    }

