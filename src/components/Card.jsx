export const Card = (props) => {
  return (
    <>
      <div className="card">
        <h3>Datos enviados</h3>
        <p>Nombre: {props.name}</p>
        <p>Apellido: {props.lastName}</p>
      </div>
    </>
  );
};
