
// obtiene la diferencia de años
const calcularDiferencia = (year) => {
    return new Date().getFullYear() - year
}

// obtener incremento por marca 
const incrementoPorMarca = (marca) => {
    let incremento;
    switch (marca) {
        case 'europeo':
            incremento = 1.30
            break;
        case 'americano':
            incremento = 1.15
            break;
        case 'asiatico':
            incremento = 1.05
            break;

        default:
            break;
    }
    return incremento
}
// obtener incremento por plan
const incrementoPorPlan = (plan) => {

    return (plan === 'basico') ? 1.2 : 1.5;
}
// cambiar primera letra  mayuscula
const primerMayuscula = palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1);

export { calcularDiferencia, incrementoPorMarca, incrementoPorPlan, primerMayuscula }