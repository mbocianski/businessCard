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
    const apiKey = 'dd2aa1835fb9f9096215627b1dc5e07';
    // Latitude and longitude for Lake Forest, CA
    const lat = 33.646944;
    const lon = -117.686102;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const temp = data.current.temp;
            const weather = data.current.weather[0].description;
            document.getElementById('weather-display').innerHTML = `Lake Forest, CA: ${temp.toFixed(1)}°F - ${weather}`;
        })
        .catch(error => console.error('Error fetching weather:', error));
});
