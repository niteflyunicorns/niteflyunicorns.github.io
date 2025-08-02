projects = window.projects

const container = document.getElementById('portfolio-container');
const template = document.getElementById('portfolio-item-template');

projects.forEach(project => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.title').textContent = project.name;
    const img = clone.querySelector('.project-img');
    img.src = project.bkgd;
    img.alt = project.name;
    const img2 = clone.querySelector('.img-popup');
    img2.href = project.bkgd;

    const id = encodeURIComponent( project.id );
    clone.querySelector('a.btn').href = `projectPage.html?id=${id}`;

    // Add tags as class names to the top-level article element
    const card = clone.querySelector('.project-card');
    project.tags.forEach(tag => {
	card.classList.add(tag);
    });

    container.appendChild(clone);
});
