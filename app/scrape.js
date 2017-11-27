const puppeteer = require('puppeteer');

let scrape = async function() {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    await page.goto('https://yumba.ca/#/on-the-menu');

    const result = await page.evaluate(() => {
        let data = []; // Create an empty array that will store our data
        let elements = document.querySelectorAll('#entreeMeals .meal-name span'); // Select all Products

        for (var element of elements) { // Loop through each product
            let name = element.innerText;
            data.push(name); // Push an object with the data onto our array
        }

        return data; // Return our data array
    });

    browser.close();
    return result; // Return the data
};

module.exports = scrape;
