// Your javascript goes here

/* Open when someone clicks on the span element */
function openNav(id) {
  document.getElementById(id).style.width = "100%";

}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav(id) {
  const overlay = document.getElementById(id);

  // Start closing animation
  overlay.style.width = "0%";

  // Wait until animation finishes (0.5s), then reset scroll
  setTimeout(() => {
    overlay.scrollTo({
      top: 0,
      left: 0
    });
  }, 500); // 👈 must match your CSS transition time
}