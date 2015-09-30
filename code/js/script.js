$(document).ready(function() {
    var events = [["30 Sept 2015","Rally","Melbourne Fed Square","ACF", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. <b>Lorem</b> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. <b>Nulla</b> Praesent mauris. Fusce <b>sem</b> nec tellus <b>sagittis</b> sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <b>lacinia</b> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <b>conubia</b> libero. Sed dignissim <b>nostra,</b> lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem <b>lacinia</b> at dolor. Maecenas <b>Pellentesque</b> mattis. Sed convallis tristique <i>libero.</i> sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>egestas</b> luctu.</p>"],
                    ["3 Oct 2015","Protest Dinner","The Press Club","Joe Anderson", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. <b>Lorem</b> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. <b>Nulla</b> Praesent mauris. Fusce <b>sem</b> nec tellus <b>sagittis</b> sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <b>lacinia</b> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <b>conubia</b> libero. Sed dignissim <b>nostra,</b> lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem <b>lacinia</b> at dolor. Maecenas <b>Pellentesque</b> mattis. Sed convallis tristique <i>libero.</i> sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>egestas</b> luctu.</p>"],
                    ["20 Oct 2015","Rally","Melbourne Fed Square","ACF", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. <b>Lorem</b> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. <b>Nulla</b> Praesent mauris. Fusce <b>sem</b> nec tellus <b>sagittis</b> sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <b>lacinia</b> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <b>conubia</b> libero. Sed dignissim <b>nostra,</b> lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem <b>lacinia</b> at dolor. Maecenas <b>Pellentesque</b> mattis. Sed convallis tristique <i>libero.</i> sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>egestas</b> luctu.</p>"],
                    ["30 Oct 2015","Poetry Reading","Cafe Climate","Hilary Bentley", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. <b>Lorem</b> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. <b>Nulla</b> Praesent mauris. Fusce <b>sem</b> nec tellus <b>sagittis</b> sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <b>lacinia</b> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <b>conubia</b> libero. Sed dignissim <b>nostra,</b> lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem <b>lacinia</b> at dolor. Maecenas <b>Pellentesque</b> mattis. Sed convallis tristique <i>libero.</i> sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>egestas</b> luctu.</p>"],
                    ["23 Nov 2015","Public Meeting","Melbourne Town Hall","ACF", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. <b>Lorem</b> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. <b>Nulla</b> Praesent mauris. Fusce <b>sem</b> nec tellus <b>sagittis</b> sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <b>lacinia</b> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <b>conubia</b> libero. Sed dignissim <b>nostra,</b> lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem <b>lacinia</b> at dolor. Maecenas <b>Pellentesque</b> mattis. Sed convallis tristique <i>libero.</i> sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>egestas</b> luctu.</p>"]]

    $(".showEvent").click(jumpToShowEvent);

    $(".extraInfo").click(showExtraInfo);
    
    function showEventList(eventList) {
        var listItem = "";
        for (i=0;i<eventList.length;i++) {
            listItem = listItem + "<ul class=\"event-detail\">" +
                    "<li class=\"horizontal-list\">" + eventList[i][0] + "</li>" +
                    "<li class=\"horizontal-list\"><a class=\"showEvent\" href=\"create.html\">" + eventList[i][1] + "</a></li>" +
                    "<li class=\"horizontal-list\">" + eventList[i][2] + "</li>" +
                    "<li class=\"horizontal-list\">" + eventList[i][3] + "</li>" +
                    "<li class=\"horizontal-list\" id=\"more" + i + "\">more</li>" +
                "</ul><div class= \"extraInfo\"><div id=\"" + i + "\">" + eventList[i][4] + "</div></div>"
            $(".event-list").html(listItem);
        }
    }

    function jumpToShowEvent() {        
        $(".create").removeClass("show");
        $(".create").addClass("hide");
        $(".edit").removeClass("hide");
        $(".edit").removeClass("show");
        return true;
    }

    function showExtraInfo () {
        var rowId;
        rowId = "#" + this.id;
        $(rowID).toggleClass("extra");
    }

    showEventList(events);
});