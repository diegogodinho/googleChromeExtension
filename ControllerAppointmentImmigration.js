var contollerAppointment = (function () {
    function setDefaultValues() {
    }

    function init() {
        chrome.storage.sync.set({
            category: 'All',
            SubCategory: 'All',
            ConfirmGNIB: "Renewal",
            GNIBNo: 750921,
            GNIBExDT: '05/12/2020',
            GivenName: 'diego',
            SurName: 'Ferreira',
            DOB: '27/08/1987',
            Nationality: 'Brazil',
            Email: 'diegogodinho.ferreira@yahoo.com.br',
            FamAppYN: 'No',
            PPNoYN: 'Yes',
            PPNo: 'YE128976'
        }, function () {
            console.log("All the values were submitted!");
        });
    }
    return { init: init };
})();

chrome.runtime.onInstalled.addListener(contollerAppointment.init);
