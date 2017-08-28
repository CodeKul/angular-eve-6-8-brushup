var txtDt = document.getElementById('txtDt');
var empDv = document.getElementById('empDv');
txtDt.onkeyup = function () {
    empDv.innerHTML = txtDt.value;
}