var km,ga, consumo, precio=15000

km = parseFloat(prompt("Ingrese la cantidad de kilometros"))
ga = parseFloat(prompt("Ingrese la cantidad de galones"))

consumo = km/ga
document.write("El comsumo de tu carro fue:  " + consumo)
document.write("y tu gasto en dienero fue:  " + consumo*precio)