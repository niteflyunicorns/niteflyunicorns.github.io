const params = new URLSearchParams(window.location.search);
const projectId = document.body.dataset.projectId || params.get('id');

projects = window.projects;
const project = projects.find( p => p.id === projectId);

const galleryContainer = document.getElementById("gallery-container");

if (project) {
    document.getElementById('project-title').textContent = project.name;
    document.title = `niteflyunicorns | ${project.name}`;
    // document.getElementById('project-description').innerHTML = project.desc;
    // document.getElementById('project-type').textContent = project.type;
    // document.getElementById('project-role').textContent = project.role;
    // document.getElementById('project-software').textContent = project.soft;

    // GALLERY
    if (galleryContainer && project.sections) {
	project.sections.forEach( sectionData => {
	    // GALLERY SECTION
	    const section = document.createElement("section");
	    section.classList.add("gallery-section");

	    // MASONRY GRID
	    const grid = document.createElement("div");
	    grid.classList.add("masonry-grid");

	    // TEXT SECTION
	    const infoItem = document.createElement("div");
	    infoItem.classList.add( "masonry-grid-item", "masonry-text-item" );

	    // SECTION TITLE
            const sectionTitle = document.createElement("h1");
	    sectionTitle.classList.add("gallery-section-title");
            sectionTitle.textContent = sectionData.name;
            infoItem.appendChild(sectionTitle);

	    const meta = document.createElement("div");
	    meta.classList.add("gallery-meta");

	    meta.innerHTML = `
            <p><strong>Type:</strong> ${sectionData.type}<br>
            <strong>Role:</strong> ${sectionData.role}<br>
            <strong>Software:</strong> ${sectionData.soft}</p>
            <p>${sectionData.desc}</p>`;

            infoItem.appendChild(meta);
	    grid.appendChild(infoItem);

	    // const description = document.createElement("div");
            // description.classList.add("masonry-grid-item", "masonry-text-item");
            // description.innerHTML = sectionData.desc;
            // grid.appendChild(description);

	    sectionData.imgs.forEach( src => {
		const item = document.createElement("div");
		item.classList.add("masonry-grid-item");
		const img = document.createElement("img");
		img.src = src;
		img.alt = project.name;
		img.classList.add("gallery-image");
		item.appendChild(img)
		grid.appendChild(item);
	    });

	    section.appendChild(grid);

	    // add section to gallery-container
	    galleryContainer.appendChild(section);
	});
    }

    const videoFrame = document.querySelector('.video-container')
    const videoTag = document.getElementById('project-video');
    const imageTag = document.getElementById('project-image');
    // const videoTag = document.getElementById('project-video');
    // const sourceTag= videoTag.querySelector('source');
    // if (project.video && videoTag && sourceTag) {
    if (project.video && videoFrame) {
	videoTag.src = `https://www.youtube.com/embed/${project.video}?autoplay=1&mute=1&loop=1&playlist=${project.video}`;
    } else {
	videoFrame.style.display = "none"; // Hide the video if not present
	videoTag.style.display = "none";
	imageTag.style.display = "block";
	imageTag.src = project.bkgd;
    };
} else {
    document.getElementById('project-title').textContent = "Project Not Found";
    document.getElementById('project-description').textContent = "Sorry, we couldn't find this project.";
}

const grids = document.querySelectorAll('.masonry-grid');

grids.forEach(grid => {
    imagesLoaded( grid, function() {
	new Masonry( grid, {
	    itemSelector: '.masonry-grid-item',
	    columnWidth: '.masonry-grid-item',
	    percentPosition: true,
	    gutter: 20
	});
    });
});

// Grid.imagesLoaded().progress( function() {
//     grid.masonry('layout');
// });
