import invoice from './invoice'

const precio = document.querySelector('#precio')
const cantidad = document.querySelector('#cantidad')
const estado = document.querySelector('#estado')
const form = document.querySelector('#invoice-form')
const resultadoInput = document.querySelector('resultado-div')

form.addEventListener('submit', event => {
    event.preventDefault()

    let info = ''
    const subTotal = invoice.calcularSubtotal(cantidad, precio)
    info += `#${cantidad} * $${precio} = $${subTotal}`
    info += `${estado}(8.25%) = $${invoice.calcularIva(subTotal, estado)}`

    resultadoInput.innerHTML = info
})