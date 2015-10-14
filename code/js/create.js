$(document).ready(function() {
    // user fills event fields and submits form. On submit we create localdata with event data and return to the main page
    // localData is picked up by the main page and added to the event array
    var numRSVPs = 0;
    var userEmail = "";

    $('#saveEvent').click(function(e) {
        var data;
        var i;
        var eventToEdit = "";
        e.preventDefault();
        
        if (localStorage) {
            if (localStorage.getItem("Flag") != "set") {
                localStorage.set("Flag", "set");
            }
            eventToEdit = localStorage.getItem("edit");
            if (eventToEdit === "" || eventToEdit === null) {
                i = GetMaxRowNum();
                data = $("input[name=eventDate]").val() + "|" +
                        $("input[name=eventTime]").val() + "|" +
                        $("input[name=eventName]").val() + "|" +                        
                        $("input[name=eventLocation]").val() + "|" +
                        $("input[name=eventOrganiser]").val() + "|" +
                        $("input[name=shortDescription]").val() + "|" +
                        $("input[name=eventDesc]").val() + "|0|" + userEmail + "|";
                localStorage.setItem(i, data);
            } else {
                data = $("input[name=eventDate]").val() + "|" +
                        $("input[name=eventTime]").val() + "|" +                
                        $("input[name=eventName]").val() + "|" +
                        $("input[name=eventLocation]").val() + "|" +
                        $("input[name=eventOrganiser]").val() + "|" +
                        $("input[name=shortDescription]").val() + "|" +
                        $("input[name=eventDesc]").val() + "|" + numRSVPs + "|" + userEmail + "|";
                localStorage.removeItem(eventToEdit);
                localStorage.setItem(eventToEdit, data);
                localStorage.removeItem("edit");                
            }
            window.location = "admin.html";
        }
    });

    function showEditOrCreate() {
        var eventToEdit = "";
        if (localStorage) {
            eventToEdit = localStorage.getItem("edit");
            userEmail = sessionStorage.getItem("userEmail");
        }
        if (eventToEdit !== "" && eventToEdit !== null) {
            $("h2").toggleClass("hide");
            var data = localStorage.getItem(eventToEdit);
            // localStorage.removeItem("edit");
            var w = data.split("|");
            $("input[name=eventDate]").val(w[0]);
            $("input[name=eventTime]").val(w[1]);
            $("input[name=eventName]").val(w[2]);
            $("input[name=eventLocation]").val(w[3]);
            $("input[name=eventOrganiser]").val(w[4]);
            $("input[name=shortDescription]").val(w[5]);
            $("input[name=eventDesc]").val(w[6]);
            numRSVPs = w[7];
        }
    };

    showEditOrCreate();
});