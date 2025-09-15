const params = new URLSearchParams(window.location.search);
const projectId = params.get('id');

projects = window.projects;
const project = projects.find( p => p.id === projectId);

const galleryContainer = document.getElementById("gallery-container");

if (project) {
    document.getElementById('project-title').textContent = project.name;
    document.title = `niteflyunicorns | ${project.name}`;
    document.getElementById('project-description').textContent = project.desc;
    document.getElementById('project-type').textContent = project.type;
    document.getElementById('project-role').textContent = project.role;
    document.getElementById('project-software').textContent = project.soft;
    // const img = document.getElementById('project-background');
    // img.src = project.bkgd;
    // img.alt = project.name;
    if (galleryContainer) {
	project.imgs.forEach( src => {
	    const item = document.createElement("div");
	    item.classList.add("masonry-grid-item");
	    const img = document.createElement("img");
	    img.src = src;
	    img.alt = project.title;
	    img.classList.add("gallery-image");
	    item.appendChild(img)
	    galleryContainer.appendChild(item);
	})
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

const grid = document.querySelector('.masonry-grid');

imagesLoaded( grid, function() {
    new Masonry( grid, {
	itemSelector: '.masonry-grid-item',
	columnWidth: 18,
	percentPosition: true,
	gutter: '.gutter-sizer'
    });
});

// grid.imagesLoaded().progress( function() {
//     grid.masonry('layout');
// });
