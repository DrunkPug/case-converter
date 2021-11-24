function upperCase(){
    document.getElementById("text").value = document.getElementById("text").value.toUpperCase();
}

function lowerCase(){
    document.getElementById("text").value = document.getElementById("text").value.toLowerCase();
}

function properCase(){
    let i = 0;
    let text_arr = document.getElementById("text").value.split(' ');     //separate words
    while (i < text_arr.length) {
        text_arr[i] = text_arr[i].charAt(0).toUpperCase() + text_arr[i].slice(1); //Upper case for each first letter
        i++;
    }
    document.getElementById("text").value = text_arr.join(' ');          //split words with spaces
}

function sentenceCase(){
    let i = 0;
    let text_arr = document.getElementById("text").value.split('. ');   //separate sentences
    while (i < text_arr.length) {
        text_arr[i] = text_arr[i].charAt(0).toUpperCase() + text_arr[i].slice(1).toLowerCase(); //Upper case for each first letter in sentence
        i++;
    }

    document.getElementById("text").value = text_arr.join('. ');        //split sentences
}

function download(filename, text){
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain; charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function downloadFile(){
    download('text.txt', document.getElementById("text").value);
}

document.getElementById("upper-case").addEventListener("click", upperCase);
document.getElementById("lower-case").addEventListener("click", lowerCase);
document.getElementById("proper-case").addEventListener("click", properCase);
document.getElementById("sentence-case").addEventListener("click", sentenceCase);
document.getElementById("save-text-file").addEventListener("click", downloadFile);