
let body = document.body;

const setImg = document.querySelectorAll('div.min-size');

const next = document.querySelector('div.next');
const previous = document.querySelector('div.previous');

function nextFun(){
    let current = document.querySelector('div.min-size.full-size');  //находим элемент у кого сейчас full-size
    let nextEl = current.nextElementSibling;  //находим кто следующий по списку от full-size
    if(nextEl!==null){                        //проверка на то что следующий есть
        current.classList.remove('full-size'); //удаляем у текущего full-size
        nextEl.classList.add('full-size');    //и присваеваем следующему full-size
    }
    if(nextEl===null){                        //проверка на тот случай если следующего нету
        current.classList.remove('full-size'); //удаляем у текущего full-size
        nextEl = current.parentNode.children[0] //следующий будет первый элемент текщей ноды
        nextEl.classList.add('full-size');     //и присваеваем следующему full-size
    }
    let imgBG = document.querySelector('div.full-size img').getAttribute('src'); //берем адресс картинки элемента full-size
    body.style.backgroundImage = `url(${imgBG})`;                         //присваеваем полученный адресс на бэк body
}

function previousFun(){
    let current = document.querySelector('div.min-size.full-size'); //тоже самое только в обратном направление
    let previousEl = current.previousElementSibling;
    if(previousEl!==null){
        current.classList.remove('full-size');
        previousEl.classList.add('full-size');
    }
    if(previousEl===null){
        current.classList.remove('full-size');
        previousEl = current.parentNode.children;
        previousEl[previousEl.length-1].classList.add('full-size');
    }
    let imgBG = document.querySelector('div.full-size img').getAttribute('src');
    body.style.backgroundImage = `url(${imgBG})`;
}

next.addEventListener('click', nextFun);
previous.addEventListener('click', previousFun);

//let timer = 4000
//setInterval(nextFun, timer)   //цикличный таймер авто прокрутки =)

let imgBG = document.querySelector('div.full-size img').getAttribute('src');
body.style.backgroundImage = `url(${imgBG})`;