function Soma(){
    const valor1 = document.getElementById("valor1")
    const valor2 = document.getElementById("valor2")
    const n1= Number(valor1.value)
    const n2= Number(valor2.value)
                                    
            const soma = n1 * n1
            const soma2 = n2 / soma            
                                    
            if (soma2 <= 16.9){
                let comota = "Muito abaixo do peso"
            }
            else if (soma2 >= 17 && soma2 <= 18.4){
                comota = "Abaixo do peso"
            }
            else if (soma2 >= 18.5 && soma2 <= 24.9){
                comota = "Peso normal"
            }
            else if (soma2 >= 25 && soma2 <= 29.9){
                comota = "Acima do peso"
            }
            else if (soma2 >= 30 && soma2 <= 34.9){
                comota = "Obesidade grau I"
            }
            else if (soma2 >= 35 && soma2 <= 40){
                comota = "Obesidade grau II"
            }
            else {
                comota = "Obesidade grau III"
            }
        document.getElementById("resultado").innerText = `Resultado: ${soma2.toFixed(1)}, voce está: ${comota}`
}