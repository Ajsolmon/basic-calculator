var number = document.getElementsByClassName('numb')

function insert(num){
    document.form.calcdisp.value = document.form.calcdisp.value+num
}

function equal(e){
    var exp = document.form.calcdisp.value
    if(exp){
        document.form.ansdisp.value = eval(exp)
    }
}

document.body.addEventListener('keyup', function(e){
    if(e.keyCode===13){
        equal()
    }
}
)

function clean(){
    document.form.calcdisp.value = ''
    document.form.ansdisp.value = ''
}