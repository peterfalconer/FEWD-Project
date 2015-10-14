$(document).ready(function() {
// Use sessionStorage for user signin to allow multiple easily-distinguishable signins
    $('#sign-in').click(function(e) {
        e.preventDefault();
        $(".advice").removeClass("red-text");
        $(".advice").addClass("hide");
        var userEmail = $("input[name=userEmail]").val();
        var password = $("input[name=password]").val();
        var contin = true;
        if (userEmail === "" || userEmail === null) {
            $("input[name=userEmail]").toggleClass("error-border");
            contin = false;
        }
        if ( password === "" || password === null) {
            $("input[name=password]").toggleClass("error-border");
            contin = false;
        } 
        if (contin === true) {
            sessionStorage.setItem("userEmail", userEmail);
            window.location = "admin.html";    
        } else  {
            $(".advice").toggleClass("hide red-text");
        }
    });
});