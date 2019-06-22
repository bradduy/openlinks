//define function open new links
function openLinkYoutube() {
    window.open("https://www.youtube.com/");
}
function openLinkFB() {
    window.open("https://www.facebook.com/");
}
function openLinkCafef() {
    window.open("http://cafef.vn/");
}
function openLinkHTr() {
    window.open("https://hamtruyen.com/");
}
function openLinkJVN() {
    window.open("http://jvn.edu.vn/");
}

//Get element by id and call functions 
document.getElementById('go-to-youtube').onclick = openLinkYoutube;
document.getElementById('go-to-facebook').onclick = openLinkFB;
document.getElementById('go-to-cafef').onclick = openLinkCafef;
document.getElementById('go-to-hamtruyen').onclick = openLinkHTr;
document.getElementById('go-to-jvn').onclick = openLinkJVN;

