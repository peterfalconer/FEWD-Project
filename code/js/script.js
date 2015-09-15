$(document).ready(function() {
    var events = [["30 Sept 2015","Rally","Melbourne Fed Square","ACF"],
                    ["3 Oct 2015","Protest Dinner","The Press Club","Joe Anderson"],
                    ["20 Oct 2015","Rally","Melbourne Fed Square","ACF"],
                    ["30 Oct 2015","Poetry Reading","Cafe Climate","Hilary Bentley"],
                    ["23 Nov 2015","Public Meeting","Melbourne Town Hall","ACF"]]

    function ShowEventList(eventList) {
        var listItem = "";
        for (i=0;i<eventList.length;i++) {
            listItem = listItem + "<ul class=\"event-detail\">" +
                    "<li class=\"horizontal-list\">" + eventList[i][0] + "</li>" +
                    "<li class=\"horizontal-list\">" + eventList[i][1] + "</li>" +
                    "<li class=\"horizontal-list\">" + eventList[i][2] + "</li>" +
                    "<li class=\"horizontal-list\">" + eventList[i][3] + "</li>" +
                "</ul>"
            $(".event-list").html(listItem);
        }
    }

    ShowEventList(events);
});