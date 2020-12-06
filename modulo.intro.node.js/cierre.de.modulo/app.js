/* requerir módulo autos */
let autos = require("./autos");
let concesionaria = {
    /* completar */
   autos: autos,
   buscarAuto:function(patente){
      let resultado = null;
      for (let auto of this.autos){
            if(patente==auto.patente){
               resultado=auto;
            }
      }
      return resultado;
   },
   venderAuto:function(patente){
            let auto = this.buscarAuto(patente);
            auto!=null?auto.vendido=true:console.log("este auto no se encuentra");
   },
   autosParaLaVenta:function(){
      return this.autos.filter(auto=>!auto.vendido)
   },
   autos0KM:function(){
      let autos0km = this.autosParaLaVenta().filter(auto=>auto.km<100);
      return autos0km;
   },
   listaDeVentas:function(){
      let autosVendidos = this.autos.filter(auto=>auto.vendido)
     return autosVendidos.map(auto=>auto.precio)
   }
};