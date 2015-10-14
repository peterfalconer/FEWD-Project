$(document).ready(function() {
// If user is not signed in, only show the advice span, sign-in and create account buttons
//Otherwise just show the create and edit buttons
//User is signed in if localStorage has a userid item with username value.
//
   var userID = "";
   var isSignedIn = false

    function checkUserSignedIn() {
        userID = sessionStorage.getItem("userEmail");
        if (userID !== "" && userID !== null) {
            return true;
        } else {
            return false;
        }
    }

    function showAvailableActions() {
        if (isSignedIn === true) {
            $(".auth-info").toggleClass("hide");
            showUserOwnedEvents(userID);
        } else {
            $(".event-btn").toggleClass("hide");
        }
    }

    function showUserOwnedEvents(userID) {
        var data;
        var i = 0;
        var w;
        var listItems = "";
        if (localStorage) {
            data = localStorage.getItem(i.toString());
            while (data !== null) {
                w = data.split("|");
                if (w[8] === userID) {
                    listItems = addEventToList(data, i, listItems);
                    $(".event-list").html(listItems);
                }
                i++;
                data = localStorage.getItem(i.toString());
            }
        }
    }

    isSignedIn = checkUserSignedIn();
    showAvailableActions();    
});