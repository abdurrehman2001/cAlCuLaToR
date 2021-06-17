function getNumber(num){
    var reslt = document.getElementById('digit')
    var lstnum = reslt.value.slice(reslt.value.length - 1)
    var oprs = ["+" , "-" , "*" , "/" , "."]
    if(oprs.indexOf(lstnum) !== -1 && oprs.indexOf(num) !== -1){
        reslt.value = reslt.value.slice(0 , reslt.value.length - 1) + num

    }
    else{
        reslt.value += num
    }
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
    reslt.value = reslt.value.slice(0 , reslt.value.length - 1)
}