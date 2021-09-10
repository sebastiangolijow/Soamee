  
import {Link, useHistory} from 'react-router-dom';

const LinkStyle = {
   color:'#F5F5DC',
   textDecoration:'none',
   fontSize:'px',
   border:'solid',
   padding: '10px',
   borderWidth:'1px',
   fontWeight:'50',
   fontFamily:'arial',
}
const Div = {
   display:'flex',
   flexDirection:'row',
   justifyContent:'center',
   alignItems:'center'
}

export function Nav() {
   return (
       <div>
       <div style={Div}>
       <Link style={LinkStyle} to='/'>Home</Link>
       <Link style={LinkStyle} to='/Authors'>Autores</Link>
       <Link style={LinkStyle} to='/CreateA'>Crear Autor</Link>
       <Link style={LinkStyle} to='/CreateB'>Crear Libro</Link>
       </div> 
       </div>
   )
}