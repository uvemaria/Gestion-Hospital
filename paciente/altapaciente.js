$("#btnAceptarAltaPaciente").click(altaPaciente);

function altaPaciente()
{

    //if(validarPaciente())
    //{
        var nif = frmAltaPaciente.txtDNI.value.trim();
        var sSS = frmAltaPaciente.txtSSPaciente.value.trim();
        var sNombre = frmAltaPaciente.txtNombrePaciente.value.trim();
        var sApe = frmAltaPaciente.txtApellidosPaciente.value.trim();
        var sDir = frmAltaPaciente.txtDireccionPaciente.value.trim();
        var sEmail = frmAltaPaciente.txtEmailPaciente.value.trim();
        var sTlf = frmAltaPaciente.txtTelefonoPaciente.value.trim();
        var oPaciente = new Paciente(nif,sNombre,sApe,sDir,sEmail,sTlf,sSS);
        //var sDatos = $("#frmAltaPaciente").serialize();
        var sDatos = 'datos='+JSON.stringify(oPaciente);

       $.ajax({
            url: "paciente/altapaciente.php",
            async: true,
            cache: false,
            method: "POST",
            data: sDatos,
            dataType: 'json',
            success: respuestaAltaPaciente
        });
		
		//$.post("paciente/altapaciente.php", sDatos, respuestaAltaPaciente, 'json');
		
    //}
}

function respuestaAltaPaciente(oDatosDevueltos)
{
    // oDatosDevueltos[0]  --- si hay o no error
    if (oDatosDevueltos[0] == false) 
    {
        // Mensaje
        alert(oDatosDevueltos[1]);

        // Como ha ido bien cierro el formulario
        $("#frmAltaPaciente").hide("normal").get(0).reset();

    } 
    else
    {
        alert(oDatosDevueltos[1]);
    }
}

/*function validarPaciente(oEvento){
    
        var oE = oEvento || window.event;
        var bValido=true;
        var sError = "";
        
        // Campo dni
        var nif = frmAltaPaciente.txtDNI.value.trim();
        frmAltaPaciente.txtDNI.value = frmAltaPaciente.txtDNI.value.trim();
        
        var oExpReg = /^\d{8}[a-zA-Z]$/;
        
        if (oExpReg.test(nif) == false)
        {
    
            frmAltaPaciente.txtDNI.classList.add("error");
            frmAltaPaciente.txtDNI.focus();
            bValido = false;
            sError += "El dni tiene que ser numeros y 1 letra \n"; 
        } else {
            frmAltaPaciente.txtDNI.classList.remove("error");
        }
        //Campo SS
        var sSS = frmAltaPaciente.txtSSPaciente.value.trim();
        frmAltaPaciente.txtSSPaciente.value = frmAltaPaciente.txtSSPaciente.value.trim();
        
        var oExpReg = /^(\d{2})(\d{2})(\d{2})\d{5}$/; //Sólo se validará que sean 11 dígitos, pero usaremos la expresión para capturar los primeros 3 campos por separado
        
        if (oExpReg.test(sSS) == false){
    
            frmAltaPaciente.txtSSPaciente.classList.add("error");
            frmAltaPaciente.txtSSPaciente.focus();
            bValido = false;
            sError += "El Numero de la S.S. debe componerse por 11 digitos \n"; 
        } else {
            frmAltaPaciente.txtSSPaciente.classList.remove("error");
        }
        //Campo nombre
        var sNombre = frmAltaPaciente.txtNombrePaciente.value.trim();
        frmAltaPaciente.txtNombrePaciente.value = frmAltaPaciente.txtNombrePaciente.value.trim();
        
        var oExpReg = /^[a-z\s]{6,40}$/i; //para que coga caracteres entre 6 y40 digitos de la a a la z
        
        if (oExpReg.test(sNombre) == false){
    
            frmAltaPaciente.txtNombrePaciente.classList.add("error");
            frmAltaPaciente.txtNombrePaciente.focus();
            bValido = false;
            sError += "El nombre solo admite caracteres alfabéticos y entre 6 y 40 caracteres \n"; 
        } else {
            frmAltaPaciente.txtNombrePaciente.classList.remove("error");
        }
    
        //Campo apellidos
        var sApe = frmAltaPaciente.txtApellidosPaciente.value.trim();
        frmAltaPaciente.txtApellidosPaciente.value = frmAltaPaciente.txtApellidosPaciente.value.trim();
        
        var oExpReg = /^[a-z\s]{6,50}$/i; //uso la misma que la anterior ya que no sabia muy bien como enfocar el apellido asi que dejo que sean en vez de 40 , 50
        
        if (oExpReg.test(sApe) == false){
    
            frmAltaPaciente.txtApellidosPaciente.classList.add("error");
            frmAltaPaciente.txtApellidosPaciente.focus();
            bValido = false;
            sError += "El apellido solo puede ser alfabético ,entre 6 y 50 caracteres \n"; 
        } else {
            frmAltaPaciente.txtApellidosPaciente.classList.remove("error");
        }
    
        //Campo direccion
        var sDir = frmAltaPaciente.txtDireccionPaciente.value.trim();
        frmAltaPaciente.txtDireccionPaciente.value = frmAltaPaciente.txtDireccionPaciente.value.trim();
        
        var oExpReg = /^[a-z\s\d]{1,60}$/i; //hago lo mismo que las anteriores pero desde 1 a 60 para que coja todo el campo
        
        if (oExpReg.test(sDir) == false){
    
            frmAltaPaciente.txtDireccionPaciente.classList.add("error");
            frmAltaPaciente.txtDireccionPaciente.focus();
            bValido = false;
            sError += "El campo direccion debe ser de tipo alfabético \n"; 
        } else {
            frmAltaPaciente.txtDireccionPaciente.classList.remove("error");
        }
    
        //Campo Email
        var sEmail = frmAltaPaciente.txtEmailPaciente.value.trim();
        frmAltaPaciente.txtEmailPaciente.value = frmAltaPaciente.txtEmailPaciente.value.trim();
        
        oExpReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i;
        
        if (oExpReg.test(sEmail) == false){
    
            frmAltaPaciente.txtEmailPaciente.classList.add("error");
            //if(bValido)     Marina dice ¿Para qué?
            frmAltaPaciente.txtEmailPaciente.focus();
            bValido = false;
            sError += "El email debe ser válido \n"; 
        } else {
            frmAltaPaciente.txtEmailPaciente.classList.remove("error");
        }
    
        //Campo Telefono
        var sTlf = frmAltaPaciente.txtTelefonoPaciente.value.trim();
        frmAltaPaciente.txtTelefonoPaciente.value = frmAltaPaciente.txtTelefonoPaciente.value.trim();
        
        oExpReg = /^[9|6|7][0-9]{8}$/;//comprueba si el numero es correcto en españa , si empieza por 9 6 o 7 y tiene 9 cifras
        
        if (oExpReg.test(sTlf) == false){
    
            frmAltaPaciente.txtTelefonoPaciente.classList.add("error");
            //if(bValido)            Marina dice ¿Para qué ?
            frmAltaPaciente.txtTelefonoPaciente.focus();
            bValido = false;
            sError += "El teléfono debe ser un número de 9 dígitos \n";
        } else {
            frmAltaPaciente.txtTelefonoPaciente.classList.remove("error");
        }
    
        //si no funciona alguna parte de las validaciones devuelve false , con lo que en el alert, muestra un error, si hubiera salido bien return true y vuelve a ejecutarse el programa por donde iba
        if (bValido == false)
        {
            alert(sError);
            oE.preventDefault();
        }
        else
        {
            return true;
        }
    }*/