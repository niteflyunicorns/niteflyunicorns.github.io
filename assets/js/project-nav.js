function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", () => {
    const currentProj = getQueryParam("id");
    const currentIndex = projects.findIndex(p => p.id === currentProj);

    if (currentIndex === -1) return; // id not found

    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    const prevBtn = document.getElementById("nav-left");
    const nextBtn = document.getElementById("nav-right");

    if (prevBtn && prevProject) {
	prevBtn.href = `projectPage.html?id=${prevProject.id}`;
    }

    if (nextBtn && nextProject) {
	nextBtn.href = `projectPage.html?id=${nextProject.id}`;
    }
});
