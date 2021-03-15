function readConfig() {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", "../../../src/models/Configs/app.configs.variables.xml", false);
    xhttp.send();
    xmlDoc = xhttp.responseXML;

    return xmlDoc.getElementsByTagName("host")[0].childNodes[0].nodeValue;
}
function readConfigInit() {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", "src/models/Configs/app.configs.variables.xml", false);
    xhttp.send();
    xmlDoc = xhttp.responseXML;

    return xmlDoc.getElementsByTagName("host")[0].childNodes[0].nodeValue;
}