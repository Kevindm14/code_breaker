function calcularSubtotal(cantidad, precioprecio, cantidad){
        return cantidad * precio
    
    return precio * cantidad;
}

function calcularIva(subtotal,estado) {
    let iva = 0;

    switch (estado) {
      case "CA":
        iva = subtotal * 8.25;
        break;
      default:
          return iva;
    }

    return iva;
}

function calcularDescuento(subtotal){
    return 0;
}

export default deaulinvoice = {
  calcularIva,
  calcularDescuento
}