$(document).ready(function() {

    $("input:type:submit").submit(jumpToEventList());

    function jumpToEventList() {
        $(location).attr("href", "index.html");
        return false;
    }

    showEventList(events);
});