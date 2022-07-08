const body = document.body;

const widthSize = window.innerWidth;

const narrowSize = widthSize - 100;
const wideSize = widthSize + 100;

function handleResize() {
  let newWidthSize = window.innerWidth;
  if (wideSize < newWidthSize) {
    body.className = "wide";
  } else if (narrowSize < newWidthSize && wideSize >= newWidthSize) {
    body.classList.remove = "wide";
    body.className = "initial";
  } else if (narrowSize >= newWidthSize) {
    body.classList.remove = "initial";
    body.className = "narrow";
  }
}

window.addEventListener("resize", handleResize);
