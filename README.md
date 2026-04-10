#  Currency Converter Web App

A simple and dynamic **Currency Converter** built using **HTML, CSS, and JavaScript**.
This project fetches real-time exchange rates, updates country flags, and provides a smooth user experience with optimized API usage.



##  Features

*  Convert between multiple currencies
*  Live exchange rates using API
*  Dynamic country flags based on currency
*  Swap currencies with one click
*  Responsive and clean UI



##  Technologies Used

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Currency API (CDN-based)
* Flags API



##  Project Structure

currency-convertor
│
|
├── index.html       
├── style.css        
├── code.js         
├── app.js         
├── README.md        
│
└── images/           
     └── convertor.png

# How It Works

# 1. Dropdown Population

* Currency options are dynamically added using JavaScript.
* Data comes from `countryList` in `code.js`.

# 2. Flag Update

* Each currency is mapped to a country code.
* Flag updates automatically when user changes currency.

# 3. Exchange Rate Fetching

* API is called using:


/currencies/{currency}.json


* Example:


usd.json → contains all rates for USD


# 4. Conversion Logic


finalAmount = amount × exchangeRate .


# 5. Example Output

here is written example:

100 USD = 138.54 CAD



#  How to Run

1. Download or clone the project
2. Open `index.html` in browser
3. Enter amount and select currencies
4. Click **Get Exchange Rate**



# Notes

* Exchange rates may slightly vary (real-time data)
* Some currencies share flags (approximation used)
* Internet connection required for API


# Future Improvements

* Searchable dropdown
* Loading spinner
* Historical exchange rates
* Professional UI (Fintech style)


# Author

**Renu Joshi**

# Final Thoughts

This project demonstrates:

* DOM manipulation
* API integration
* Async JavaScript
* Performance optimization.

This is leanring purpose . Feel free to fork and review.
