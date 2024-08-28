document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input');
  
    inputs.forEach(input => {
        const label = input.nextElementSibling;

        // Check initial state
        if (input.value !== '') {
            label.classList.add('active');
        }

        // Add focus event listener
        input.addEventListener('focus', function() {
            this.classList.add('focused');
            label.classList.add('active');
            label.style.color = '#1ED9D9';
        });
    
        // Add blur event listener
        input.addEventListener('blur', function() {
            if (this.value === '') {
                label.classList.remove('active');
            }
            this.classList.remove('focused');
            label.style.color = '#EF2571';
        });
    });
});
