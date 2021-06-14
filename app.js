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
function bckspce(){
    var reslt = document.getElementById('digit')
    var bck = reslt.value.toString().slice(0,-1)
    reslt.value = bck
}