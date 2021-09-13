import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {CrearB, searchAuthor} from '../Redux/Actions'

const styleButton = {
    borderRadius: "999px",
    backgroundColor: "white",
    margin: "20px",
    outline: "none",
    fontFamily: "fantasy",
    height:'37px',
    width:'85px',
    fontSize:'11px'
  };

  const InputStyle = {
    borderRadius: "20px",
    border: "0",
    width: "175px",
    height: "30px",
    padding: "7px",
    outline: "none",
    marginRight: "20px",
  };


export function CreateB() {
const dispatch = useDispatch()
const [Input, setInput] = useState({ name: "", isbn:null, authorId:null});

function handlechange1(e) {
    setInput({ ...Input, [e.target.name]: e.target.value });
}



function  handlesubmit(e) {
e.preventDefault();

if(!Input.name){
  return alert('Debes elgir un Nombre')
}
else if(!Input.isbn){
    return alert('Debes elgir un ISBN')
}
console.log(Input)
dispatch(CrearB(Input));
setInput({name:'', isbn:null, authorId:null});
alert('Libro creado');
}


    return (
        <form>
        <div>
            <input
                value={Input.name}
                name="name"
                onChange={handlechange1}
                 style={InputStyle}
                 placeholder='Nombre'
            />
            <input style={InputStyle} 
                name='isbn' 
                onChange={handlechange1} 
                value={Input.isbn} 
                placeholder='ISBN'
            />
            <input style={InputStyle} 
                name='authorId' 
                onChange={handlechange1} 
                value={Input.authorId} 
                placeholder='Autor ID'
            />
            <button style={styleButton} onClick={(e) => handlesubmit(e)}>Crear Libro</button>

        </div>
        </form>
    )
}