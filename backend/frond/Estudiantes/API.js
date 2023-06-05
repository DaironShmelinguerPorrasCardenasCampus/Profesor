const ulrEstudiantes  = "http://localhost/ArTeM01-045/Proyectos/Profesor/backend/controles/campers.php?op=GetAll"


export const getEstudaintes = async () =>{
    try{
        const result = await fetch (ulrEstudiantes);
        const datosUsuarios = await result.json();
        return datosUsuarios;
        
    }
    catch(error){
        console.log(error);
    }
}