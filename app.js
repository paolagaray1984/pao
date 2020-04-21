//crear calculadora
    function sumar(valor1,valor2){
    return valor1+valor2
}
        function restar(valor1,valor2){
            return valor1-valor2
        }
        
        function multiplicar(valor1 , valor2){
            if(valor1 == 0 || valor2 ==0){
                return "No puedo hacer la operaón"
            }else{
                return valor1 * valor2
            }
         
        }
        
        function dividir(valor1 , valor2){
            if(valor2 == 0){
                return 'No se puede'
            }
            
            return valor1 / valor2
        }
        
     

        const sumar = require('./modulos/sumar')
        const restar = require('./restar')
        const dividir = require('./dividir')
        const multiplicar = require('./multiplicar')



        console.log(sumar(2, 4));
       
        
        