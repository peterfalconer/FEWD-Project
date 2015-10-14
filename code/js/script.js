$(document).ready(function() {
    var events = [["2015-12-30","12:00", "Rally","Melbourne Fed Square","ACF", "","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. <b>Lorem</b> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. <b>Nulla</b> Praesent mauris. Fusce <b>sem</b> nec tellus <b>sagittis</b> sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <b>lacinia</b> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <b>conubia</b> libero. Sed dignissim <b>nostra,</b> lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem <b>lacinia</b> at dolor. Maecenas <b>Pellentesque</b> mattis. Sed convallis tristique <i>libero.</i> sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>egestas</b> luctu.","0","peter@gmail.com"],
                    ["2015-10-03","19:00", "Protest Dinner","The Press Club","Joe Anderson", "", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. <b>Lorem</b> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. <b>Nulla</b> Praesent mauris. Fusce <b>sem</b> nec tellus <b>sagittis</b> sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <b>lacinia</b> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <b>conubia</b> libero. Sed dignissim <b>nostra,</b> lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem <b>lacinia</b> at dolor. Maecenas <b>Pellentesque</b> mattis. Sed convallis tristique <i>libero.</i> sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>egestas</b> luctu.","0", "emma@me.com"],
                    ["2015-10-20","17:00", "Rally","Melbourne Fed Square","ACF", "","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. <b>Lorem</b> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. <b>Nulla</b> Praesent mauris. Fusce <b>sem</b> nec tellus <b>sagittis</b> sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <b>lacinia</b> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <b>conubia</b> libero. Sed dignissim <b>nostra,</b> lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem <b>lacinia</b> at dolor. Maecenas <b>Pellentesque</b> mattis. Sed convallis tristique <i>libero.</i> sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>egestas</b> luctu.","7","peter@gmail.com"],
                    ["2015-10-30","19:30", "Poetry Reading","Cafe Climate","Hilary Bentley", "", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. <b>Lorem</b> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. <b>Nulla</b> Praesent mauris. Fusce <b>sem</b> nec tellus <b>sagittis</b> sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <b>lacinia</b> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <b>conubia</b> libero. Sed dignissim <b>nostra,</b> lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem <b>lacinia</b> at dolor. Maecenas <b>Pellentesque</b> mattis. Sed convallis tristique <i>libero.</i> sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>egestas</b> luctu.","23","emma@me.com"],
                    ["2015-11-23","13:00", "Public Meeting","Melbourne Town Hall","ACF", "", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. <b>Lorem</b> Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum <b>Sed</b> imperdiet. Duis sagittis ipsum. <b>Nulla</b> Praesent mauris. Fusce <b>sem</b> nec tellus <b>sagittis</b> sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti <b>lacinia</b> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in <b>conubia</b> libero. Sed dignissim <b>nostra,</b> lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem <b>lacinia</b> at dolor. Maecenas <b>Pellentesque</b> mattis. Sed convallis tristique <i>libero.</i> sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis <b>vel</b> vel, suscipit quis, <b>egestas</b> luctu.","13","harry@acf.com.au"]]

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

        if (localStorage) {
            if (localStorage.getItem("search0")) {
                NumEvents = showResults("search");
            }
            else {
                NumEvents = showResults("all");
                
            }
            addMoreClickHandler();
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
            listItems = addEventToList(data, i, listItems, true);
            if (resultType === "search") {
                localStorage.removeItem("search" + i);
            }
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

    function addMoreClickHandler() {
        $(".more").click(function(e){
            e.preventDefault();
            $(e.currentTarget.parentNode.parentNode.nextSibling).toggleClass("hide");
            if (e.currentTarget.innerText === "more") {
                $(e.currentTarget).html("less");
            } else {
                $(e.currentTarget).html("more");
            }             
        });

        $(".rsvp").click(function(e){
            e.preventDefault();
            console.log(e.currentTarget.id);
            var value = e.currentTarget.id.toString().substr(4,4);
            localStorage.setItem("rsvp", value);
            window.location = "rsvp.html";
        });

            
    }

    //  load localStorage with events from array if there are none in localStorage
    function loadLocalStorage(eventList) {
        var data;
        if (localStorage) {
            if (localStorage.getItem("Flag") != "set") {
                localStorage.setItem("Flag", "set");
                for (var i = eventList.length - 1 ; i >= 0; i--) {
                    data = "";
                    for (var j = 0; j < 9; j++) {
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