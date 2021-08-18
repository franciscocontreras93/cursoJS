const pj = {
  nombre: "Francisco",
  apellido: "Contreras",
  edad: 28,
  pasatiempos: ["Leer", "Musica", "Computacion"],
  soltero: false,
  contacto: {
    email: "francisco@gmail.com",
    tlf: "4121738423",
  },
  ubicacion: {
    lat: null,
    long: null,
  },
  saludar() {
    return `Hola me llamo ${this.nombre} ${this.apellido}`;
  },

  imprimirPasatiempos() {
    this.pasatiempos.forEach(function (el) {
      console.log(el);
    });
  },
  imprimirContacto() {
    let { email, tlf } = pj.contacto;
    console.log(`Correo: ${email}, Telefono: ${tlf}`);
  },
};

class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  sonar() {
    console.log("Hago sonidos");
  }

  saludar() {
    console.log(`Hola! mi nombre es ${this.nombre}`);
  }
};

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }

  sonar() {
    console.log("Guauuuu Guauuuuu!!!!!");
  }

  static queEres() {
    console.log("Soy un metodo estatico");
  }

  get getRaza() {
    return this.raza;
  }

  set setRaza(raza) {
    this.raza = raza;
  }
}



const retPropertieValue=function(prop){
    if(pj.hasOwnProperty(prop)){
        let value = pj[prop.toLowerCase()]
        console.log(value)
        return value
        
    } else {
        alert("No existe la propiedad")
    }
    
}

retPropertieValue("nombre")

!function(d,w,c){
  // console.log(d);
  // console.log(w);
  // console.log(c);
}(document,window,console);



