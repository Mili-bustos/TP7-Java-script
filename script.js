class Estudiante{
    constructor(nombre, apellido, curso, nota1, nota2, nota3){
        this.nombre = nombre
        this.apellido = apellido
        this.curso  = curso
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
    }

    getNombre(){
        return this.nombre
    }

    getApellido(){
        return this.apellido
    }

    getCurso(){
        return this.curso
    }

    getPromedio(){
        var promedio=(this.nota1+this.nota2+this.nota3)/3
        return promedio
    }

    getMejorNota(){
        if (this.nota1>this.nota2 && this.nota1>this.nota3){
            return this.nota1
        }

        else if (this.nota2>this.nota1 && this.nota2>this.nota3){
            return this.nota2
        }

        else {
            return this.nota3
        }
    }


    getPeorNota(){
        if (this.nota1<this.nota2 && this.nota1<this.nota3){
            return this.nota1
        }

        else if (this.nota2<this.nota1 && this.nota2<this.nota3){
            return this.nota2
        }

        else {
            return this.nota3
        }
    }

}


class Escuela {
    constructor(){
        this.ListaEstudiantes = []
    }

    agregarEstudiante(estudiante){
        this.ListaEstudiantes.push(estudiante)
        alert("Alumno agregado: " + estudiante.getNombre())
        document.getElementById("formCrear").reset();
    }

    getEstudiantes(){
        return this.ListaEstudiantes
    }

    getEstudiantePorCurso(curso){
        var lista = []
        for (var i = 0; i < this.ListaEstudiantes.length; i ++){
            var estudiante = this.ListaEstudiantes[i]
            if (estudiante.getCurso() == curso){
                lista.push(estudiante)
            }
        }

        return lista
    }


    getEstudiantePorPromedio(promedio){
        var lista = []
        for (var i = 0; i < this.ListaEstudiantes.length; i ++){
            var estudiante = this.ListaEstudiantes[i]
            if (estudiante.getPromedio() >= promedio){
                lista.push(estudiante)
            }
        }

        return lista
    }

    getPeorNota(){
        var peorEstu = this.ListaEstudiantes[0]
        for (var i = 0; i < this.ListaEstudiantes.length; i ++){
            var estudiante = this.ListaEstudiantes[i]
            if (estudiante.getPeorNota() < peorEstu.getPeorNota()){
                peorEstu=estudiante
            }
        }
        return peorEstu
    }

    getMejorNota(){
        var MejorEstu = this.ListaEstudiantes[0]
        for (var i = 0; i < this.ListaEstudiantes.length; i ++){
            var estudiante = this.ListaEstudiantes[i]
            if (estudiante.getMejorNota() > MejorEstu.getMejorNota()){
                MejorEstu=estudiante
            }
        }
        return MejorEstu
    }

    getPromedioGeneral(){
        var suma = 0
        for (var i = 0; i < this.ListaEstudiantes.length; i ++){
            var estudiante = this.ListaEstudiantes[i]
            suma += estudiante.getPromedio()
        }  
        var promedioGeneral = suma/this.ListaEstudiantes.length
        return promedioGeneral
    }

    getEstudiantePorNombre(nombre){
        for (var i = 0; i < this.ListaEstudiantes.length; i ++){
            var estudiante = this.ListaEstudiantes[i]
            if (estudiante.getNombre() === nombre){
                return estudiante
            }
        }  
        alert("NO SE ENCUENTRA")
       
    }
}


var escuela = new Escuela()

function crear(){
    document.getElementById("crear").style.display = "block"
    document.getElementById("listar").style.display = "none"
    document.getElementById("buscar").style.display = "none"
}

function listar(){
    document.getElementById("crear").style.display = "none"
    document.getElementById("listar").style.display = "block"
    document.getElementById("buscar").style.display = "none"

}

function buscar(){
    document.getElementById("crear").style.display = "none"
    document.getElementById("listar").style.display = "none"
    document.getElementById("buscar").style.display = "block"
}

function enviar(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var curso = document.getElementById("curso").value;
    var nota1 = parseInt(document.getElementById("n1").value);
    var nota2 = parseInt(document.getElementById("n2").value);
    var nota3 = parseInt(document.getElementById("n3").value);

    var estudiante = new Estudiante(nombre, apellido, curso, nota1, nota2, nota3)
    escuela.agregarEstudiante(estudiante)

    document.getElementById("formCrear").reset();
}

function mostrarTodos(){
    document.getElementById("formCurso").style.display = "none"
    document.getElementById("formPromedio").style.display = "none"

    var estudiantes = escuela.getEstudiantes()
    var contenedor = document.getElementById("listado")

    contenedor.innerHTML = ""
    for (var i = 0; i < estudiantes.length;i++){
        var estu = estudiantes[i]
        contenedor.innerHTML += estu.getNombre() + " " + estu.getApellido() + " Curso: " + estu.getCurso() + "<br>"
    }
}

function mostrarCurso(){
    document.getElementById("formCurso").style.display = "block"
    document.getElementById("formPromedio").style.display = "none"
}

function mostrarPromedio(){
    document.getElementById("formCurso").style.display = "none"
    document.getElementById("formPromedio").style.display = "block"
}

function porCurso(){
    var estudiantes = escuela.getEstudiantePorCurso(document.getElementById("cursoBuscar").value)
    var contenedor = document.getElementById("listado")

    contenedor.innerHTML = ""
    for (var i = 0; i < estudiantes.length;i++){
        var estu = estudiantes[i]
        contenedor.innerHTML += estu.getNombre() + " " + estu.getApellido() + " Curso: " + estu.getCurso() + "<br>"
    }
}_

function porPromedio(){
    var estudiantes = escuela.getEstudiantePorPromedio(parseInt(document.getElementById("promedioBuscar").value))
    var contenedor = document.getElementById("listado")

    contenedor.innerHTML = ""
    for (var i = 0; i < estudiantes.length;i++){
        var estu = estudiantes[i]
        contenedor.innerHTML += estu.getNombre() + " " + estu.getApellido() + " Promedio: " + estu.getPromedio().toFixed(2) + "<br>"
    }
}

function mostrarPorNombre(){
    document.getElementById("formNombre").style.display = "block"
}

function porNombre(){
    var estu = escuela.getEstudiantePorNombre(document.getElementById("nombreBuscar2").value)
    var contenedor = document.getElementById("resultado")

    contenedor.innerHTML += estu.getNombre() + " " + estu.getApellido() + " Nombre: " + estu.getCurso() + "<br>"
}

function mostrarMejorPromedio(){
    var estudiante = escuela.getMejorNota()

    document.getElementById("resultado").innerHTML = estudiante.getNombre() + " " + estudiante.getApellido() + " - " + estudiante.getPromedio()

}
function mostrarEnGeneral(){
    var promedio = escuela.getPromedioGeneral()
    document.getElementById("resultado").innerHTML =
    "Promedio general: " + promedio.toFixed(2) + "<br> Cantidad de estudiantes: " + escuela.getEstudiantes().length
}