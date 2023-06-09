import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, setPaciente, paciente }) => {
  const [nombre, setNombre] = useState("");
  const [tutor, setTutor] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // Creo un array de las propiedades del obj paciente para corroborar que no esté vacío
    if (Object.keys(paciente).length > 0) {
      const { nombre, tutor, email, telefono, alta, sintomas } = paciente;
      setNombre(nombre);
      setTutor(tutor);
      setEmail(email);
      setTelefono(telefono);
      setAlta(alta);
      setSintomas(sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(30).substring(2);
    const fecha = Date.now().toString(30);
    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validación de Formulario.
    if ([nombre, tutor, email, telefono, alta, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    // Obj Nuevo Paciente
    const objPaciente = {
      nombre,
      tutor,
      email,
      telefono,
      alta,
      sintomas,
    };

    if (paciente.id) {
      // Editar un Registro - Antes agrego el ID del paciente actual.
      objPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Crear Nuevo Registro - Antes de agregarlo genero el ID.
      objPaciente.id = generarId();
      setPacientes([...pacientes, objPaciente]);
    }

    // Reiniciar Formulario
    setNombre("");
    setTutor("");
    setEmail("");
    setTelefono("");
    setAlta("");
    setSintomas("");
  };

  return (
    <div className="mb-20 md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Formulario</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="py-10 px-5 bg-white shadow-md rounded-md"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="paciente"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de Paciente
          </label>
          <input
            type="text"
            name="paciente"
            placeholder="Nombre de mascota"
            id="paciente"
            className="w-full mt-2 p-2 border-2 rounded-lg placeholder-gray-400"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="tutor"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de tutor
          </label>
          <input
            type="text"
            name="tutor"
            placeholder="Nombre del tutor"
            id="tutor"
            className="w-full mt-2 p-2 border-2 rounded-lg placeholder-gray-400"
            value={tutor}
            onChange={(e) => {
              setTutor(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Ingrese un email de contacto"
            id="email"
            className="w-full mt-2 p-2 border-2 rounded-lg placeholder-gray-400"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="telefono"
            className="block text-gray-700 uppercase font-bold"
          >
            Telefono
          </label>
          <input
            type="text"
            name="telefono"
            placeholder="Ingrese un numero de teléfono"
            id="telefono"
            className="w-full mt-2 p-2 border-2 rounded-lg placeholder-gray-400"
            value={telefono}
            onChange={(e) => {
              setTelefono(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta de paciente
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="w-full mt-2 p-2 border-2 rounded-lg placeholder-gray-400"
            value={alta}
            onChange={(e) => {
              setAlta(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            placeholder="Describa los síntomas de ingreso"
            id="sintomas"
            className="w-full h-32 mt-2 p-2 border-2 rounded-lg placeholder-gray-400 resize-none"
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          className="w-full p-2 rounded-md text-white font-bold bg-indigo-600 uppercase hover:bg-indigo-700 cursor-pointer transition-all"
        />
      </form>
    </div>
  );
};

export default Formulario;
