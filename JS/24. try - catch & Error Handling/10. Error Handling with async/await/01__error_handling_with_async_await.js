async function getData() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
        );

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Failed to fetch:", error.message);
    } finally {
        console.log("Fetch attempt complete 🧹");
    }
}

getData();