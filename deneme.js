const fetch = require('node-fetch');
const xml2js = require('xml2js');

// Fetch the XML data from TCMB
fetch('https://www.tcmb.gov.tr/kurlar/today.xml')
  .then(response => response.text())
  .then(data => {
    // Parse the XML using xml2js
    xml2js.parseString(data, (err, result) => {
      if (err) {
        console.error('Error parsing XML:', err);
        return;
      }

      // Find the USD data in the parsed XML object
      const currencies = result.Tarih_Date.Currency;
      const usdCurrency = currencies.find(currency => currency.$.CurrencyCode === 'USD');

      // Extract buying and selling rates for USD
      const buyingRate = usdCurrency.ForexBuying[0];
      const sellingRate = usdCurrency.ForexSelling[0];

      // Log the rates to the console
      console.log(`USD Buying Rate: ${buyingRate}`);
      console.log(`USD Selling Rate: ${sellingRate}`);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
