export default class Pizza {
    constructor(farinha = 200, agua = 134, azeite = 5, sal = 4.5, fermento = 3.5, acucar = 5, ovo = 56) {
        this.farinha = farinha,
        this.agua = agua,
        this.azeite = azeite,
        this.sal = sal,
        this.fermento = fermento,
        this.acucar = acucar,
        this.ovo = ovo

        //Peso base da receita de 408g
    }

    calcularAreaBase() {
        let area = Math.PI * this.raio * this.raio
        return area
    }

    calcularVolume() {
        let volume = this.calcularAreaBase() * this.altura
        return volume
    }

    //Relacionamento entre volume e a densidade da massa indepente do tamanho
    //Regra de negócio da densidade da massa que é: 0.85 g/cm³
    getPesoUnitario() {
        return this.calcularVolume() * this.densidade
    }
}