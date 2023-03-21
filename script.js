const arrayProductos = [];
document.getElementById('main__table').style.display = 'none'
const formulario = document.querySelector('.main__formulario');
formulario.addEventListener('submit', agregarProducto)

function agregarProducto(prevenirEvento){
    document.getElementById('main__table').style.display = ''
    prevenirEvento.preventDefault();
    let nombreProducto = document.getElementById('idNombreProducto').value;
    let precioProducto = document.getElementById('idPrecioProducto').value;
    let cantidadProducto = document.getElementById('idCantidadProducto').value;
    let categoriaProducto = document.getElementById('producto').value;

    producto = {
        nombreProducto,
        precioProducto,
        cantidadProducto,
        categoriaProducto
    }
    arrayProductos.push(producto);
    formulario.reset();

    console.log(arrayProductos);

    let addProductos = document.getElementById('main__table').insertRow(1);
    let newNombreProducto = addProductos.insertCell(0);
    newNombreProducto.textContent = nombreProducto;
    let newPrecioProducto = addProductos.insertCell(1);
    newPrecioProducto.textContent = precioProducto;
    let newCantidadProducto = addProductos.insertCell(2);
    newCantidadProducto.textContent = cantidadProducto;
    let newCategoriaProducto = addProductos.insertCell(3);
    newCategoriaProducto.textContent = categoriaProducto;

    let editar = addProductos.insertCell(4);
    let botonEditar = document.createElement('button');
    botonEditar.textContent = 'Editar';
    editar.appendChild(botonEditar);
    botonEditar.addEventListener('click', () => editarProducto(addProductos));
    
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    editar.appendChild(botonEliminar);
    botonEliminar.addEventListener('click', () => eliminarProducto(addProductos));

};

function eliminarProducto(fila) {
    let index = fila.rowIndex - 1;
    arrayProductos.splice(index, 1);
    document.getElementById('main__table').deleteRow(fila.rowIndex);
}

function editarProducto(fila) {
    let index = fila.rowIndex - 1;
    let producto = arrayProductos[index];
    document.getElementById('idNombreProducto').value = producto.nombreProducto;
    document.getElementById('idPrecioProducto').value = producto.precioProducto;
    document.getElementById('idCantidadProducto').value = producto.cantidadProducto;
    document.getElementById('producto').value = producto.categoriaProducto;

    // Eliminamos la fila anterior y el objeto correspondiente del array
    arrayProductos.splice(index, 1);
    document.getElementById('main__table').deleteRow(fila.rowIndex);
}
