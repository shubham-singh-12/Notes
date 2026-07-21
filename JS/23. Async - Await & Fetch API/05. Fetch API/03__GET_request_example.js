// ================================================================= GET Request Example ==================================================================

async function main() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();

    console.log(data);
    console.log(data.title);
    console.log(data.body);
};

main();