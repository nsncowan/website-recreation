window.onload = function() {

const body = document.querySelector("body");

const oldHeading = document.querySelector("h1");
oldHeading.remove();

const newHeading = document.createElement("h1");
newHeading.append("webpage recreation practice");

const p1 = document.createElement("p");
p1.append("this html webpage was created with JS");

const secondHeading = document.createElement('h1');
secondHeading.append('Facts about the Multicolored Tanager');

const ul = document.createElement('ul');

const liOne = document.createElement('li');
const liTwo = document.createElement('li');

liOne.append('It is endemic to the mountains of Colombia.')
liTwo.append('It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.');
ul.append(liOne,liTwo);

const h2 = document.createElement('h2');
h2.append('Source');

const a = document.createElement('a');
a.setAttribute('href', 'https:/en.wikipedia.org/wiki/Multicoloured_tanager');
a.innerHTML = 'Wikipedia';


body.append(newHeading, p1, secondHeading, ul, h2,a);



};
