
let $botonTodos = document.getElementById("filtro-todos");
let $botonPerros = document.getElementById("filtro-perro");
let $botonGatos = document.getElementById("filtro-gato");

let articulos = document.getElementsByClassName("articulo");
console.log(articulos);

$botonTodos.addEventListener("click", () =>filtrarArticulos("todos"));
$botonPerros.addEventListener("click", () =>filtrarArticulos("perros"));
$botonGatos.addEventListener("click", () =>filtrarArticulos("gatos"));

function filtrarArticulos(title){

    for(let i = 0; i < articulos.length; i++){

        let articulo = articulos[i];
        let articuloTitle = articulo.getAttribute("title");
        console.log(articulo);
        
        if ((title === "todos") || (articuloTitle === title)){

            articulo.classList.remove("ocultar");
            
        }else{
            articulo.classList.add("ocultar");
        }

    }

}