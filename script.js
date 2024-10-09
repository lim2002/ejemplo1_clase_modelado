document.getElementById("startButton").addEventListener("click", runAlgorithm);

function runAlgorithm() {
    // Obtener el valor de NMI ingresado por el usuario
    let NMI = parseInt(document.getElementById("nmiInput").value);

    if (isNaN(NMI) || NMI <= 0) {
        alert("Por favor, ingrese un número válido para NMI.");
        return;
    }

    let NUM = NMI;  // Usar NMI como el valor de NUM en el algoritmo
    let CIT = 0;
    let Z = 0;
    let X1 = 0, X2 = 0, X3 = 0;
    let X1C, X2C, X3C, ZC, rX1C, rX2C, rX3C;

    while (CIT < NUM) {
        CIT++;
        // Generar número aleatorio para XC (Distribución Uniforme)
        rX1C = Math.random();
        X1C = rX1C * (10 - 0);  // Generación aleatoria

        // Generar X2C
        rX2C = Math.random();
        X2C = Math.round((0 + (100 - 0)) * rX2C);

        if ((X1C + X2C) <= 20) {
            // Generar X3C
            rX3C = Math.random();
            X3C = 1 + (2-1 )* rX3C;

            // Calcular ZC
            ZC = (2 * X1C + 3 * X2C - X3C);

            if (ZC > Z) {
                Z = ZC;
                X1 = X1C;
                X2 = X2C;
                X3 = X3C;
            }
        }
    }

    // Mostrar resultados
    document.getElementById("output").innerHTML = `
        <p>Resultado final:</p>
        <p>Z: ${Z}</p>
        <p>X1: ${X1}</p>
        <p>X2: ${X2}</p>
        <p>X3: ${X3}</p>
    `;
}
