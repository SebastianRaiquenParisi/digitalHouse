const superheroes =[
    {
        nombre: "Titan",
        poder: 'Levanta 100 kilos',
        saludar: function (){
            return "soy un " + this.nombre;
        }
            
    },
    {
        nombre: "Leviatan",
        poder: 'Levanta 110 kilos',
        saludar: function (){
            return "soy un " + this.nombre;
        }
    }
];
module.exports = superheroes;