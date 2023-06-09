const Error = ({ children }) => {
  return (
    <div className="p-2 mb-4 text-center font-bold uppercase text-white bg-red-600 rounded">
      <p>{children}</p>
    </div>
  );
};

export default Error;
