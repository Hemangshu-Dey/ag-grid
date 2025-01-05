import AgGrid from "./AgGrid.jsx";

const App = () => {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-50">
        <h1 className="text-black-500 font-bold text-4xl mb-6">
          EMPLOYEE DATA
        </h1>
        <AgGrid />
      </div>
    </>
  );
};
export default App;