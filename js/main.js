var IO1 = {
	
	icons: ["IO-TW-01.png", /*"IO-TW-04.png", "IO-TW-08.png",*/ "IO-TW-10.png", "IO-TW-05-02.png", "IO-PP-01.png", "IO-PP-02.png", "IO-PP-03.png", "IO-PP-04.png", "IO-PP-05.png", "IO-PP-06.png", "IO-PP-07.png", "IO-PP-08.png", "IO-PP-09.png", "IO-PP-10.png"],
	heading: "Input Output 1",
	descrip: "Input Output 1 explores the possibilities of instruction-based methods in both image-making and typography. By extending the concept of rule-based art to the program, Input Output investigates whether a set of instructions executed in code can produce unexpected and sometimes poetic results. </p><p>Twitter bots both create and post images that respond to a set of instructions (a program). The outputs are taken from twitter and systematically placed into a grid to be drawn with a pen plotter as physical documentation. <a href='https://twitter.com/dewy_jojoba/lists/thesis/members' target='blank'>See twitter bots</a> <a href='pen-plotter-lines/index.html' target='blank'>See pen plotter lines</a>",
	path: "IO/IO.html"

}

var IO2 = {
	
	icons: ["IO-TW-10-02.png", "IO-WB-A.gif", "IO-WB-B.gif", "IO-WB-C.gif", "IO-WB-04.png", "IO-WB-05.png", "IO-WB-06.png", "IO-WB-01.gif", "IO-WB-02.gif", "IO-WB-03.gif"],
	heading: "Input Output 2",
	descrip: "Input Output 2 further explores instruction-based typography with programmatically generated letterforms. The typeface generated by the typeface twitter bot is exhibited in three browser-based animations where tweets are pulled from twitter and typeset with changing letterforms. Each animation introduces more random elements into the program. See animations: <a href='input-output/random-letterform/index.html' target='blank'>1</a> <a href='input-output/random-stroke-full/index.html' target='blank'>2</a> <a href='input-output/random-stroke-individual/index.html' target='blank'>3</a>",
	path: "#"

}

var LFL = {

	icons: ["LFL-Location-01.png", "LFL-Location-02.png","LFL-01.png", "LFL-02.png", "LFL-03.png", "LFL-04.png", "LFL-05.png", "LFL-Process-01.png", "LFL-Process-02.png", "LFL-Process-03.png", "LFL-AppStore-01.png", "LFL-AppStore-02.png"],
	heading: "Little Free Library",
	descrip: "A collectively curated selection of quotes from books found in the Little Free Library of the Green Oasis community garden. When reading a book in physical space, shadows are cast on to the book from the readers hands and body, over the course of the day. The app incorporates this phenomenon as a visual layer. Submitted quotes are stamped with a shadow image that represents the time of day they were submitted. <a href='https://invis.io/7YNROO06FJB' target='blank'>Prototype</a> <a href='https://www.usertesting.com/v/d0cac6ba-1700-4a52-aaf4-1fe37ea70228#!/notes' target='blank'>User Test</a> <a href='https://s3.amazonaws.com/arena-attachments/1943214/5cce3d210e2f03aada91b956c1aa743e.pdf?1521917137' target='blank'>Presentation</a>",
	path: "LFL/LFL.html"

}

var Mat = {

	icons: ["Mat-01.png", "Mat-03.png", "Mat-11.png", "Mat-04.png", "Mat-05.png", "Mat-06.png", "Mat-07.png", "Mat-08.png", "Mat-10.png"],
	heading: "Matter",
	descrip: "Matter is an online publication and research project centered on the themes of media and memory. The site acts as a catalogue of ideas that explore these themes; such as archiving, collective memory, and memory in the digital age. Each article on the site has a programmed expiration date and fades away until it is erased and replaced with new content. <a href='https://madboz.github.io/reading-without-pages/matter' target='blank'>Matter</a>",
	path: "matter/matter.html"

}

var RGB = {

	icons: ["RGB-01-01.png", "RGB-01-02.png", "RGB-01-03.png", "RGB-02.png", /*"RGB-03.png", "RGB-04.png", "RGB-05.png",*/ "RGB-06-01.png", "RGB-06-02.png", "RGB-06-03.png"],
	heading: "RGB Location",
	descrip: "RGB Location translates a users location into a colour by converting the longitude, latitude, and altitude into red, green, and blue values. Locations shown are: New York, Las Vegas, and Moscow. <a href='https://rgb-location.tk' target='blank'>rgb-location.tk</a>",
	path: "RGB/RGB.html"

}

var RWP = {

	icons: ["RWP-01-01.png", "RWP-01-02.png", "RWP-01-03.png", "RWP-01-04.png" , "RWP-02-01.png", /*"RWP-02-02.png",*/ "RWP-02-03.png", "RWP-02-04.png"],
	heading: "Reading without Pages",
	descrip: "1. An instructional site for CSS Grids that is structured within a series of nested grids. Users can toggle the visibility of black gridlines that describe the architecture of the page. <a href='https://madboz.github.io/reading-without-pages/demo' target='blank'>CSS Grids Demo</a> </br> 2. Alternate reading experience for \"Something is Wrong on the Internet\" by James Bridle cuts and remixes the article in a similar way to the videos he writes about. <a href='https://madboz.github.io/reading-without-pages/piece' target='blank'>Something is Wrong on the Internet</a>",
	path: "RWP/RWP.html"

}

var SB = {

	icons: ["SB-01.png", "SB-02.png", "SB-03.png", "SB-04.png", "SB-05.png", "SB-06.png", "SB-07.png", "SB-08.png", "SB-09.png", "SB-10.png", "SB-11.png", "SB-12.png"],
	heading: "Sidebar Journal",
	descrip: "Sidebar is a publishing platform about internet culture. The journal features philosophical writings, personal stories, poetry, fine art, and theories, focused on the internet.",
	path: "sidebar/sidebar.html"

}

var OTH = {

	icons: ["OTH-01.gif", "OTH-02.png", "OTH-04.gif"],
	heading: "Computational Form",
	descrip: "1. Feather generated with Turtle Graphics </br> 2. Markov Chain Webding Landscapes </br> 3. Perlin Noise typeface",
	path: "OTH/OTH.html"

}

var arr = [IO1, LFL, Mat, RGB, RWP, SB, IO2];
shuffle(arr);

var container = document.getElementById("container");

for (var i = 0; i < arr.length; i++) {

	var j = i + 1;

	for (var n = 0; n < arr[i].icons.length; n++) {

		container.innerHTML += '<img src="assets/' + arr[i].icons[n] + '">';

	}

	container.innerHTML += '</br><p>' + arr[i].heading + '</br>' + arr[i].descrip + '</p>';

}

container.onclick = function(event) {

	var target = event.target;

	if (target.tagName == "IMG") {

		if (target.style.height !== "500px") {

        target.style.height = "500px";

	    } else {

	        target.style.height = "88px";

	    }

	}

}

/*** Generic shuffle function ***/
 
function shuffle(a) {

    var j, x, i;

    for (i = a.length - 1; i > 0; i--) {

        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;

    }

    return a;

}