// Wait for the DOM content to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Get all navigation buttons
  const navButtons = document.querySelectorAll("[data-target]");
  // Get all screens
  const screens = document.querySelectorAll(".screen");

  // Add click event listeners to all buttons
  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the target screen's ID from the button's data-target attribute
      const targetId = button.getAttribute("data-target");

      // Hide all screens
      screens.forEach((screen) => {
        screen.style.display = "none"; // Set all screens to hidden
      });

      // Display the target screen
      const targetScreen = document.getElementById(targetId);
      if (targetScreen) {
        targetScreen.style.display = "block"; // Show the selected screen
      }

      // Remove the 'active' class from all buttons
      navButtons.forEach((btn) => btn.classList.remove("active"));
      // Add the 'active' class to the clicked button
      button.classList.add("active");
    });
  });
});
