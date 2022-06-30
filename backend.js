class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }



getFullName() {
    console.log(`El nombre del Usuario es: ``${this.nombre}`)
}

addMascota(){
 console.log(Usuario.mascotas)
}
countMascotas(){
console.log(Usuario.mascotas++)
}

addBook(){
  console.log(Usuario.libros)  
}

getBookNames(){
    console.log(libros.nombre)
}

}

