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
                data = $("input[name=eventDate]").val() + "|" +
                        $("input[name=eventTime]").val() + "|" +
                        $("input[name=eventName]").val() + "|" +
                        $("input[name=eventLocation]").val() + "|" +
                        $("input[name=eventOrganiser]").val() + "|" +
                        $("input[name=shortDescription]").val() + "|" +
                        $("input[name=eventDesc]").val() + "|" + ++NumRegistered + "|";
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
            $("input[name=eventDate]").val(w[0]);
            $("input[name=eventTime]").val(w[1]);
            $("input[name=eventName]").val(w[2]);
            $("input[name=eventLocation]").val(w[3]);
            $("input[name=eventOrganiser]").val(w[4]);
            $("input[name=shortDescription]").val(w[5]);
            $("input[name=eventDesc]").val(w[6]);
            NumRegistered = w[7];
        }
    };

    showRsvpEvent();
});