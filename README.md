

# Holiday Countdown with Modal and Dynamic Year Update

This project is a simple web-based countdown timer for holidays in Hungary. The website allows the user to select a holiday from a dropdown menu and displays a countdown to the selected holiday. The countdown updates in real-time and automatically adjusts for the next year's occurrence of the holiday when the current year's holiday has passed. It also includes a modal with a description of the holiday, and the modal can be closed either by clicking the close button or clicking outside the modal.

### Features:
- **Holiday Countdown:** Displays a countdown to the selected holiday.
- **Automatic Year Update:** Once a holiday's countdown finishes for the year, the year is updated to the next one (e.g., 2024 → 2025).
- **Holiday Modal:** Displays a description of the selected holiday in a modal.
- **Responsive Design:** Works across devices with a clean and simple layout.
- **Interactive Elements:** Modal closes by clicking outside or on the close button.

---


## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/DzsangaGIT/Visszasz-ml-l-nnepekig.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Visszasz-ml-l-nnepekig.git
    ```

3. Open the `szam.html` file in your preferred web browser to view the project.

---

## Usage

1. **Selecting a Holiday:**
   - Use the dropdown menu at the top of the page to select a holiday from the list.
   
2. **Countdown Timer:**
   - Once a holiday is selected, a countdown to the event will be displayed in days, hours, minutes, and seconds.
   
3. **Holiday Description:**
   - Clicking on a holiday will open a modal displaying a brief description of the holiday.

4. **Automatic Year Update:**
   - If a holiday has passed in the current year, the countdown will automatically update to show the next year’s holiday.

5. **Modal Interaction:**
   - You can close the modal by clicking the "X" button in the top right corner or by clicking anywhere outside the modal content.

---


## Technologies Used

- **HTML5:** For the structure of the web page.
- **CSS3:** Custom styles for the layout and design (responsive, modal styles).
- **JavaScript:** For the logic behind the countdown, modal, holiday updates, and event handling.
- **CSS Animations:** Used for interactive effects like modal pop-up, hover, and countdown transitions.

---

## How It Works

1. **Holiday Data:**
   - The holidays are stored in an array with each holiday's name, date, and description.

2. **Dropdown Menu:**
   - The dropdown is dynamically populated with holiday names. When the user selects a holiday, the corresponding countdown is displayed.

3. **Countdown Logic:**
   - The countdown timer calculates the time remaining for the next occurrence of the holiday.
   - If the current holiday has already passed this year, the timer updates to reflect the next year (e.g., 2024 → 2025).

4. **Holiday Modal:**
   - When a user clicks on a holiday, a modal window appears with more details about the selected holiday.
   - The modal can be closed either by clicking the close button or by clicking outside the modal.

5. **Event Listeners:**
   - An event listener updates the countdown every second.
   - Another event listener checks if the user clicks outside the modal content area to close it.

---

## Example Holiday Data

Here are the holidays available in the dropdown:

- **Újév** (New Year's Day) - January 1st
- **Nemzeti Ünnep** (National Day) - March 15th
- **Húsvétvasárnap** (Easter Sunday) - March 31st
- **Húsvéthétfő** (Easter Monday) - April 1st
- **Munka Ünnepe** (Labor Day) - May 1st
- **Pünkösdvasárnap** (Pentecost Sunday) - May 19th
- **Pünkösdhétfő** (Pentecost Monday) - May 20th
- **Szent István Ünnepe** (St. Stephen's Day) - August 20th
- **Október 23.** (October 23rd) - National Day
- **Mindenszentek** (All Saints' Day) - November 1st
- **Karácsony** (Christmas Day) - December 25th
- **Karácsony Második Napja** (Boxing Day) - December 26th
- **Szilveszter** (New Year's Eve) - December 31st

---

## License

This project is open-source and available under the MIT License.

---

## Acknowledgments

- Thanks to the open-source community for making it possible to build web apps like this using simple web technologies (HTML, CSS, JavaScript).
- Inspiration for the design was drawn from clean and minimalist UI trends, like Apple’s design philosophy.

---

That's it! You can now keep track of upcoming holidays and see a real-time countdown, along with details about each event, in an interactive and visually appealing way. Enjoy using the site and feel free to modify or enhance it further!
