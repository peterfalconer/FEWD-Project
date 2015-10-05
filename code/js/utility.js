    function GetMaxRowNum() {
        var i = -1;
        var data = "";
        while (data !== null) {
            i++;
            data = localStorage.getItem(i.toString());
        }
        return i;
    }