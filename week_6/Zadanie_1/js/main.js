(function() {
    if (navigator.geolocation) {

        function getGeoData() {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    let mapButton = document.querySelector("#showLink"),
                        mapLink = `https://www.google.com/maps?cp=${position.coords.latitude}~${position.coords.longitude}`;
                    mapButton.classList.remove("hidden");
                    mapButton.innerHTML = mapLink;
                    mapButton.href = mapLink;
                },
                (errorObj) => {
                    alert("Cannot your location");
                }, {
                    enableHighAccurancy: true
                }
            );
        };

        let findPositionButton = document.querySelector("#findPosition");
        findPositionButton.classList.remove("hidden");
        findPositionButton.onclick = (e) => {
            e.preventDefault();
            getGeoData();
        }
    } else
        alert("Geolocation not supported.");
})();
