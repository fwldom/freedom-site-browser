document.getElementById("search-submit").addEventListener("click", function () {
        var searchInput = document.getElementById("search-input").value;
        window.location.href = document.getElementById("search-engine-selector").value + searchInput;
});
document.getElementById("search-input").addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
                document.getElementById("search-submit").click();
        }
});