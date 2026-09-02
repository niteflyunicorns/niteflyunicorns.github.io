projects = window.projects

const container = document.getElementById('portfolio-container');
const template = document.getElementById('portfolio-item-template');

projects.forEach(project => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.title').textContent = project.name;
    const img = clone.querySelector('.project-img');
    // img.setAttribute("data-src", project.bkgd);
    img.src = project.bkgd;
    img.alt = project.name;
    const img2 = clone.querySelector('.img-popup');
    img2.href = project.bkgd;

    const id = encodeURIComponent( project.id );
    if ( project.pagetype === 'sections' ) {
	clone.querySelector('a.btn').href = project.fileName;
    } else {
	clone.querySelector('a.btn').href = `projectPage.html?id=${id}`;
    }

    // Add tags as class names to the top-level article element
    const card = clone.querySelector('.project-card');
    project.tags.forEach(tag => {
	card.classList.add(tag);
    });

    container.appendChild(clone);
});


// portfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    // window.loadVisibleImages();
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");

	// t.on('arrangeComplete', function() {
	//     window.loadVisibleImages();
	// });

	return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});
