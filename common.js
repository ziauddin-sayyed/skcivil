      var navMenuDiv = document.getElementById("nav-content");
      var navMenu = document.getElementById("nav-toggle");

      document.onclick = check;
      function check(e) {
        var target = (e && e.target) || (event && event.srcElement);

        //Nav Menu
        if (!checkParent(target, navMenuDiv)) {
          // click NOT on the menu
          if (checkParent(target, navMenu)) {
            // click on the link
            if (navMenuDiv.classList.contains("hidden")) {
              navMenuDiv.classList.remove("hidden");
            } else {
              navMenuDiv.classList.add("hidden");
            }
          } else {
            // click both outside link and outside menu, hide menu
            navMenuDiv.classList.add("hidden");
          }
        }
      }
      function checkParent(t, elm) {
        while (t.parentNode) {
          if (t == elm) {
            return true;
          }
          t = t.parentNode;
        }
        return false;
      }

      window.addEventListener('DOMContentLoaded', () => {
        const fadeDiv = document.getElementById('fadeDiv');
              
              // Start fade out after 2 seconds
              setTimeout(function() {
                  fadeDiv.classList.add('fade-out');
                  
                  // Optional: Remove div from DOM after fade completes
                  setTimeout(function() {
                      fadeDiv.style.display = 'none';
                  }, 1000); // Match this with the CSS animation duration
              }, 1000); // 2 seconds delay before fade starts
      });
  