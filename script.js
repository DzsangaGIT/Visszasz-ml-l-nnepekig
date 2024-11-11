document.addEventListener('DOMContentLoaded', function () {
    const holidaySelector = document.getElementById('holiday-selector');
    const countdownElement = document.getElementById('countdown');
    const holidayNameElement = document.getElementById('holiday-name');
    const holidayYearElement = document.getElementById('holiday-year');
    const modal = document.getElementById('holiday-modal');
    const closeModal = document.querySelector('.close');
    const holidayDetailsElement = document.getElementById('holiday-details');
    const holidayTitleElement = document.getElementById('holiday-title');

    function calculateEaster(year) {
        const a = year % 19;
        const b = Math.floor(year / 100);
        const c = year % 100;
        const d = Math.floor(b / 4);
        const e = b % 4;
        const f = Math.floor((b + 8) / 25);
        const g = Math.floor((b - f + 1) / 3);
        const h = (19 * a + b - d - g + 15) % 30;
        const i = Math.floor(c / 4);
        const k = c % 4;
        const l = (32 + 2 * e + 2 * i - h - k) % 7;
        const m = Math.floor((a + 11 * h + 22 * l) / 451);
        const month = Math.floor((h + l - 7 * m + 114) / 31);
        const day = ((h + l - 7 * m + 114) % 31) + 1;
        return new Date(year, month - 1, day);
    }

    const holidays = [
        { name: 'Újév', details: 'Újév - Az év első napja!', date: '01-01' },
        { name: 'Nemzeti Ünnep', details: 'Nemzeti Ünnep - Március 15.', date: '03-15' },
        { name: 'Húsvétvasárnap', details: 'Húsvétvasárnap - Jézus feltámadása!', date: 'easter' },
        { name: 'Húsvéthétfő', details: 'Húsvéthétfő - Húsvét utáni hétfő.', date: 'easter+1' },
        { name: 'Munka Ünnepe', details: 'Munka Ünnepe - A munka és munkások ünnepe!', date: '05-01' },
        { name: 'Pünkösdvasárnap', details: 'Pünkösdvasárnap - A Szentlélek eljövetelének ünnepe!', date: 'easter+49' }, 
        { name: 'Pünkösdhétfő', details: 'Pünkösdhétfő - Pünkösdi hétfő, hagyományos fürdőzés és locsolkodás.', date: 'easter+50' },
        { name: 'Szent István Ünnepe', details: 'Szent István Ünnepe - Magyar államalapítás és István király szentté avatása.', date: '08-20' },
        { name: 'Október 23.', details: 'Október 23. - A magyar forradalom és szabadságharc ünnepe.', date: '10-23' },
        { name: 'Mindenszentek', details: 'Mindenszentek - A szentek és mártírok emlékünnepe.', date: '11-01' },
        { name: 'Karácsony', details: 'Karácsony - Jézus születése.', date: '12-25' },
        { name: 'Karácsony Második Napja', details: 'Karácsony Második Napja - A karácsonyi ünnepség folytatása.', date: '12-26' },
        { name: 'Szilveszter', details: 'Szilveszter - Az év utolsó napja, búcsúztatás.', date: '12-31' }
    ];

    function calculateHolidayDate(holiday, year) {
        if (holiday.date === 'easter') {
            return calculateEaster(year);
        }
        if (holiday.date.includes('easter+')) {
            const easterDate = calculateEaster(year);
            const additionalDays = parseInt(holiday.date.split('+')[1], 10);
            easterDate.setDate(easterDate.getDate() + additionalDays);
            return easterDate;
        }
        const [month, day] = holiday.date.split('-');
        return new Date(year, month - 1, day);
    }

    function updateCountdown(holiday) {
        const now = new Date();
        const holidayDate = calculateHolidayDate(holiday, now.getFullYear());

        if (holidayDate < now) {
            holidayDate.setFullYear(holidayDate.getFullYear() + 1);
            holidayYearElement.textContent = holidayDate.getFullYear();
            holidayNameElement.textContent = `${holiday.name} most ${holidayYearElement.textContent}-ben lesz!`;
        } else {
            holidayYearElement.textContent = now.getFullYear();
            holidayNameElement.textContent = `Következő ünnep: ${holiday.name} ${holidayYearElement.textContent}`;
        }

        const timeRemaining = holidayDate - now;
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.textContent = `Hátra van: ${days} nap ${hours} óra ${minutes} perc ${seconds} másodperc`;
    }

    function showModal(holiday) {
        holidayTitleElement.textContent = holiday.name;
        holidayDetailsElement.textContent = holiday.details;
        modal.style.display = 'block';
    }

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    holidays.forEach(holiday => {
        const option = document.createElement('option');
        option.value = holiday.name.toLowerCase().replace(/ /g, '_');
        option.textContent = holiday.name;
        holidaySelector.appendChild(option);
    });

    updateCountdown(holidays[0]);

    holidaySelector.addEventListener('change', function () {
        const selectedHoliday = holidays.find(h => h.name.toLowerCase().replace(/ /g, '_') === holidaySelector.value);
        if (selectedHoliday) {
            updateCountdown(selectedHoliday);
            showModal(selectedHoliday);
        }
    });

    setInterval(() => {
        const selectedHoliday = holidays.find(h => h.name.toLowerCase().replace(/ /g, '_') === holidaySelector.value);
        if (selectedHoliday) {
            updateCountdown(selectedHoliday);
        }
    }, 1000);
});
