const monthNameEl = document.getElementById("monthid");
const dayNameEl = document.getElementById("daynameid");
const daynumEl = document.getElementById("dayid");
const yearEl = document.getElementById("yearid");

const date = new Date();

const month = date.getMonth();
monthNameEl.innerHTML = date.toLocaleString("en",{
    month:"long"
});

dayNameEl.innerText = date.toLocaleString("en",{
    weekday:"long"
});

daynumEl.innerHTML = date.getDate();

yearEl.innerHTML = date.getFullYear();