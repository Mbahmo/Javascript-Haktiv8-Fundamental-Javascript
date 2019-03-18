
function clickevent() {
    alert('click');
}
$('#add').on('click', function(e){
    $('body').append('<button class="tes">dengan jquery</button>');
});

// $('body').on('click','.tes', function(e){
//     alert('click');
// });

$('.tes').on('click', function (e) {
    alert('click');
});