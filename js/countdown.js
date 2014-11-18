$(function() {
$('.countdown').downCount({
date: '01/15/2015 12:00:00',
offset: 5
}, function () {
alert('WOOT WOOT, done!');
});
});