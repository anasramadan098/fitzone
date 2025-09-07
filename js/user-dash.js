const userLinks = document.querySelectorAll('.user-links li a');
let contentSections = document.querySelectorAll('.statics > *:not(.user-info) ');




userLinks.forEach((link , i) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links
        userLinks.forEach(navLink => navLink.classList.remove('active'));
        // Add active class to the clicked link
        e.target.classList.add('active');

        contentSections.forEach(section => section.classList.remove('active'));

        // Show the corresponding content section
        contentSections.forEach((section, index) => {
            if (index === i) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});


userLinks[0].click();

function specifClick(clickElement , sectionElement) {
    clickElement.addEventListener('click' , e => {
        contentSections.forEach(section => section.classList.remove('active'));
        sectionElement.classList.add('active');
    })
}






// Set initial active state for Dashboard
document.addEventListener('DOMContentLoaded', () => {
    const initialLink = document.querySelector('.user-links li a[data-target="dashboard-content"]');
    if (initialLink) {
        initialLink.click();
    }
});



document.querySelectorAll('.methods .method').forEach(method => {
    method.addEventListener('click' , e => {
        e.preventDefault();
        document.querySelectorAll('.methods .method').forEach(method => method.classList.remove('active'))
        method.classList.add('active');
        method.parentElement.parentElement.querySelector('input[name="method"]').value = method.dataset.type.toLowerCase();
    })
})


function AutoFillLocation(e) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                // Use free reverse geocoding service (OpenStreetMap Nominatim)
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`)
                    .then(response => response.json())
                    .then(data => {
                        if (data && data.display_name) {
                            const address = data.display_name.split(',').slice(1).join(',');
                            e.parentElement.querySelector('input[name="address"]').value = address;
                            console.log('User Address:', address);
                            
                            // Extract address components from the response
                            const components = data.address || {};
                            console.log('Address Components:', {
                                street: components.road || components.street || '',
                                city: components.city || components.town || components.village || '',
                                state: components.state || components.province || '',
                                country: components.country || '',
                                postal_code: components.postcode || ''
                            });
                        } else {
                            console.log('No address found for the given coordinates');
                        }
                    })
                    .catch(error => {
                        console.error('Error getting address:', error);
                        // Fallback: just log coordinates if geocoding fails
                        console.log('User Location:', {
                            latitude: latitude,
                            longitude: longitude
                        });
                    });
            },
            function(error) {
                console.error('Error getting location:', error.message);
            }
        );
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}