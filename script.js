// JavaScript: Handle "Add to Cart" Button
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });

    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.dataset.value;
            const stars = this.parentNode.children;
    
            // Reset semua bintang
            for (let i = 0; i < stars.length; i++) {
                stars[i].classList.remove('selected');
            }
    
            // Tandai bintang yang dipilih
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('selected');
            }
    
            // Anda bisa menambahkan logika untuk menyimpan rating di sini
            console.log(`Rating yang dipilih: ${rating}`);
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const fadeElements = document.querySelectorAll('.fade-in');
    
        function checkVisibility() {
            const triggerBottom = window.innerHeight / 5 * 4;
    
            fadeElements.forEach(element => {
                const boxTop = element.getBoundingClientRect().top;
    
                if (boxTop < triggerBottom) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });
        }
    
        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Check visibility on page load
    });
});