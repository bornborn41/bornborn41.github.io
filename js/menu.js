
function backgroundMenu() {
    var checkBox = document.getElementById("toggle-btn");
    var div = document.getElementById("top");
    // var bg = document.body;

    if (checkBox.checked === true) {
        let div = document.createElement('div');
        div.id = 'top';
        document.getElementById("addtop").appendChild(div);
        div.style.position = "fixed"
        div.style.zIndex = "1"
        div.style.width = "100%"
        div.style.height = "100%"
        div.style.background = "rgba(0, 0, 0, 0.90)"
    } else {
        document.getElementById("top").remove();
    }
}