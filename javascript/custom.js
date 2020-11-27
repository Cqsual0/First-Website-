/* ----------------------------------------------------------- */
/*  FAQ Dropdown
/* ----------------------------------------------------------- */

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));






/* ----------------------------------------------------------- */
/*  BACK TO TOP
/* ----------------------------------------------------------- */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $("#back-to-top").addClass("show-back-to-top");
        } else {
            $("#back-to-top").removeClass("show-back-to-top");
        }
    });
    $("#back-to-top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
