// ===================================================================== GET as text ======================================================================

async function main() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    let text = await response.text();

    console.log(typeof text);               // string
};

main();