document.addEventListener('DOMContentLoaded', function () {
    const holidaySelector = document.getElementById('holiday-selector');
    const countdownElement = document.getElementById('countdown');
    const holidayNameElement = document.getElementById('holiday-name');
    const holidayYearElement = document.getElementById('holiday-year');
    const modal = document.getElementById('holiday-modal');
    const closeModal = document.querySelector('.close');
    const holidayDetailsElement = document.getElementById('holiday-details');
    const holidayTitleElement = document.getElementById('holiday-title');


    const holidays = [
        { name: 'Újév', details: 'Újév - Az év első napja!', date: '01-01' },
        { name: 'Nemzeti Ünnep', details: 'Nemzeti Ünnep - Március 15.', date: '03-15' },
        { name: 'Húsvétvasárnap', details: 'Húsvétvasárnap - Jézus feltámadása!', date: '03-31' },
        { name: 'Húsvéthétfő', details: 'Húsvéthétfő - Húsvét utáni hétfő.', date: '04-01' },
        { name: 'Munka Ünnepe', details: 'Munka Ünnepe - A munka és munkások ünnepe!', date: '05-01' },
        { name: 'Pünkösdvasárnap', details: 'Pünkösdvasárnap - A Szentlélek eljövetelének ünnepe!', date: '05-19' },
        { name: 'Pünkösdhétfő', details: 'Pünkösdhétfő - Pünkösdi hétfő, hagyományos fürdőzés és locsolkodás.', date: '05-20' },
        { name: 'Szent István Ünnepe', details: 'Szent István Ünnepe - Magyar államalapítás és István király szentté avatása.', date: '08-20' },
        { name: 'Október 23.', details: 'Október 23. - A magyar forradalom és szabadságharc ünnepe.', date: '10-23' },
        { name: 'Mindenszentek', details: 'Mindenszentek - A szentek és mártírok emlékünnepe.', date: '11-01' },
        { name: 'Karácsony', details: 'Karácsony - Jézus születése.', date: '12-25' },
        { name: 'Karácsony Második Napja', details: 'Karácsony Második Napja - A karácsonyi ünnepség folytatása.', date: '12-26' },
        { name: 'Szilveszter', details: 'Szilveszter - Az év utolsó napja, búcsúztatás.', date: '12-31' }
    ];


    holidays.forEach(holiday => {
        const option = document.createElement('option');
        option.value = holiday.name.toLowerCase().replace(/ /g, '_');
        option.textContent = holiday.name;
        holidaySelector.appendChild(option);
    });


    function updateCountdown(holiday) {
        const now = new Date();
        let holidayDate = new Date(`${holiday.date}-${now.getFullYear()}`);

        if (holidayDate < now) {
            holidayDate.setFullYear(holidayDate.getFullYear() + 1); 
            holidayYearElement.textContent = (now.getFullYear() + 1);
            holidayNameElement.textContent = `${holiday.name} most ${holidayYearElement.textContent}-ben lesz!`;
        } else {
            holidayYearElement.textContent = now.getFullYear(); 
            holidayNameElement.textContent = `Következő ünnep: ${holiday.name} ${holidayYearElement.textContent}`;
        }

        const timeRemaining = holidayDate - now;
        let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

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

    holidaySelector.addEventListener('change', function () {
        const selectedHoliday = holidays.find(h => h.name.toLowerCase().replace(/ /g, '_') === holidaySelector.value);
        if (selectedHoliday) {
            updateCountdown(selectedHoliday);
            showModal(selectedHoliday);
        }
    });

    updateCountdown(holidays[0]);

    setInterval(() => {
        const selectedHoliday = holidays.find(h => h.name.toLowerCase().replace(/ /g, '_') === holidaySelector.value);
        if (selectedHoliday) {
            updateCountdown(selectedHoliday);
        }
    }, 1000);
});
