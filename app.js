function getNum(num) {

    var rsl = document.getElementById("rsl");
rsl.value += num;
}

function clearRsl(){
    var rsl = document.getElementById("rsl");
    rsl.value = "";
}

function showresult(){
    var rsl = document.getElementById("rsl");
    rsl.value = eval(rsl.value);
}