import { getEstudaintes } from "./API.js"

addEventListener('DOMContentLoaded', carcarEstudiantes)

async function carcarEstudiantes() {
    const tablaEstudiantes = document.querySelector('#tabla')
    const estudiantes = await getEstudaintes()
    console.log(estudiantes);
    estudiantes.forEach(element => {

        tablaEstudiantes.innerHTML += `
        
                <tr class="cards" id="${element.id}"
                edad="${element.edad}"
                nombre="${element.nombre}" 
                promedio="${element.promedio}" 
                imagen = "${element.imagen}" 
                nivelCAmpus="${element.nivelCAmpus}" 
                nivelIngles="${element.nivelIngles}" 
                especialidad="${element.especialidad}" 
                direccion="${element.direccion}" 
                celular="${element.celular}" 
                ingles="${element.ingles}" 
                Ser ="${element.Ser}" 
                Review ="${element.Review}" 
                Skills ="${element.Skills}" 
                Asitencia="${element.Asitencia}" 
                >
                <th scope="row" id="${element.id}">${element.id}</th>
                <td id="${element.id}">${element.nombre}</td>
                <td id="${element.id}">${element.especialidad}</td>
                <td id="${element.id}"><img src="images/${element.imagen}" alt="" height="30px"></td>
                <td><button type="button" class="btn btn-info">notas</button></td>
            
                </tr>
        
        
        `

    });

    detalles()

    function detalles(){
        const tablaEstudiantes = document.querySelector('#tabla')
        tablaEstudiantes.addEventListener('click',(e)=>{

            console.log(e.target);
            if(e.target.getAttribute('id')){
                const atributos = e.target.getAttribute('id')
                const elemento = document.getElementById(atributos)

                const imagen = elemento.getAttribute('imagen')
                const edad = elemento.getAttribute('edad')
                const nombre = elemento.getAttribute('nombre')
                const promedio = elemento.getAttribute('promedio')
                const nivelCAmpus = elemento.getAttribute('nivelCAmpus')
                const nivelIngles = elemento.getAttribute('nivelIngles')
                const especialidad = elemento.getAttribute('especialidad')
                const celular = elemento.getAttribute('celular')
                const direccion = elemento.getAttribute('direccion')
                const ingles = elemento.getAttribute('ingles')
                const Ser = elemento.getAttribute('ser')
                const Review = elemento.getAttribute('Review')
                const Skills = elemento.getAttribute('Skills')
                const Asitencia = elemento.getAttribute('Asitencia')

                const detalles = document.querySelector('#detalles')
                detalles.innerHTML=`
                <div class="containerDetalles">
                <div class="datos">
                    <div class="d-flex"><img src="images/${imagen}" alt="" class="m-2" ><button type="button" class="delete btn btn-danger" style="height: 40px;">Eliminar</button></div>
                    <h5>${nombre}</h5>
                    <h5>${edad}</h5>
                    <h5>${promedio}</h5>
                    <h5>${nivelCAmpus}</h5>
                    <h5>${nivelIngles}</h5>
                    <h5>${especialidad}</h5>
                    <h5>${direccion}</h5>
                    <h5 style="background-color: brown;">${celular}</h5>
                </div>
                </div>

                <div id="chats1" class="charts">
                
                
                </div>
                
                
                `
                
                const getOpcionesCharts1 = ()=>{

                    let value1 = (ingles*100)
                    let value2 = (Ser*100)
                    let value3 = (Review*100)
                    let value4 = (Skills*100)
                    let value5 = (Asitencia*100)


                    return {
                        tooltip: {
                          trigger: 'item'
                        },
                        legend: {
                          top: '5%',
                          left: 'center',
                          // doesn't perfectly work with our tricks, disable it
                          selectedMode: false
                        },
                        series: [
                          {
                            name: 'Access From',
                            type: 'pie',
                            radius: ['40%', '70%'],
                            center: ['50%', '70%'],
                            // adjust the start angle
                            startAngle: 180,
                            label: {
                              show: true,
                              formatter(param) {
                                // correct the percentage
                                return param.name + ' (' + param.percent * 2 + '%)';
                              }
                            },
                            data: [
                              { value: value1, name: 'Ingles' },
                              { value: value2, name: 'Ser' },
                              { value: value3, name: 'Review' },
                              { value: value4, name: 'Skills' },
                              { value: value5, name: 'Asistencia' },
                              {
                                // make an record to fill the bottom 50%
                                value: value1 + value2 + value3 + value4 + value5,
                                itemStyle: {
                                  // stop the chart from rendering this piece
                                  color: 'none',
                                  decal: {
                                    symbol: 'none'
                                  }
                                },
                                label: {
                                  show: false
                                }
                              }
                            ]
                          }
                        ]
                      };

                }
                const charts1 = echarts. init(document.getElementById('chats1'));
                charts1.setOption(getOpcionesCharts1())



            }

        })
    }

}