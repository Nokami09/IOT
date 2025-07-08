const endpoint = "http://172.16.1.172";

function getLed1() {
    fetch(endpoint + "/led1", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            Led1.style.backgroundColor = "blue";
            Led1Image.src = "./assets/led-on.png";
        } else {
            Led1.style.backgroundColor = "#579fff";
            Led1Image.src = "./assets/led-off.png";
        }
    });
}

function getLed2() {
    fetch(endpoint + "/led2", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            Led2.style.backgroundColor = "blue";
            Led2Image.src = "./assets/led-on.png";
        } else {
            Led2.style.backgroundColor = "#579fff";
            Led2Image.src = "./assets/led-off.png";
        }
    });
}

function getLed3() {
    fetch(endpoint + "/led3", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            Led3.style.backgroundColor = "blue";
            Led3Image.src = "./assets/led-on.png";
        } else {
            Led3.style.backgroundColor = "#579fff";
            Led3Image.src = "./assets/led-off.png";
        }
    });
}

function setLed1() {
    fetch(endpoint + "/led1", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
    
}

function setLed2() {
    fetch(endpoint + "/led2", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function setLed3() {
    fetch(endpoint + "/led3", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function setLed4() {
    
}

getLed1();
getLed2();
getLed3();