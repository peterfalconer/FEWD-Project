$(document).ready(function() {
    var events = [["30 Sept 2015","Rally","Melbourne Fed Square","ACF", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. <b>Lorem</b> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. <b>Nulla</b> Praesent mauris. Fusce <b>sem</b> nec tellus <b>sagittis</b> sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <b>lacinia</b> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <b>conubia</b> libero. Sed dignissim <b>nostra,</b> lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem <b>lacinia</b> at dolor. Maecenas <b>Pellentesque</b> mattis. Sed convallis tristique <i>libero.</i> sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>egestas</b> luctu.</p>"],
                    ["3 Oct 2015","Protest Dinner","The Press Club","Joe Anderson", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. <b>Lorem</b> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. <b>Nulla</b> Praesent mauris. Fusce <b>sem</b> nec tellus <b>sagittis</b> sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <b>lacinia</b> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <b>conubia</b> libero. Sed dignissim <b>nostra,</b> lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem <b>lacinia</b> at dolor. Maecenas <b>Pellentesque</b> mattis. Sed convallis tristique <i>libero.</i> sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>egestas</b> luctu.</p>"],
                    ["20 Oct 2015","Rally","Melbourne Fed Square","ACF", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. <b>Lorem</b> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. <b>Nulla</b> Praesent mauris. Fusce <b>sem</b> nec tellus <b>sagittis</b> sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <b>lacinia</b> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <b>conubia</b> libero. Sed dignissim <b>nostra,</b> lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem <b>lacinia</b> at dolor. Maecenas <b>Pellentesque</b> mattis. Sed convallis tristique <i>libero.</i> sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>egestas</b> luctu.</p>"],
                    ["30 Oct 2015","Poetry Reading","Cafe Climate","Hilary Bentley", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. <b>Lorem</b> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. <b>Nulla</b> Praesent mauris. Fusce <b>sem</b> nec tellus <b>sagittis</b> sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <b>lacinia</b> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <b>conubia</b> libero. Sed dignissim <b>nostra,</b> lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem <b>lacinia</b> at dolor. Maecenas <b>Pellentesque</b> mattis. Sed convallis tristique <i>libero.</i> sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>egestas</b> luctu.</p>"],
                    ["23 Nov 2015","Public Meeting","Melbourne Town Hall","ACF", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. <b>Lorem</b> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. <b>Nulla</b> Praesent mauris. Fusce <b>sem</b> nec tellus <b>sagittis</b> sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <b>lacinia</b> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <b>conubia</b> libero. Sed dignissim <b>nostra,</b> lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem <b>lacinia</b> at dolor. Maecenas <b>Pellentesque</b> mattis. Sed convallis tristique <i>libero.</i> sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>egestas</b> luctu.</p>"]]

    $(".showEvent").click(function(e) {
        e.preventDefault();

        window.location = "create.html";
    });

    $(".extraInfo").click(function(e) {
        console.log(e);        
    });
    
    function showEventList(eventList) {
        var listItem = "";
        var NumEvents = 0;
        var data;

        // jumpToShowEvent.bind(this, arg1, arg2, arg3);
        if (localStorage) {
            if (localStorage.getItem("search0")) {
                NumEvents = showResults("search");
            }
            else {
                NumEvents = showResults("all");
                
            }
            addMoreClickHandler(NumEvents);                    
        }   
    }

    function showResults(resultType) {
        var i = 0;
        var data;
        var listItems = "";

        if (resultType === "search") {
            data = localStorage.getItem("search" + i);
        } else {
            data = localStorage.getItem(i.toString());
        }
        while (data !== null) {
            listItems = addEventToList(data, i, listItems);
            if (resultType === "search") {
                localStorage.removeItem("search" + i);
            }
            // console.log("Adding more" + i  + " click function");             

            // console.log( $("#more" + i));

            //  $("#more" + i).click(function(e){
            //     console.log("more");
            // });

            console.log("#more" + i);
            i++;
            if (resultType === "search") {
                data = localStorage.getItem("search" + i);           
            } else {
                data = localStorage.getItem(i.toString());
            }
        }
        $(".event-list").html(listItems);
        return i;
    }

    function addEventToList(data, i, listItems) {
        var w = data.split("|");
        listItems = listItems + "<ul class=\"event-detail\">" +
                "<li class=\"horizontal-list\">" + w[0] + "</li>" +
                "<li class=\"horizontal-list\"><a class=\"showEvent\" id=\"edit" + i + "\" href=\"create.html\">" + w[1] + "</a></li>" +
                "<li class=\"horizontal-list\">" + w[2] + "</li>" +
                "<li class=\"horizontal-list\">" + w[3] + "</li>" +
                "<li class=\"horizontal-list\"><button id=\"more" + i + "\">more</button></li>" +
                "</ul><div class= \"extraInfo\"><div id=\"extraInfo" + i + "\">" + w[4] + "</div></div>";

         return listItems;
    }

    function addMoreClickHandler(NumEvents) {
        for (var j = 0; j < NumEvents; j++) {

            $("#more" + j).click(function(e){
                $(e.currentTarget.parentNode.parentNode.nextSibling).toggleClass("extraInfo");
                if (e.currentTarget.innerText === "more") {
                    $(e.currentTarget).html("less");
                } else {
                    $(e.currentTarget).html("more");
                }                
            });

            $("#edit" + j).click(function(e){
                e.preventDefault();
                console.log(e.currentTarget.id);
                var value = e.currentTarget.id.toString().substr(4,4);
                localStorage.setItem("edit", value);
                window.location = "create.html";
            });
        }
    }

    function jumpToShowEvent() {        
        $(".create").removeClass("show");
        $(".create").addClass("hide");
        $(".edit").removeClass("hide");
        $(".edit").removeClass("show");
        return true;
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