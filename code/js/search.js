$(document).ready(function() {

    $("#doSearch").click(function(e){
        var data;
        var i;
        var j = 0;
        e.preventDefault;
        
        if (localStorage) {
            if (localStorage.getItem("Flag") != "set") {
                localStorage.set("Flag", "set");
            }
            i = GetMaxRowNum();
            if (i > 0 ) {
                data = localStorage.getItem("0");
                localStorage.setItem("search" + j++, data);
            }
            if (i > 3) {
                data = localStorage.getItem("3");
                localStorage.setItem("search" + j++, data);
            }
            window.location = "index.html";                           
        }
    });
});