// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get references to the button and modal elements
    const openModalButton = document.getElementById('open-modal-button');
    const exampleModal = document.getElementById('example-modal');
    const closeModalButton = document.getElementById('close-modal-button');
    const datePicker = document.getElementById('datePicker');

    // Function to open the modal
    const openModal = () => {
        exampleModal.open = true;

        console.log("Modal opened"); // Debugging line
    };

    const printDate = () => {
        console.log(datePicker.value);

        datePicker.

        datePicker.value = "2024-05-20";
    }

    // Function to close the modal
    const closeModal = () => {
        exampleModal.active = false;
        console.log("Modal closed"); // Debugging line
    };

    // Add event listeners to the buttons
    openModalButton.addEventListener('click', openModal);
    closeModalButton.addEventListener('click', closeModal);

    // datePicker.addEventListener('click',printDate);
    datePicker.addEventListener('calciteDatePickerChange',printDate);


    // Debugging: Verify the elements are correctly referenced
    console.log("openModalButton:", openModalButton);
    console.log("exampleModal:", exampleModal);
    console.log("closeModalButton:", closeModalButton);
});
