function main(){
    formatBattery();
}
main();
function formatBattery(){
    var bat = document.getElementById("battery");
    var batstring = bat.innerHTML;
    batstring = batstring.replace(/Battery .: /, "")
      .split(",");
    batstring.forEach(line =>{
        line = line.trim();
        var para = document.createElement("p"),
            text = document.createTextNode(line);
        para.appendChild(text);
        bat.parentNode.appendChild(para);
    });
    bat.remove();
}
