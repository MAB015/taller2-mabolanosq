const form = document.getElementById('form') as HTMLFormElement;
const btnGuardar = document.getElementById('btn-guardar') as HTMLButtonElement; 

btnGuardar.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('Ingreso a la validación del formulario')

    // La validación del formulario

    // Obtener valores de los input
    const tipoDocumento = document.getElementById('tipoDocumento') as HTMLInputElement;
    const numeroDocumento = document.getElementById('numeroDocumento') as HTMLInputElement;
    const nombre = document.getElementById('nombre') as HTMLInputElement;
    const apellido = document.getElementById('apellido') as HTMLInputElement;
    const celular = document.getElementById('celular') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const github = document.getElementById('github') as HTMLInputElement;
    const linkedin = document.getElementById('linkedin') as HTMLInputElement;

    console.log(tipoDocumento.value);
})