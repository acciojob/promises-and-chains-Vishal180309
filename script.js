document.getElementById("voting-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);

    if (name === "" || age === NaN) {
        alert("Please enter valid details.");
        return;
    }

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(name);
            } else {
                reject(name);
            }
        }, 4000);
    });

    promise.then((name) => {
        alert(`Welcome, ${name}. You can vote.`);
    }).catch((name) => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
