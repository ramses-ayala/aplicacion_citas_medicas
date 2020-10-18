
(function(){

    
    
    
    let cita = {};

    let citas = [];
    

    document.querySelector('#formulario').addEventListener('submit', guardarCita);

    function guardarCita(event){
        event.preventDefault();

        let error = document.querySelector('#error');

        const mascota = document.querySelector('#mascota').value;
        const dueno = document.querySelector('#dueno').value;
        const fecha = document.querySelector('#fecha').value;
        const hora = document.querySelector('#hora').value;
        const sintomas = document.querySelector('#sintomas').value;

        if(mascota != '' && dueno != '' && fecha!= '' &&
        hora != '' && sintomas != '')
        {
            
            error.style.display = "none";
            error.innerHTML = '';

            cita = {mascota, dueno, fecha, hora, sintomas};

            citas.push(cita);

            console.log("CITAS: ",citas);

        }else{            
            error.style.backgroundColor = "white";
            error.style.borderRadius = "5px";
            error.style.display = "block";
            error.style.padding = ".625rem .625rem";
            error.style.fontSize = "20px";
            error.innerHTML = "Todos los campos deben ser llenados";
            return false;
        }

    }
     
    
    function uuid4(){
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        })
    }
        


})();