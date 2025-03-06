//your JS code here. If required.
const form = document.getElementById('votingForm');
        const ageInput = document.getElementById('age');
        const nameInput = document.getElementById('name');

        form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    const userName = nameInput.value.trim();
    const userAge = parseInt(ageInput.value);

    if (!userName || isNaN(userAge)) {
        alert('Please enter valid details'); // Removed period to match Cypress test
        return;
    }

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userAge > 18) {
                resolve(Welcome, ${userName}. You can vote.);
            } else {
                reject(Oh sorry ${userName}. You aren't old enough.);
            }
        }, 4000);
    })
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
