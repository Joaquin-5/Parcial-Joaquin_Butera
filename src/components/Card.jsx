const Card = (props) => {
  return (
    <>
      <div className="card">
        <h3>Datos enviados</h3>
        <p>Nombre: {props.data.name}</p>
        <p>Apellido: {props.data.lastName}</p>
      </div>
    </>
  );
};

export default Card;