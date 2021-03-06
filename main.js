var contactID = 0;

$('form').submit(function(e) {
    var name = $('#first_name').val() + " " + $('#last_name').val();
    var description = $('#description').val();
    description = '\"'.concat(description, '\"');

    var btnHTML = "<button class='card btn btn-success btn-block' id='" + contactID + "' ";
    btnHTML += "data-altP = " + description + ">";
    btnHTML += "<h2>" + name + "</h2>";
    btnHTML += "<p>Click for description!</p></button>";
    $('.current-ninjas').append(btnHTML);
    contactID++;

    $('#first_name').val('');
    $('#last_name').val('');
    $('#description').val('');

    e.preventDefault();
});

$(document).on('click', '.card', function() {
    var contactID = $(this).attr('id');
    var idP = '#' + contactID + ' p';
    var currentP = $(idP).text();
    $(idP).remove();
    $(this).append("<p>" + $(this).attr('data-altP') +"</p>");
    $(this).attr('data-altP', currentP);
    if ($(this).hasClass('btn-info')) {
        $(this).removeClass('btn-info');
        $(this).addClass('btn-success');
    } else if ($(this).hasClass('btn-success')) {
        $(this).removeClass('btn-success');
        $(this).addClass('btn-info');
    }
});
