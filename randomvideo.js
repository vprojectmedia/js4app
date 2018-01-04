var videos = [
'59tWxlWbfow',
'o329cDzm29A',
'ha7THH7Iqkc',
'6ZzXIQeymTg',
'SCBKCAnnqB0',
'T1GyxWEsWU8&t',
'7eaAJS-eJFY&t',
'T1GyxWEsWU8'
];

var index=Math.floor(Math.random() * videos.length);
var html='<iframe style="padding: 16px 0;height:250px;" src="https://www.youtube.com/embed/' + videos[index] + '" allowfullscreen></iframe>';
document.write(html);
