
import "../estilo/test.css";




function test (props){
    return(
       <div className="contenedor-test">
         <img className="contenedor-imagen"
        
          src={require (`../imagen/${props.imagen}`)}
         alt="foto de emma" 
          />
         <div className="contenedor-texto-test">
            <p className="nombre-test"><strong>{props.nombre}</strong> en{props.pais} </p>
            <p className="cargo-test">{props.cargo}en <strong>{props.empresa}</strong></p>
            <p className="texto-test">"{props.testimonio}".</p>
         </div>
       </div> 
    )
}
 export default test;
