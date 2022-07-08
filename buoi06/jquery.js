let element = $('.box') 

console.log(element);

let arr = ['PHP', 'JS', 'CSS', 'JSON', 'NOTJS']

const random = Math.floor(Math.random() * arr.length);

const change = () => {
    element.text(arr[random]);
}

change();

function myFunction() {
    timeout = setTimeout(change(), 3000);
  }

  myFunction();
