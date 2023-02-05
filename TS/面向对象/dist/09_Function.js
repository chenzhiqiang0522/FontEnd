"use strict";
(function () {
    function A(Firstname, ...Lastname) {
        if (Lastname.length)
            console.log(Firstname + Lastname[0]);
        else
            console.log(Firstname);
    }
    A("Nick");
    A("Nick", "Wiber");
})();
