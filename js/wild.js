/*** Randomize Layout ***/

let IO1 = {
	
	icons: ["IO-PP-01.png", "IO-PP-02.png", "IO-PP-03.png", "IO-PP-04.png", "IO-PP-05.png", "IO-PP-06.png", "IO-PP-07.png", "IO-PP-08.png", "IO-PP-09.png", "IO-PP-10.png"],
	heading: "Input Output 1",
	descrip: "Input Output 1 explores the possibilities of instruction-based methods in both image-making and typography. By extending the concept of rule-based art to the program, Input Output investigates whether a set of instructions executed in code can produce unexpected and sometimes poetic results. </p><p>Twitter bots both create and post images that respond to a specific set of instructions. The outputs are taken from twitter and systematically placed into a grid to be drawn with a pen plotter as physical documentation.",
	path: "IO/IO.html"

}

let IO2 = {
	
	icons: ["IO-WB-04.png", "IO-WB-05.png", "IO-WB-06.png", "IO-WB-01.gif", "IO-WB-02.gif", "IO-WB-03.gif"],
	heading: "Input Output 2",
	descrip: "Input Output 2 further explores instruction-based typography with programmatically generated letterforms. The typeface generated by the typeface twitter bot is exhibited in three browser-based animations where tweets are pulled from twitter and typeset with changing letterforms. Each animation introduces more random elements into the program. <a href='input-output/random-letterform/index.html' target='blank'>1</a> <a href='input-output/random-stroke-full/index.html' target='blank'>2</a> <a href='input-output/random-stroke-individual/index.html' target='blank'>3</a>",
	path: "#"

}

let LFL = {

	icons: ["LFL-Location-01.png", "LFL-Location-02.png","LFL-01.png", "LFL-02.png", "LFL-03.png", "LFL-04.png", "LFL-05.png", "LFL-Process-01.png", "LFL-Process-02.png", "LFL-Process-03.png", "LFL-AppStore-01.png", "LFL-AppStore-02.png"],
	heading: "Little Free Library",
	descrip: "An app for collecting quotes found in the Little Free Library of the Green Oasis community garden. The app creates a collectively currated selection of quotes from books that may or may not still be in the library. Submitted quotes are \"stamped\" with a shadow image that represents the time of day they were submitted. <a href='https://invis.io/7YNROO06FJB' target='blank'>Visit prototype<a/>",
	path: "LFL/LFL.html"

}

let Mat = {

	icons: ["Mat-01.png", "Mat-02.png", "Mat-03.png", "Mat-04.png", "Mat-05.png", "Mat-06.png", "Mat-07.png"],
	heading: "Matter",
	descrip: "Matter is an online publication and research project centered on the themes of media and memory. The site acts as a catalogue of ideas that explore these themes; such as archiving, collective memory, and memory in the digital age. Each article on the site has a programmed expiration date and fades away until it is erased and replaced with new content. <a href='https://madboz.github.io/reading-without-pages/matter' target='blank'>Visit Matter</a>",
	path: "matter/matter.html"

}

let RGB = {

	icons: ["RGB-01-01.png", "RGB-01-02.png", "RGB-01-03.png", "RGB-02.png", "RGB-03.png", "RGB-04.png", "RGB-05.png", "RGB-06-01.png", "RGB-06-02.png", "RGB-06-03.png"],
	heading: "RGB Location",
	descrip: "RGB Location translates a users location into a colour by converting the longitude, latitude, and altitude into red, green, and blue values. <a href='https://rgb-location.tk' target='blank'>rgb-location.tk</a>",
	path: "RGB/RGB.html"

}

let RWP = {

	icons: ["RWP-01-01.png", "RWP-01-02.png", "RWP-01-03.png", "RWP-02-01.png", "RWP-02-02.png"],
	heading: "Microsites from \"Reading without Pages\" class at Parsons",
	descrip: "1. An instructional site for using CSS Grids that is structured within a series of nested grids. Users can toggle the visibility of black gridlines that describe the architecture of the page. <a href='https://madboz.github.io/reading-without-pages/demo' target='blank'>Visit site</a> </br> 2. Alternate reading experience for \"Something is Wrong on the Internet\" by James Bridle that cuts and remixes the article in a similar way to the videos he writes about. <a href='https://madboz.github.io/reading-without-pages/piece' target='blank'>Visit site</a>", /* Fix this sentence */
	path: "RWP/RWP.html"

}

let SB = {

	icons: ["SB-01.png", "SB-02.png", "SB-03.png", "SB-04.png", "SB-05.png", "SB-06.png", "SB-07.png", "SB-08.png", "SB-09.png", "SB-10.png", "SB-11.png", "SB-12.png"],
	heading: "Sidebar Journal",
	descrip: "Sidebar is a publishing platform about internet culture. The journal features philosophical writings, personal stories, poetry, fine art, and theories, focused on the internet.",
	path: "sidebar/sidebar.html"

}

let OTH = {

	icons: ["OTH-01.gif", "OTH-02.png", "OTH-04.gif"],
	heading: "Computational Form",
	descrip: "1. Feather generated with Turtle Graphics </br> 2. Markov Chain Webding Landscapes </br> 3. Perlin Noise typeface",
	path: "OTH/OTH.html"

}

let arr = [IO1, LFL, Mat, RGB, RWP, SB, IO2];

const content = document.getElementById("content");

shuffle(arr);

for (let i = 0; i < arr.length; i++) {

	let j = i + 1;

	for (let n = 0; n < arr[i].icons.length; n++) {

		content.innerHTML += '<img src="assets/' + arr[i].icons[n] + '">';

	}

	content.innerHTML += '</br></br><p>' + arr[i].heading + '</br>' + arr[i].descrip + '</p></br></br>';

}

/*** Generic Shuffle Function ***/
 
function shuffle(a) {

    let j, x, i;

    for (i = a.length - 1; i > 0; i--) {

        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;

    }

    return a;

}

/*** Toggle Size ***/

content.onclick = function(event) {

	let target = event.target;
	// console.log(target.tagName);

	if (target.tagName == "IMG") {

		if (target.style.height !== "40vw") {

        target.style.height = "40vw";

	    } else {

	        target.style.height = "88px";

	    }

	}

}