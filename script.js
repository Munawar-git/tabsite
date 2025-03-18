// Utility Functions
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');

    // Hide the sidebar and adjust the toggle button
    sidebar.style.left = '-250px';
    sidebarToggle.style.left = '-10px';
    sidebarToggle.innerHTML = '&#x00bb;';
}

function scrollToTop() {
    window.scrollTo({ top: 0 });
}

function extractHrefAfterClick() {
    return new Promise((resolve) => {
        const onClick = () => {
            // Use a slight delay to allow the DOM and URL to update after the click
            setTimeout(() => {
                const currentFragment = window.location.hash.substring(1); // Remove the leading '#'
                resolve(currentFragment);
                document.removeEventListener('click', onClick); // Clean up
            }, 0);
        };

        document.addEventListener('click', onClick);
    });
}

function loadHTML(file, targetElement) {
    fetch(file)
        .then(response => response.text())
        .then(html => {
            document.getElementById(targetElement).innerHTML = html;
        })
        .catch(error => console.error("Error loading the file:", error));

    closeSidebar();
    scrollToTop();
}

function removeHashFromURL() {
    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
        console.log("Hash removed from URL.");
    }
}

// Navigation Handling
function handleNavigation() {
    const href = window.location.hash.substring(1); // Extract the hash fragment
    const file = href ? `${href}.htm` : "home.htm"; // Default to "home.htm" if no hash exists
    loadHTML(file, "content_area");
}

function listenForNavigationClicks() {
    window.addEventListener('popstate', handleNavigation);
}

// Sidebar Toggle Functionality
document.getElementById('sidebar-toggle').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');

    if (sidebar.style.left === '0px') {
        closeSidebar();
    } else {
        // Show the sidebar and adjust the toggle button
        sidebar.style.left = '0px';
        sidebarToggle.style.left = '225px';
        sidebarToggle.innerHTML = '&#x00ab;';
    }
});

// Close Sidebar when clicking anywhere on the main screen
document.getElementById('home').addEventListener('click', closeSidebar);

// Load HTML on sidebar item clicks
document.getElementById("sidebar").addEventListener("click", async function () {
    const href = await extractHrefAfterClick();
    const file = `${href}.htm`;
    console.log(file);
    loadHTML(file, "content_area");
});

// Initialize the app
document.addEventListener('DOMContentLoaded', function () {
    handleNavigation()
    listenForNavigationClicks(); // Listen for navigation events
});