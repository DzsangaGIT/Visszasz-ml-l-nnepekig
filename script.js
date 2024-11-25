const holidays = [
    { name: "Újév", date: "01-01", background: "url('assets/new_year.jpg')" },
    { name: "Nemzeti ünnep", date: "03-15", background: "url('assets/nemzeti.jpg')" },
    { name: "Húsvétvasárnap", calculate: calculateEaster, background: "url('assets/husvet.jpg')" },
    { name: "Húsvéthétfő", calculate: calculateEasterMonday, background: "url('assets/husvet.jpg')" },
    { name: "Munka ünnepe", date: "05-01", background: "url('assets/munka.jpg')" },
    { name: "Pünkösdvasárnap", calculate: calculatePentecost, background: "url('assets/punkosd.jpg')" },
    { name: "Pünkösdhétfő", calculate: calculatePentecostMonday, background: "url('assets/punkosd.jpg')" },
    { name: "Szent István ünnepe", date: "08-20", background: "url('assets/istvan.jpg')" },
    { name: "Nemzeti ünnep", date: "10-23", background: "url('assets/nemzeti2.jpg')" },
    { name: "Mindenszentek", date: "11-01", background: "url('assets/szentek.jpg')" },
    { name: "Karácsony", date: "12-25", background: "url('assets/christmas.jpg')" },
    { name: "Karácsony második napja", date: "12-26", background: "url('assets/christmas2.jpg')" },
    { name: "Szilveszter", date: "12-31", background: "url('assets/szilveszter.jpg')" }
];

const holidaySelect = document.getElementById('holiday-select');
const countdownDiv = document.getElementById('countdown');
const holidayNameDiv = document.getElementById('holiday-name');

function calculateEaster(year) {
    const A = year % 19;
    const B = year % 4;
    const C = year % 7;
    const D = (19 * A + 24) % 30;
    const E = (2 * B + 4 * C + 6 * D + 5) % 7;
    let day = 22 + D + E;

    if (D === 29 && E === 6) day = 50;
    if (D === 28 && E === 6 && A > 10) day = 49;

    const month = day > 31 ? 4 : 3;
    const date = day > 31 ? day - 31 : day;
    return `${year}-${String(month).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
}

function calculateEasterMonday(year) {
    const easter = new Date(calculateEaster(year));
    easter.setDate(easter.getDate() + 1);
    return easter.toISOString().split('T')[0];
}

function calculatePentecost(year) {
    const easter = new Date(calculateEaster(year));
    easter.setDate(easter.getDate() + 49);
    return easter.toISOString().split('T')[0];
}

function calculatePentecostMonday(year) {
    const easter = new Date(calculateEaster(year));
    easter.setDate(easter.getDate() + 50);
    return easter.toISOString().split('T')[0];
}

function getNextHolidayDate(holiday, year) {
    const today = new Date();
    let holidayDate;

    if (holiday.calculate) {
        holidayDate = new Date(holiday.calculate(year));
    } else {
        holidayDate = new Date(`${year}-${holiday.date}`);
    }

    if (holidayDate < today) {
        year++;
        holidayDate = holiday.calculate ? new Date(holiday.calculate(year)) : new Date(`${year}-${holiday.date}`);
    }
    return holidayDate;
}

function updateCountdown() {
    const selectedHoliday = holidays[holidaySelect.selectedIndex];
    const year = new Date().getFullYear();
    const holidayDate = getNextHolidayDate(selectedHoliday, year);
    const diff = holidayDate - new Date();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdownDiv.textContent = `${days} nap, ${hours} óra, ${minutes} perc, ${seconds} másodperc`;
    holidayNameDiv.textContent = `${selectedHoliday.name} dátuma: ${holidayDate.toISOString().split('T')[0]}`;
    document.body.style.backgroundImage = selectedHoliday.background;
}

function populateHolidaySelect() {
    holidays.forEach(holiday => {
        const option = document.createElement('option');
        option.textContent = holiday.name;
        holidaySelect.appendChild(option);
    });
}

holidaySelect.addEventListener('change', updateCountdown);

populateHolidaySelect();
holidaySelect.selectedIndex = 0;
updateCountdown();
setInterval(updateCountdown, 1000);
