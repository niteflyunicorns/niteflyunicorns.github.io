/* may change this so that it can be any include (header, footer, navbar) */

document.addEventListener("DOMContentLoaded", function() {
    // Select the element where the footer should be inserted
    var footerContainer = document.getElementById("footer");

    // Fetch the footer HTML content
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            // Insert the fetched HTML into the footer container
            footerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Error loading the footer:", error);
        });
});
