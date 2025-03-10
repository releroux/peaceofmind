document.addEventListener('DOMContentLoaded', function () {
    const dateRangePicker = document.getElementById('date-range');
    const commentField = document.getElementById('comment');
    const whatsappButton = document.querySelector('.whatsapp-button');

    // Store the base WhatsApp number
    // This will be replaced during build by GitHub Actions
    const whatsappNumber = '718772881';

    // Calculate dates
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() + 2);

    const maxDate = new Date(today);
    maxDate.setMonth(today.getMonth() + 3);

    // Function to update WhatsApp message
    function updateWhatsAppMessage() {
        let message = "Hi, I'm interested in your house sitting services";
        
        // Get selected dates from flatpickr
        const selectedDates = fpInstance.selectedDates;
        
        // If dates are selected, include them in the message
        if (selectedDates && selectedDates.length === 2) {
            // Format dates (YYYY/MM/DD to DD/MM/YYYY for better readability)
            const startDate = selectedDates[0].toLocaleDateString();
            const endDate = selectedDates[1].toLocaleDateString();
            
            message += `\nFrom ${startDate} to ${endDate}.`;
        }
        
        // Add comment if provided
        const comment = commentField.value.trim();
        if (comment) {
            message += `\nComments: \n${comment}`;
        }
        
        // Update the WhatsApp button href
        whatsappButton.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    }

    // Add event listener to the comment field
    commentField.addEventListener('input', updateWhatsAppMessage);

    // Initialize flatpickr
    const fpInstance = flatpickr(dateRangePicker, {
        mode: 'range',
        minDate: minDate,
        maxDate: maxDate,
        dateFormat: 'Y/m/d',
        onChange: function(selectedDates) {
            updateWhatsAppMessage();
        }
    });

    // Initialize with default message
    updateWhatsAppMessage();
});