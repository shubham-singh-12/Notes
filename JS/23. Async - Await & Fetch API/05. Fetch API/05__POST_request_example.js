// ================================================================= POST Request Example =================================================================

async function postData() {
    let newPost = {
        title: "Hello World",
        body: "My post body",
        userId: 1,
    };

    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
    });

    let data = await response.json();
    console.log(`Server response ${data}`);
};

postData();