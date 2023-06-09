const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, tutor, email, telefono, alta, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="m-3 px-5 py-10 bg-white shadow-md rounded-md">
      <p className="mb-2 font-bold uppercase text-grey-700">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="mb-2 font-bold uppercase text-grey-700">
        Tutor: <span className="font-normal normal-case">{tutor}</span>
      </p>
      <p className="mb-2 font-bold uppercase text-grey-700">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="mb-2 font-bold uppercase text-grey-700">
        Telefono: <span className="font-normal normal-case">{telefono}</span>
      </p>
      <p className="mb-2 font-bold uppercase text-grey-700">
        Fecha de alta: <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="mb-2 font-bold uppercase text-grey-700">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="mt-5 flex justify-between">
        <button
          type="button"
          className="py-2 px-8 font-bold text-white uppercase rounded-lg bg-indigo-600 hover:bg-indigo-700"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-8 font-bold text-white uppercase rounded-lg bg-red-600 hover:bg-red-700"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
export default Paciente;
