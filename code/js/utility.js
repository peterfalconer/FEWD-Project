    function GetMaxRowNum() {
        var i = -1;
        var data = "";
        while (data !== null) {
            i++;
            data = localStorage.getItem(i.toString());
        }
        return i;
    }

    function addEventToList(data, i, listItems) {
        var w = data.split("|");
        listItems = listItems + "<ul class=\"event-detail\">" +
                "<li class=\"horizontal-list\">" + w[0] + "</li>" +  
                "<li class=\"horizontal-list\"><a class=\"edit\" id=\"edit" + i + "\" href=\"create.html\">" + w[2] + "</a></li>" +
                "<li class=\"horizontal-list\">" + w[3] + "</li>" +
                "<li class=\"horizontal-list who\">" + w[4] + "</li>" +
                "<li class=\"horizontal-list num-rsvps\">" + w[7] + " rsvps</li>" +
                "<li class=\"horizontal-list-btn\"><button class=\"rsvp\" id=\"rsvp" + i + "\">rsvp</button></li>" +
                "<li class=\"horizontal-list-btn\"><button class=\"more\" id=\"more" + i + "\">more</button></li>" +
                "</ul><div class= \"extraInfo\"><div id=\"extraInfo" + i + "\">" + w[6] + "</div></div>";

         return listItems;
    }