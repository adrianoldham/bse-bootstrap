// make dropdown toggle navigable
// useful with dropdown hover style

$('.dropdown-toggle').click(function() {
    var location = $(this).attr('href');
    window.location.href = location;
    return false;
});