(()=>{
    const formSearch = document.getElementById('rating-form');
    const ratingSection = document.getElementById('rating-start');
    const ratingSelectionDescription = document.getElementById('rating-selected-description');
    const thankYouCardSearch = document.getElementById('thank-you');

    const initialize = () => {
        formSearch.addEventListener('submit', onSubmitForm);
    }

    function onSubmitForm (event){
        event.preventDefault();
        let selectedRating = 0;
        [...event.target].forEach(element => {
            if (element.checked){
                selectedRating = element.value;
            }
        });
        ratingSection.classList.add('hideable-card');
        ratingSelectionDescription.textContent = `You selected ${selectedRating} out of 5`
        thankYouCardSearch.classList.remove("hideable-card");
    }

    initialize();
})();