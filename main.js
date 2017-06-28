$('form').submit(function(e) {
    var formData = $(this).serializeArray();
    
    e.preventDefault();
});