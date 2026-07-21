// =============================================================== .then() vs async / await ===============================================================

// ====================== OLD WAY - .then() =======================
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (response) {
        response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });

// NEW WAY - async / await
async function main() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
        );
        let data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

main();
