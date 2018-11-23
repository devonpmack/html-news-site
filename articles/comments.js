function addComment() {
    let comments = document.querySelector("#comments");
    let comment_box = document.querySelector("#comment_box");

    // Create comment div
    let comment_div = document.createElement("div");
    comment_div.appendChild(document.createTextNode(comment_box.value));

    // Put the div on the screen
    comments.appendChild(comment_div);

    // Reset comments box
    comment_box.value = '';

    // Return false so that the form gets submitted
    return false;
}
