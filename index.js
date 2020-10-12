const esceneOne = document.querySelector('.one');
const esceneTwo = document.querySelector('.two');
const envelope = document.querySelector('#motion-demo');

setTimeout(() => {
    esceneOne.style.visibility = "hidden";
    envelope.style.display = "block";
}, 2000);

setTimeout(() => {    
    envelope.style.display = "none";
    esceneTwo.style.visibility = "visible";
}, 5000);