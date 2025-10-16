const timeElement = document.getElementById("time");

function updateTime() {
  const now = new Date();
  timeElement.textContent = `${now.toISOString().split("T")[1].split(".")[0]}`;
}
setInterval(updateTime, 1000);
updateTime();
