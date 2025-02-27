
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the form from submitting
        document.getElementById("successMessage").style.display = "block"; // Show success message
        this.reset(); // Optional: Reset form fields after submission
    });


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
   
        // Interactive JavaScript (optional)
        document.addEventListener("DOMContentLoaded", function () {
            const exploreButton = document.querySelector('.btn-primary');
            exploreButton.addEventListener('click', function () {
                alert("Explore the mall sections!");
            });
        });