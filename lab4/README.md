In this lab, you will complete the implementation of a currency conversion calculator that parses a JSON string format containing exchanges rates from US dollars (USD) to several other currencies. The exchange data and format is provided by: https://openexchangerates.org/

To complete the webpage, you must complete the following tasks:

    Create a DOMContentLoaded event listener that updates the options within the <select> element with ID toCurrency using innerHTML such that:
        The first <option> element is: <option value="" disabled selected>Select currency</option>
        Only the currencies listed in the rates property of the exchangeRates object should appear in the dropdown
        The <option> element for each currency should show the full currency name followed by the currency's abbreviation in parentheses
            Ex: Canadian Dollar (CAN)
        The value for each <option> element should be the currency abbreviation
        The allCurrencies object in the provided JavaScript template provides a mapping from all possible abbreviations to full currency name
        After updating the <select> element in the DOM, execute the following command. When using materialize (https://materializecss.com), this command is required whenever the select element is updated.
            $('select').formSelect();
    Create a change event listener for the select dropdown such that:
        Convert the user-entered US dollars to the selected currency using the rates listed in the exchangeRates object. Display the converted currency with two decimal digits.
            Ex: If the user-entered US dollars is 100.00, Canadian Dollar (CAN) is elected, and the exchange rate is "CAD": 1.316853, the resulting converted currency is 131.69
        Display the resulting converted currency by updating the readonly <input> element with ID resultCurrency
        Update the associated label for the resultCurrency <input> element to the selected currency's full currency name, currency abbreviation in parentheses, and colon
            Ex: Canadian Dollar (CAN):
    Create a click event listener for the Update Rates button that:
        Updates the exchangeRates object using the JSON string provided in the <textarea> element with ID exchangeRates
        Updates the select dropdown such that only the currencies listed in the rates property of the updated exchangeRates object appear in the dropdown
            After updating the <select> element in the DOM, you must execute the following command. When using materialize (https://materializecss.com), this command is required whenever the select element is updated.
                $('select').formSelect();
        Resets the readonly <input> element with ID resultCurrency to display "---.--
        Resets the associated label for the resultCurrency <input> element to display "To Currency ():"


