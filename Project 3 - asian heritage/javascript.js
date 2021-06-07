var quotes = [
'"I didn\’t keep a record. Where would I keep a record? I didn\’t want to be caught [with papers] saying on this day I brought so many people. Even our head office didn\’t keep a record, because everybody was busy, nobody had time. I brought them back, put them on the plane, that was my job." --Chong',
'" I won\'t dare go up there, and stand up and look. I just peek down. I saw the Japanese kill one of the American uh or the Canadian. I think he\'s officer ah ah. He\'s a young man. He was wounded. He was lying on the sidewalk. He asked. Japanese came and didn\'t take him as a prisoner, then shoot him. They they do not understand what this guy want. All he want is a drink of water and the Japanese soldier didn\'t do anything until the officer came. He look at this guy and ah the the soldier, I think he\'s a a second lieutenant. He had one pip on his shoulder. Ah he asked for water and the Japanese pulled pulled out of his back. I thought he would take the water bottle out. Instead he took a pistol out and shoot him right there." --Chong',
'"...they told me that I\'m to rescue, I\'m to rescue any person if they are British subjects. I I brought out people ah from England, Australia, French ah ah ah India: lot of places, if they are British subjects; they mostly escaped from Hong Kong." --Chong',
'" I felt like getting a gun and just going out and shooting a few Japanese [soldiers]. So I escaped to China“ --Chong',
'"They were told that the Japanese would certainly not attack by sea, for they were "racially prone to sea-sickness." Secondly, they were told that they would definitely not attack at night, because "their narrow eyes gave them poor night vision." --retrieved from http://www.myotaku.com/users/someguy/posts/214077"',
'"A vote for the CFF is a vote to give Chinaman and the Japanese the same voting rights as you have" --CCP (now NDP) party slogan',
'I never ask them for their last name. I never tell them who I am or what I am doing. All they know about me is "Bill" --Chong'
]

function newQuote()	{
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
