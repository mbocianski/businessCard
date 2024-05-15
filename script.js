document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for links with hashes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    });

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'aa94a2d070e32bdc15798a6c33dad699'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Lake%20Forest,US-CA&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Log the data to see what is received
            const temp = data.main.temp;
            const weather = data.weather[0].main;
            document.getElementById('weather-display').innerHTML = `Lake Forest, CA: ${temp.toFixed(1)}°F - ${weather}`;
        })
        .catch(error => console.error('Error fetching weather:', error));
});
