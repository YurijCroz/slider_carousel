
const body = document.body;

const setImg = document.querySelectorAll('div.min-size');

const next = document.querySelector('div.next');
const previous = document.querySelector('div.previous');

function nextFun() {
    let current = document.querySelector('div.min-size.full-size');  //находим элемент у кого сейчас full-size
    let nextEl = current.nextElementSibling;  //находим кто следующий по списку от full-size
    eventCheck(current, nextEl); //отправляем на проверку
};

function previousFun() {
    let current = document.querySelector('div.min-size.full-size');  //находим элемент у кого сейчас full-size
    let previousEl = current.previousElementSibling;  //находим кто предыдущий по списку от full-size
    eventCheck(current, previousEl); //отправляем на проверку
};

function eventCheck(current, element) {
    if(element!==null){                        //проверка на то что следующий(или предыдущий) есть
        resizeEl(current, element);             //вызов функции по смене full-size
    };
    if(element===null){                        //проверка на тот случай если следующего(или предыдущего) нету и развязка
        if(current.nextElementSibling===null){ //следующего нету тогда переключем с последнего на первый
            let nextEl = current.parentNode.children[0] //следующий будет первый элемент текущей ноды
            resizeEl(current, nextEl);               //вызов функции по смене full-size
        };
        if(current.previousElementSibling===null){  //предыдущего нету тогда переключаемся на последний
            let previousEl = current.parentNode.children;  //следущий будет последний
            resizeEl(current, previousEl[previousEl.length-1]); //вызов функции по смене full-size
        };
    };
};

function resizeEl(current, element) {
    current.classList.remove('full-size'); //удаляем у текущего full-size
    element.classList.add('full-size');    //и присваеваем следующему full-size
    backgroundImageReplacement();
};

function backgroundImageReplacement(){
    let imgBG = document.querySelector('div.full-size img').getAttribute('src'); //берем адресс картинки элемента full-size
    body.style.backgroundImage = `url(${imgBG})`;                         //присваеваем полученный адресс на бэк body
};

next.addEventListener('click', nextFun);

previous.addEventListener('click', previousFun);

document.addEventListener('keyup', function(event){  //перелистывание стрелками клавиатуры
    if(event.code==='ArrowRight') nextFun();
    if(event.code==='ArrowLeft') previousFun();
});

//let timer = 4000;
//setInterval(nextFun, timer);   //цикличный таймер авто прокрутки =)

backgroundImageReplacement();