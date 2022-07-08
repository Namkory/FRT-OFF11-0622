
let result = "";
let space = " "
for (let i = 0; i < 10; i++) {
    result += i + space;
    
}
console.log(result);

document.write(result);

var htmlelement_nutbam = document.getElementById("demoClickEvent");

// Gán onclick bằng biểu thức phương thức (phương thức có thể có
// một tham số là đối tượng MouseEvent, vd  function (ev) {}
htmlelement_nutbam.onclick = function () {
    // Gán ngày hiện tại vào nội dung nút bấm
    htmlelement_nutbam.innerText = Date();
}