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
        var i = 0;
        if (localStorage) {
            var data = localStorage.getItem(i.toString());
            while (data !== null) {
                var w = data.split("|");
                listItem = listItem + "<ul class=\"event-detail\">" +
                        "<li class=\"horizontal-list\">" + w[0] + "</li>" +
                        "<li class=\"horizontal-list\"><a class=\"showEvent\" href=\"create.html\">" + w[1] + "</a></li>" +
                        "<li class=\"horizontal-list\">" + w[2] + "</li>" +
                        "<li class=\"horizontal-list\">" + w[3] + "</li>" +
                        "<li class=\"horizontal-list\"><button id=\"more" + i + "\">more</button></li>" +
                        "</ul><div class= \"extraInfo\"><div id=\"extraInfo" + i + "\">" + w[4] + "</div></div>";

                    $(".event-list").html(listItem);
                    // console.log("Adding more" + i  + " click function");             
                   
                    // console.log( $("#more" + i));

                    //  $("#more" + i).click(function(e){
                    //     console.log("more");
                    // });

                    console.log("#more" + i);
                i++;
                data = localStorage.getItem(i.toString());
            }
            for (var j = 0; j < i; j++) {
                console.log("Adding more" + j  + " click function");

                $("#more" + j).click(function(e){
                    console.log("more");
                    // $(e.currentTarget.parentNode).after();
                });
            }
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

    //  load localStorage with events from array if there are none in localStorage
    function loadLocalStorage(eventList) {
        var data;
        if (localStorage) {
            if (localStorage.getItem("Flag") != "set") {
                localStorage.setItem("Flag", "set");
                for (var i = eventList.length - 1 ; i >= 0; i--) {
                    data = "";
                    for (var j = 0; j < 5; j++) {
                        data = data + eventList[i][j] + "|";               
                    }
                    localStorage.setItem(i, data);
                }
            }
        }
    }
    

    loadLocalStorage(events);
    showEventList(events);
});