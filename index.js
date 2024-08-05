document.getElementById("search-submit").addEventListener("click", function () {
        var searchInput = document.getElementById("search-input").value;
        window.location.href = "https://www.google.com/search?q=" + searchInput;
});
document.getElementById("search-input").addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
                document.getElementById("search-submit").click();
        }
});