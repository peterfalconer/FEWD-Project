$(document).ready(function() {
    // user fills event fields and submits form. On submit we create localdata with event data and return to the main page
    // localData is picked up by the main page and added to the event array
    $('#saveEvent').click(function(e) {
        var data;
        var i;
        e.preventDefault();
        
        if (localStorage) {
            if (localStorage.getItem("Flag") != "set") {
                localStorage.set("Flag", "set");
            }
            i = GetMaxRowNum();
            data = $("input[name=eventDate]").val() + "|" +
                    $("input[name=eventName]").val() + "|" +
                    $("input[name=eventLocation]").val() + "|" +
                    $("input[name=eventOrganiser]").val() + "|" +
                    $("input[name=eventDesc]").val() + "|";
            localStorage.setItem(i, data);
            window.location = "index.html";
        }
    });

    function GetMaxRowNum() {
        var i = -1;
        var data = "";
        while (data !== null) {
            i++;
            data = localStorage.getItem(i.toString());
        }
        return i;
    }

});