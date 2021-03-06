import React from "react";
import TitlesCards from '../../Atomos/TitlesCards';
import TextField from '../../Atomos/TextField';
import PropertyBtn from '../../Atomos/PropertyBtn';
import DynamicButton from '../../Atomos/DynamicButton';
import Aside from '../../Moleculas/Aside';

import '../../../index.css';
import './index.css';

const getModo = (modo:any) => {
    switch (modo) {
        case 'Dark': return('DarkMode')
        default: return ''
    }
}
export const getColorMedio = (tipoMedio:any) => {
    switch (tipoMedio) {
        case 'espectacular': return('Rojo')            
        case 'urbanos': return('Magenta')
        case 'muro': return('Azul')            
        case 'indoors': return('Amarillo')
        default: return('Gris')
    }
}
interface CardsRutasIMJProps{
    tipoMedio: 'espectacular' | 'muro' | 'urbanos' | 'indoors' | any;
    ruta?: string | any;
    id?: string | any;
    clave?: string | any;
    ubicacion?: string | any;
    inicioRuta?: string | any; 
    destinoRuta?: string | any;
    kilometraje?: number | any;
    estadoActivo?: true | false;
    modo?: string | any;
}
const CardsRutasIMJ = (props:CardsRutasIMJProps) =>{
    const Front = (props:CardsRutasIMJProps) => {
        return(
            <div>
                <div className={"EncabezadoCard BorderBottom"+getColorMedio(props.tipoMedio)}>
                    <TitlesCards
                        modo={props.modo}
                        clave = {props.ruta || 'undefined'}
                        type = {'Id: '+ (props.id || 'undefined')}
                    />
                </div>
                <div className="InformacionCard">
                    <div className="DireccionCards">
                        <TextField
                            modo={props.modo}
                            type = 'titleAndDescription' 
                            title = 'Clave: '
                            description = {props.clave || 'undefined'}
                        />
                    </div>
                    <div className="RowPadding1">
                        <TextField
                            modo={props.modo}
                            type = 'titleAndDescription'
                            title = 'Inicio: '
                            description = {props.inicioRuta || 'undefined'}                       
                        />
                        <TextField
                            modo={props.modo}
                            type = 'titleAndDescription'
                            title = 'Destino: '
                            description = {props.destinoRuta || 'undefined'}
                        />
                    </div>
                    <div className="RowPadding1">
                        <TextField
                            modo={props.modo}
                            type = 'titleAndDescription'
                            title = 'Ubicaci??n: '
                            description = {props.ubicacion || 'undefined'}
                        />
                    </div>
                    <div className="RowPadding1">
                    <TextField
                        modo={props.modo}
                        type = 'titleAndDescription'
                        title = 'Kilometraje: '
                        description = {props.kilometraje || '0'}
                        labelColor ={getColorMedio(props.tipoMedio)}
                    />
                    </div>
                    <div className="PropiedadCardsPosition CardRutasImj">
                        <PropertyBtn
                        property = 'Activo'
                        color = 'verde'
                        state = {props.estadoActivo || false}
                        />
                    </div>
                </div>
    
            </div>
        ) 
    }
    return(
        <div className="CardsPaddings">
            <div className="CardAsideFlex">
                <div className="ContenedorCards">
                    <div className={"Card"+getModo(props.modo)}>
                        <Front
                        modo={props.modo}
                        tipoMedio ={props.tipoMedio}
                        ruta = {props.ruta}
                        id = {props.id}                     
                        clave = {props.clave}
                        inicioRuta = {props.inicioRuta}
                        destinoRuta = {props.destinoRuta}
                        ubicacion = {props.ubicacion}
                        kilometraje= {props.kilometraje}
                        estadoActivo = {props.estadoActivo}
                        />
                    </div>
                    <div className="EtiquetaIdentificacion">
                        <DynamicButton
                            type = 'icons'
                            size='grande'
                            button = 'etiqueta'
                            color = {getColorMedio(props.tipoMedio)}
                        />
                    </div>
                </div>
                <Aside
                    modo={props.modo}
                    tipoCard = 'rutasImj'
                    tipoMedio = {props.tipoMedio}
                />
            </div>
        </div>
    )
}
export default CardsRutasIMJ;
