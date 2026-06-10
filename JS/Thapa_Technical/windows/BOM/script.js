function alertMessage() {
    window.alert("This is an Alert message!!!");
}

// ====================== JS History Object =======================
// 1. Go Back
function goBack() {
    history.back();
}

// 2. Go Forward
function goForward() {
    history.forward();
}

// 3. Move Back or Forward
function moveBackForward() {
    history.go(-1);
}





// ====================== JS Location Object ======================
// 1. Reload the Page
function reloadPage() {
    location.reload();
}

// 2. Navigate Page using Replace
function navigatePageReplace() {
    window.location.replace("https://www.youtube.com");
}

// 3. Navigate Page using Assign
function navigatePageAssign() {
    window.location.assign("https://www.facebook.com");
}





// ======================= JS Screen Object =======================
// 1. Screen Width & Height
console.log(window.screen.width);
console.log(window.screen.height);

// 2. Screen Available Width & Height
console.log(window.screen.availWidth);
console.log(window.screen.availHeight);

// 3. Screen Color Depth
console.log(window.screen.colorDepth);

// 4. Screen Orientation
console.log(window.screen.orientation);

// 5. Screen Pixel Depth
console.log(window.screen.pixelDepth);