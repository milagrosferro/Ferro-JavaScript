function calcularPromedios(nombre, notaUno, notaDos, notaTres) {

    let notaFinal = (notaUno + notaDos + notaTres) / 3

    if (notaFinal >= 7) {

        alert(`El/la alumno/a ${nombre} aprobo con un promedio de ${parseInt(notaFinal)}`)

    } else {

        alert(`El/la alumno/a ${nombre} no apruba ya que tiene un promedio de ${parseInt(notaFinal)}`)

    }

}

let nombreAlumno = prompt("ingrese el nombre del alumno")
let notaUno = parseInt(prompt("ingrese la primer nota:"))
let notaDos = parseInt(prompt("ingrese la segunda nota:"))
let notaTres = parseInt(prompt("ingrese la tercer nota:"))

calcularPromedios(nombreAlumno, notaUno, notaDos, notaTres)