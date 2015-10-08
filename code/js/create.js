$(document).ready(function() {
    // user fills event fields and submits form. On submit we create localdata with event data and return to the main page
    // localData is picked up by the main page and added to the event array
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
                        $("input[name=eventName]").val() + "|" +
                        $("input[name=eventLocation]").val() + "|" +
                        $("input[name=eventOrganiser]").val() + "|" +
                        $("input[name=eventDesc]").val() + "|";
                localStorage.setItem(i, data);
                window.location = "index.html";
            } else {
                
            }
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

    function showEditOrCreate() {
        var eventToEdit = "";
        if (localStorage) {
            eventToEdit = localStorage.getItem("edit");
        }
        // localStorage.removeItem("edit");
        if (eventToEdit !== "" && eventToEdit !== null) {
            $("h2").toggleClass("hide");
            var data = localStorage.getItem(eventToEdit);
            var w = data.split("|");
            $("input[name=eventDate]").val(w[0]);
            $("input[name=eventName]").val(w[1]);
            $("input[name=eventLocation]").val(w[2]);
            $("input[name=eventOrganiser]").val(w[3]);
            $("input[name=eventDesc]").val(w[4]);
        } else {

        }
    };

    showEditOrCreate();
});