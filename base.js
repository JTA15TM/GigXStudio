onload = function () {
    const title = document.title;
    const content = document.getElementsByTagName("body")[0].innerHTML;

    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'base.html', false)
    xhr.send(null)

    if (xhr.status === 200){
        const baseContent = xhr.responseText;
        window.document.write(baseContent);

        window.document.title = title;
        document.getElementById("root").innerHTML = content;
    }
}