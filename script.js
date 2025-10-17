const timeEl = document.getElementById("time");
const moreTextEl = document.getElementById("more-text");
const textLoadingEl = document.getElementById("text-loading");
const btnTextEl = document.getElementById("toggle-btn");

const shortText = document.getElementById("short-text");

//  To update the time
function updateTime() {
  // Get the current timestamp in milliseconds
  const now = Date.now();

  // display it
  timeEl.textContent = now;
}

// Run once when the page loads (accurate at render)
updateTime();

// update it every 100 millisecond
setInterval(updateTime, 100);

// show or hide more text
function toggleText() {
  const isHidden =
    moreTextEl.style.display === "none" || moreTextEl.style.display === "";

  moreTextEl.style.display = isHidden ? "inline" : "none";
  textLoadingEl.style.display = isHidden ? "none" : "inline";
  btnTextEl.innerText = isHidden ? "Show Less" : "Read More";

  // Accessibility: update aria-expanded
  btnTextEl.setAttribute(
    "aria-label",
    isHidden ? "Show less of biography text" : "Read more of biography text"
  );
}
