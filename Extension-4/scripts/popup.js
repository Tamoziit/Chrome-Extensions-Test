let countBtn = document.querySelector("#addBtn");
let countEl = document.querySelector("#countEl");
let count = 0;

renderCount();

countBtn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;

    localStorage.setItem("count", count);
});

function renderCount() {
    if (localStorage.getItem("count")) {
        count = localStorage.getItem("count");
        countEl.textContent = count;
    }
}