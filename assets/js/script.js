// const div = document.querySelector('.elem');
// div.classList.add('www');
// console.log(div.className);

// const div = document.querySelector('.elem');
// div.classList.remove('www');
// console.log(div.className);

// const div = document.querySelector('.elem');
// console.log(div.classList.contains('www'));

// const div = document.querySelector('.elem');
// if (div.classList.contains('www')) {
//     div.classList.remove('www');
// } else{
//     div.classList.add('www');
// }
// console.log(div.className);

// const div = document.querySelector('.elem');
// console.log(div.classList.length)

// const div = document.querySelector('.elem');
// for (let i = 0; i < div.classList.length; i++) {
//     alert(div.classList[i]);
// }

// let elem = document.querySelector('#elem');
// elem.style.cssText = "color: red; font-size: 30px";

// let elem = document.querySelector('#elem');
// function clicks() {
//     alert(elem.tagName);
// }

// let elem = document.querySelector('#elem');
// function clicks() {
//     alert(elem.tagName.toLowerCase());
// }

// let elem = document.querySelectorAll('.elem');
// for (let index = 0; index < elem.length; index++) {
//     elem[index].innerHTML = elem[index].innerHTML + elem[index].tagName.toLowerCase();
// }

// let ol = document.querySelector('#ol');
// let li = document.createElement('li');
// li.innerHTML = "пункт";
// ol.appendChild(li);


// const words = ['azat', 'sanek', 'kostya', 'timur'];
// let ul = document.querySelector('#ul');
// for (let word in words) {
//     let li = document.createElement('li');
//     li.innerHTML = words[word];
//     console.log(li);
//     ul.appendChild(li);
// }

// let div = document.querySelector('#elem');
// div.insertAdjacentHTML('beforebegin', '<span>span с текстом</span>');
// let div = document.querySelector('#elem');
// div.insertAdjacentHTML('afterend', '<span>span с текстом</span>');
// let div = document.querySelector('#elem');
// div.insertAdjacentHTML('afterbegin', '<span>span с текстом</span><br>');
// let div = document.querySelector('#elem');
// div.insertAdjacentHTML('beforeend', '<span>span с текстом</span><br>');

// function remove() {
//     let div = document.querySelector('#parent');
//     p = document.querySelector('#child');
//     div.removeChild(p);
// }

// function deleteLi(li) {
//     ol = document.getElementById("ol");
//     ol.removeChild(li);
// }

// function cloneInput() {
//     input = document.getElementById("input");
//     let cloneInput = input.cloneNode(true);
//     document.body.appendChild(cloneInput);
// }

// function getFirstChild() {
//     let div = document.getElementById('elem');
//     div.firstElementChild.style.color = "red";
// }

// function getFirstChild() {
//     let div = document.getElementById('elem');
//     div.lastElementChild.style.color = "red";
// }

// function changeChildren() {
//     let div = document.getElementById("elem");
//     for (let child of div.children) {
//         child.innerHTML = child.innerHTML + "!";
//     }
// }

// function changeSibling() {
//     let div = document.getElementById("elem");
//     div.previousElementSibling.innerHTML = div.previousElementSibling.innerHTML + "!";
// }

// function changeSibling() {
//     let div = document.getElementById("elem");
//     div.nextElementSibling.innerHTML = div.nextElementSibling.innerHTML + '!';

// }

// function changeParent() {
//     let child = document.getElementById("child");
//     child.parentNode.parentNode.style.color = "red";
// }

// function getWidth() {
//     let elem = document.querySelector("#p");
//     console.log(elem.clientWidth);
// }
// getWidth();

// function getHeight() {
//     let elem = document.querySelector("#p");
//     console.log(elem.clientHeight);
// }
// getHeight();

// function getSize() {
//     let p = document.getElementById("p");
//     let style = getComputedStyle(p);
//     console.log(style.width, style. height);
// }
// getSize();

// function getScrolledSize() {
//     let elem = document.getElementById("div");
//     console.log(elem.scrollTop);
// }

// function getScrolledSize() {
//     let elem = document.getElementById("div");
//     console.log(elem.scrollLeft);
// }

// function getScrolledSize() {
//     let elem = document.getElementById("div");
//     elem.scrollTop = 100;
// }

// function getScrolledSize() {
//     let elem = document.getElementById("div");
//     let scroll = elem.scrollHeight;
//     alert(scroll + "px");
// }

// function getScrolledSize() {
//     let elem = document.getElementById("div");
//     let scroll = elem.scrollWidth;
//     alert(scroll + "px");
// }

// function getScrolledSize() {
//     let elem = document.getElementById("div");
//     let scroll = elem.scrollHeight;
//     scroll -= 100;
//     elem.scrollTop -= scroll;
// }

// задача с pageXOoffset и pageYOoffset не работают потому что пишется что это устаревший элемент.

// function scrollTo() {
//     alert('Оно работает но не прокручивается из за маленькго количества контента')
//     window.scrollTo(300, 500);
// }

// function scrollBy() {
//     alert('Оно работает но не прокручивается из за маленькго количества контента')
//     window.scrollBy(0, 300);
// }

// function func() {
// 	window.scrollTo(0, document.body.clientHeight);
// }

// function func() {
// 	window.scrollBy(0, 400);
// }

// function func() {
// 	let body = document.documentElement;
// 	if (body.scrollHeight - body.scrollTop == body.clientHeight) {
// 		window.scrollTo(0, 100);
// 	}
// }

function func() {
	let startWidth = this.offsetWidth;
	let startHeight = this.offsetHeight;
	this.style.width = startWidth * 2 + 'px';
	this.style.height = startHeight * 2 + 'px';
}