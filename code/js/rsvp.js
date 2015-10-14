$(document).ready(function() {
    // user fills event fields and submits form. On submit we create localdata with event data and return to the main page
    // localData is picked up by the main page and added to the event array
    var NumRegistered = 0;
    $('#saveRegistration').click(function(e) {
        var data;
        var i;
        var eventToEdit = "";
        e.preventDefault();
        
        if (localStorage) {
            if (localStorage.getItem("Flag") != "set") {
                localStorage.set("Flag", "set");
            }
            eventToEdit = localStorage.getItem("rsvp");
            if (eventToEdit !== "" && eventToEdit !== null) {
                ++NumRegistered;
                data = localStorage.getItem(eventToEdit);
                var w = data.split("|");
                data = w[0] + "|" +
                        w[1] + "|" +
                        w[2] + "|" +
                        w[3] + "|" +
                        w[4] + "|" +
                        w[5] + "|" +
                        w[6] + "|" +
                        NumRegistered + "|" +
                        w[8] + "|";
                localStorage.removeItem(eventToEdit);
                localStorage.setItem(eventToEdit, data);
                localStorage.removeItem("rsvp");
                window.location = "index.html";
            }
        }
    });

    function showRsvpEvent() {
        var eventToEdit = "";
        if (localStorage) {
            eventToEdit = localStorage.getItem("rsvp");
        }
        if (eventToEdit !== "" && eventToEdit !== null) {
            var data = localStorage.getItem(eventToEdit);
            var w = data.split("|");
            var s = "<p>What: " + w[2] + " at " + w[3] + "<br/>" +
                        "When: " + w[1] + " on " + w[0] + "<br/>" +
                        "Organised by " + w[4] + "<br/>" +
                        w[5] + "<br/><br/>" + w[6] + "</p>";
            $("#eventInfo").html(s);
            NumRegistered = w[7];
        }
    }

    showRsvpEvent();
});