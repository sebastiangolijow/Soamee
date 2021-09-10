import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {CrearA} from '../Redux/Actions'

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


export function CreateA() {
const dispatch = useDispatch()
const [Input, setInput] = useState({ firstName: "", lastName:"", Id:0});
function handlechange1(e) {
    setInput({ ...Input, [e.target.name]: e.target.value });
}



function  handlesubmit(e) {
e.preventDefault();

if(!Input.firstName){
  return alert('Debes elgir un Nombre')
}
else if(!Input.lastName){
    return alert('Debes elgir un Nombre')
}
dispatch(CrearA(Input));
setInput({firstName:'', lastName:''});
alert('Author creado');
}
    return (
        <form>
        <div>
            <input
                value={Input.firstName}
                name="firstName"
                onChange={handlechange1}
                 style={InputStyle}
                 placeholder='Nombre'
            />
            <input style={InputStyle} 
                name='lastName' 
                onChange={handlechange1} 
                value={Input.lastName} 
                placeholder='Apellido'
            />
            <button style={styleButton} onClick={(e) => handlesubmit(e)}>Crear Author</button>
        </div>
        </form>
    )
}