let totalSeconds = 0;

setInterval(() => {
    ++totalSeconds
    const hours = pad(parseInt(Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))))
    const minutes = pad(parseInt(Math.floor((totalSeconds % (60 * 60)) / 60)))
    const seconds = pad(totalSeconds % 60)

    document.getElementById('countdown').innerHTML = `${hours}:${minutes}:${seconds}`
}, 1000);


function pad(val) { 
    var valString = val.toString();
    if (valString.length < 2) {
        return "0" + valString;
    } else {    
        return valString;
    }
}
