const timeEl = document.getElementById("time");
const moreTextEl = document.getElementById("more-text");
const textLoadingEl = document.getElementById("text-loading");
const btnTextEl = document.getElementById("toggle-btn");

const shortText = document.getElementById("short-text");

//  To update the time
function updateTime() {
  const now = new Date();
  timeEl.textContent = new Date().toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// show or hide texts
function toggleText() {
  if (moreTextEl.style.display === "none" || moreTextEl.style.display === "") {
    moreTextEl.style.display = "inline";
    textLoadingEl.style.display = "none";

    btnTextEl.innerText = "Show Less";
  } else {
    moreTextEl.style.display = "none";
    textLoadingEl.style.display = "inline";

    btnTextEl.innerText = "Read More";
  }
}
