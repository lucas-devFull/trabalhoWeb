$('#btn').click(function (params) {

    if (isEmptyNumeric()) {
        return;
    }
        
    let peso = $('#peso').val();
    let altura = $('#altura').val();
    let imc = (peso.replace(',','.')) / (Math.pow(altura.replace(',','.'),2))
    
    $('#result').text(parseFloat(imc).toFixed(2));
    $('#result-imc').text(resultImc(imc));
    
})
function isEmptyNumeric() {
    for (let index = 0; index < $('input').length; index++) {
        const element = $('input')[index];
        if ($(element).val() == "" || !$.isNumeric($(element).val())) {
            iziToast.error({
                title: 'Erro',
                message: 'Verifique os campos',
                position: 'topCenter'
            });
            
            return true;
        }else {
            return false;
        }
        
    }
}

function resultImc(result) {
    if (result < 19) {
        return  "17 e 18,49	Abaixo do peso";
    } else if (result < 25) {
        return "18,5 e 24,99 Peso normal";
    } else if (result < 30) {
        return "25 e 29,99	Acima do peso";
    } else if (result < 35) {
        return "30 e 34,99	Obesidade I";
    } else if (result < 40) {
        return "35 e 39,99	Obesidade II (severa)";
    } else {
        return "40	Obesidade III (mórbida)"
    }
}

    // Entre 17 e 18,49	Abaixo do peso
// Entre 18,5 e 24,99	Peso normal
// Entre 25 e 29,99	Acima do peso
// Entre 30 e 34,99	Obesidade I
// Entre 35 e 39,99	Obesidade II (severa)
// Acima de 40	Obesidade III (mórbida)