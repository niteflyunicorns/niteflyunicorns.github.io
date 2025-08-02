// project.js -- list of projects for use in dynamic population of website code
// coder: niteflyunicorns
// last update: 7.27.2025

/*
  id: url-safe id for the project
  name: project title
  bkgd: file path to image used as porfolio card background
  video: optional file path to a header video. Lack of this defaults to the above url as a background image.
  tags: tags for filtering on main portfolio page. Options = all, animation, new, graphic-design, for-sale
  type: the main tag for the project type. Options = animation, graphic-design
  role: my role in the project
  soft: software used in the development of the project
  desc: paragraph description of project and process **Note: may make this a list of multiple paragraphs to be distributed across the page.
  imgs: list of image filepaths for the images in the gallery
  
*/

window.projects = [
    {
	id: 'draugr',
	name: 'Draugr Planetary System',
	bkgd: 'assets/portfolio/DraugrSystem/EeyoStill.png',
	video: 'assets/portfolio/DraugrSystem/draugrInterfaceFull.mp4',
	tags: ['all', 'animation', 'new'],
	type: '3D Animation',
	role: 'All',
	soft: 'Blender, Adobe After Effects',
	desc: "This project was the result of an overhaul of an old project. The original project was a study on worldbuilding. Everything from location, history, environment, seasons, culture, and characters was designed and built from scratch. The original world consisted of a intergalactic planetary system called Draugr - named as such because the system orbits a pulsar, (the naming was inspired by the exoplanet Draugr, which orbits a pulsar and is named after undead creatures from Norse mythology, a name suitable for a planet orbiting the remnants of a supernova), which was home to several unique alien creatures. The preliminary design was rough in terms of design, but fairly well fleshed out in terms of story. From there, I refined the overal design of the planets, converting them from the original 2D concept art to the 3D versions they are currently. The planets were built and textured in Blender, then the FUI was added over the footage in Adobe After Effects. In addition to the 3D modeling, texturing and animation, I conducted research on known exoplanets in order to achieve some amount of realism in the data for each planet. This included information about how mass and temperature of planets affect and are affected by their distance from their host star, how the host star's composition affects the system, and how the composition of a planet's atmosphere affects it's color and temperature.",
	imgs: [
	    "assets/portfolio/DraugrSystem/draugrInterface-eeyo.png",
	    "assets/portfolio/DraugrSystem/draugrInterface-rhyel.png",
	    "assets/portfolio/DraugrSystem/EeyoStill.png",
	    "assets/portfolio/DraugrSystem/PhobarStill.png",
	    "assets/portfolio/DraugrSystem/RonosStill.png",
	    "assets/portfolio/DraugrSystem/RhyelStill.png",
	    "assets/portfolio/DraugrSystem/radarGraphs-04.png"
	]
    },
    {
	id: 'particle',
	name: 'Particle Countdown',
	bkgd: 'assets/portfolio/Countdown/1-1.png',
	video: 'assets/portfolio/Countdown/fullCountdown.mp4',
	tags: ['all', 'animation', 'new'],
	type: "3D Simulation",
	role: "All",
	soft: "Blender",
	desc: "This project was an experiment in particle simulation. Simulated in Blender using 3D text as bounding boxes for the particles and force fields to affect the particles, this seemingly simple countdown became more complex and interesting. Each number has at least 2 unique particle sources, represented by the different colors.",
	imgs: [
	    'assets/portfolio/Countdown/1-2.png', 'assets/portfolio/Countdown/1-1.png', 
	    'assets/portfolio/Countdown/2-2.png', 'assets/portfolio/Countdown/2-1.png',
	    'assets/portfolio/Countdown/3-2.png', 'assets/portfolio/Countdown/3-1.png', 
	    'assets/portfolio/Countdown/4-2.png', 'assets/portfolio/Countdown/4-1.png',
	    'assets/portfolio/Countdown/5-2.png', 'assets/portfolio/Countdown/5-1.png', 
	    'assets/portfolio/Countdown/6-2.png', 'assets/portfolio/Countdown/6-1.png', 
	    'assets/portfolio/Countdown/7-2.png', 'assets/portfolio/Countdown/7-1.png', 
	    'assets/portfolio/Countdown/8-2.png', 'assets/portfolio/Countdown/8-1.png', 
	    'assets/portfolio/Countdown/9-2.png', 'assets/portfolio/Countdown/9-1.png', 
	    'assets/portfolio/Countdown/10-2.png', 'assets/portfolio/Countdown/10-1.png'
	]
    },
    {
	id: 'grby',
	name: 'GRBY SQRD App Prototype',
	bkgd: 'assets/portfolio/GRBY-SQRD/still-large.png',
	video: 'assets/portfolio/GRBY-SQRD/demo.mp4',
	tags: ['all', 'new'],
	type: "UI/UX Design",
	role: "All",
	soft: "Adobe XD, Android Studio",
	desc: "The GRBY-SQRD game is a logic puzzle game that I learned a long time ago and loved so much that I wanted to design an app for it. I designed and began developing the application using Adobe XD and a bit of Android Studio, then I came across an app protoype competition that allowed me to flesh out the details of the prototype more. I finished the prototype and submitted it, where it won 2nd place and a monetary prize. The app is still in development.",
	imgs: [
	    'assets/portfolio/GRBY-SQRD/still1.jpg', 'assets/portfolio/GRBY-SQRD/still2.jpg',
	    'assets/portfolio/GRBY-SQRD/still3.jpg', 'assets/portfolio/GRBY-SQRD/still4.jpg',
	    'assets/portfolio/GRBY-SQRD/still5.jpg', 'assets/portfolio/GRBY-SQRD/still6.jpg',
	    'assets/portfolio/GRBY-SQRD/still7.jpg', 'assets/portfolio/GRBY-SQRD/still8.jpg',
	    'assets/portfolio/GRBY-SQRD/still9.jpg', 'assets/portfolio/GRBY-SQRD/still10.jpg',
	    'assets/portfolio/GRBY-SQRD/still11.jpg', 'assets/portfolio/GRBY-SQRD/still12.jpg'
	]
    },
    {
	id: 'gill-sans',
	name: 'Gill Sans Typographic Specimen',
	bkgd: 'assets/portfolio/GillSans/bookMockup.jpg',
	video: '',
	tags: ['all', 'graphic-design'],
	type: "Graphic Design",
	role: "All",
	soft: "Adobe InDesign",
	desc: "This typographic specimen is an exploration and study of the popular font family called Gill Sans. I was immediately drawn to this family as soon as I saw it and new I needed to explore the history and design of its many fonts. The overall design of the book and poster are based on the bold, larger-than-life characteristics of the Gill Sans KO font, which is the largest in the family. The warm orange and bright mint green compliment the curves of Gill Sans, accentuating the bright playful nature of the font.",
	imgs: [
	    'assets/portfolio/GillSans/bookMockup.jpg', 'assets/portfolio/GillSans/book-front.png',
	    'assets/portfolio/GillSans/book-pg1.png', 'assets/portfolio/GillSans/book-pg2.png',
	    'assets/portfolio/GillSans/posterMockup.jpg', 'assets/portfolio/GillSans/poster.png'
	]
    },
    {
	id: 'night-sky',
	name: 'Night Sky Field Guide',
	bkgd: 'assets/portfolio/NightSkyFieldGuide/fieldGuideMockup.png',
	video: '',
	tags: ['all', 'graphic-design'],
	type: "Graphic Design",
	role: "All",
	soft: "Adobe InDesign, Adobe Illustrator",
	desc: "I have always been enamored by space and the stars, and this was a perfect project to showcase not only my knowledge, but also my passion for space. The field guide is focused on the stars and constellations found in the night sky of the Northern Hemisphere. All of the graphics were designed in Adobe Illustrator, then exported into Adobe Indesign where the layout was done. The field guide features a full page map with orientation keys and arrows showing small tips and tricks for finding more constellations from one. The back of the field guide explains some of the more technical aspects of stars and constellations as we know them. The field guide also offers viewers cultural comparisons between the more well known Greek constellations and the stars and constellations significance to other cultures around the world.",
	imgs: [
	    'assets/portfolio/NightSkyFieldGuide/fieldGuideMockup.png', 'assets/portfolio/NightSkyFieldGuide/cover.png',
	    'assets/portfolio/NightSkyFieldGuide/pgs2-3.png', 'assets/portfolio/NightSkyFieldGuide/pgs4-5.png',
	    'assets/portfolio/NightSkyFieldGuide/pgs6-7.png', 'assets/portfolio/NightSkyFieldGuide/pgs8-9.png',
	    'assets/portfolio/NightSkyFieldGuide/pgs10-11.png', 'assets/portfolio/NightSkyFieldGuide/back.png',
	]
    },
    {
	id: 'txg',
	name: 'TXG Logo',
	bkgd: 'assets/portfolio/Logos/txgLogo1-p0421.png',
	video: '',
	tags: ['all', 'graphic-design'],
	type: "Logo Design",
	role: "Refiner",
	soft: "Adobe Illustrator",
	desc: "The original TXG Logo was given to me with the request to revamp/redesign the logo to be more modern. The colors are from the original logo but...",
	imgs: [ 'assets/portfolio/Logos/txgLogo1-p0421.png' ]
    },
    {
	id: 'music-fest',
	name: 'N/A Music Fest Promo',
	bkgd: 'assets/portfolio/MusicFest/still1.png',
	video: 'assets/portfolio/MusicFest/promo.mp4',
	tags: ['all', 'animation'],
	type: "2D Animation, Rotoscope",
	role: "All",
	soft: "Adobe After Effects, Procreate",
	desc: "",
	imgs: [ 'assets/portfolio/MusicFest/still1.png' ]
    },
    {
	id: 'petes',
	name: 'Prickly Pete\'s Branding',
	bkgd: 'assets/portfolio/PricklyPetes/prickly-banner.jpg',
	video: '',
	tags: ['all', 'graphic-design', 'animation'],
	type: "",
	role: "",
	soft: "",
	desc: "",
	imgs: []
    },
    // {
    // 	id: 'lochness',
    // 	name: 'Lochness',
    // 	bkgd: 'assets/portfolio/',
    // 	video: '',
    // 	tags: ['all', 'animation'],
    // 	type: "",
    // 	role: "",
    // 	soft: "",
    // 	desc: "",
    // 	imgs: []
    // },
    // {
    // 	id: 'adoption',
    // 	name: 'Adoption Day',
    // 	bkgd: 'assets/portfolio/',
    // 	video: '',
    // 	tags: ['all', 'animation'],
    // 	type: "",
    // 	role: "",
    // 	soft: "",
    // 	desc: "",
    // 	imgs: []
    // },
    {
	id: 'flag-tag',
	name: 'FlagTag Promo',
	bkgd: 'assets/portfolio/FlagTagPromo/still1.png',
	video: 'assets/portfolio/FlagTagPromo/promo.mp4',
	tags: ['all', 'animation'],
	type: "",
	role: "",
	soft: "",
	desc: "",
	imgs: []
    },
    // {
    // 	id: '',
    // 	name: '',
    // 	bkgd: 'assets/portfolio/',
    // 	video: '',
    // 	tags: ['all'],
    // 	type: "",
    // 	role: "",
    // 	soft: "",
    // 	desc: "",
    // 	imgs: []
    // },
    // {
    // 	id: '',
    // 	name: '',
    // 	bkgd: 'assets/portfolio/',
    // 	video: '',
    // 	tags: ['all'],
    // 	type: "",
    // 	role: "",
    // 	soft: "",
    // 	desc: "",
    // 	imgs: []
    // },
    // {
    // 	id: '',
    // 	name: '',
    // 	bkgd: 'assets/portfolio/',
    // 	video: '',
    // 	tags: ['all'],
    // 	type: "",
    // 	role: "",
    // 	soft: "",
    // 	desc: "",
    // 	imgs: []
    // },
    // {
    // 	id: '',
    // 	name: '',
    // 	bkgd: 'assets/portfolio/',
    // 	video: '',
    // 	tags: ['all'],
    // 	type: "",
    // 	role: "",
    // 	soft: "",
    // 	desc: "",
    // 	imgs: []
    // },
    // {
    // 	id: '',
    // 	name: '',
    // 	bkgd: 'assets/portfolio/',
    // 	video: '',
    // 	tags: ['all'],
    // 	type: "",
    // 	role: "",
    // 	soft: "",
    // 	desc: "",
    // 	imgs: []
    // }
];
