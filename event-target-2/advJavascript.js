for (let i = 1; i <= 16; i++) {
    let myDiv = document.createElement('div');
    document.body.appendChild(myDiv);
}

let divs = document.querySelectorAll('div');
for (let i = 0; i < divs.length; i++) {
    divs[i].onclick = function (e) {
        i % 2 === 0 ? e.target.style.backgroundColor = bgChange() :
        e.target.style.backgroundColor = 'rgb(255,255,0)';
    }
}

random = (numebr) => Math.floor(Math.random() * numebr);

bgChange = () => 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    
