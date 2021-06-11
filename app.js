function getNumber(num){
    var reslt = document.getElementById('digit')
    reslt.value += num 
}
function clrNum(){
    var reslt = document.getElementById('digit')
    reslt.value = ""
}
function res(){
    var reslt = document.getElementById('digit')
    reslt.value = eval(reslt.value)
}
