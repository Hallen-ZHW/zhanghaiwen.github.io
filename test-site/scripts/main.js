let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2-icon.png');
    }
    else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName || myName == null) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla酷毙了,' + myName;
    }
}
myButton.onclick = function () { setUserName() };

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla酷毙了,' + storedName;
}
