// Sidebar Toggle Functionality
function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // Hide sidebar
        sidebarToggle.style.left = '-10px';
        sidebarToggle.innerHTML = '&#x00bb;'
    }
}

// Toggke Sidebar function
document.getElementById('sidebar-toggle').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // Hide sidebar
        sidebarToggle.style.left = '-10px';
        sidebarToggle.innerHTML = '&#x00bb;'
    } else {
        sidebar.style.left = '0px'; // Show sidebar
        sidebarToggle.style.left = '225px'; // Show sidebar
        sidebarToggle.innerHTML = '&#x00ab;'
    }

});

// Close Sidebar when click anywhere on main screen
document.getElementById('home').addEventListener('click', function () {
    closeSidebar();

});

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

// function to load HTML from any file to any html element
function loadHTML(file, targetElement) {
    fetch(file)
        .then(response => response.text())
        .then(html => {
            document.getElementById(targetElement).innerHTML = html;
        })
        .catch(error => console.error("Error loading the file:", error));
    closeSidebar();
    scrollToTop()
}

document.addEventListener('DOMContentLoaded', function () {
    loadHTML("about_page.htm", "content_area");
});

// Loading HTML on click on topic
document.getElementById("tab-icon").addEventListener("click", function () {
    loadHTML("about_page.htm", "content_area");
});

document.getElementById("00").addEventListener("click", function () {
    loadHTML("00_intro_to_yocto.htm", "content_area");
});

document.getElementById("01").addEventListener("click", function () {
    loadHTML("01_flashing_image.htm", "content_area");
});

document.getElementById("02").addEventListener("click", function () {
    loadHTML("02_local_conf.htm", "content_area");
});

document.getElementById("03").addEventListener("click", function () {
    loadHTML("03_bblayers_conf.htm", "content_area");
});

document.getElementById("04").addEventListener("click", function () {
    loadHTML("04_add_package.htm", "content_area");
});

document.getElementById("05").addEventListener("click", function () {
    loadHTML("05_create_add_layer.htm", "content_area");
});

document.getElementById("06").addEventListener("click", function () {
    loadHTML("06_basic_vars.htm", "content_area");
});

document.getElementById("07").addEventListener("click", function () {
    loadHTML("07_var_assign_operator.htm", "content_area");
});

document.getElementById("08").addEventListener("click", function () {
    loadHTML("08_helloworld_recipe.htm", "content_area");
});

document.getElementById("09").addEventListener("click", function () {
    loadHTML("09_build_tasks.htm", "content_area");
});

document.getElementById("10").addEventListener("click", function () {
    loadHTML("10_create_patch.htm", "content_area");
});