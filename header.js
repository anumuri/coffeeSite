document.addEventListener("DOMContentLoaded", function() {
    var headerPlaceholder = document.getElementById("header-placeholder");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "header.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            headerPlaceholder.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});
