$(document).ready(function() {
    // user fills event fields and submits form. On submit we create localdata with event data and return to the main page
    // localData is picked up by the main page and added to the event array
    $('form' 'submit').click('submitForm');

    function submitForm(e) {
        e.preventDefault();
    }
});