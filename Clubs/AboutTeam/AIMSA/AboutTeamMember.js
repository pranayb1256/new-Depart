const cards = document.querySelectorAll('.team-card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.2
        });

        cards.forEach(card => {
            observer.observe(card);
        });