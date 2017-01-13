function fecz(url, success, failure) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function() {

        if(xhr.status == 200) {
            success(xhr.responseText);
        } else {
            failure( new Error("Wystąpił błąd!. Kod statusu HTTP to: " + xhr.status) );
        }

    };

    xhr.onerror = function(e) {
        failure( new Error("Wystąpił nieoczekiwany błąd!") );
    };

    xhr.send();

}

(function() {

    var button = document.querySelector("#button"),
        output = document.querySelector("#output");

    button.addEventListener("click", function(e) {

        fecz("https://jsonplaceholder.typicode.com/users", function(data) {

            console.log("Sukces");

            output.textContent = data;

        }, function(err) {

            console.log(err.message);

        });

    }, false);

})();