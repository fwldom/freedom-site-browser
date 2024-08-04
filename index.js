  document.getElementById("search-submit").addEventListener("click", function() {
          var searchInput = document.getElementById("search-input").value;
           window.location.href = "https://www.google.com/search?q=" + searchInput;
   });