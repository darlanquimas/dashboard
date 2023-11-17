import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./screens/router";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="container mx-auto p-4 mt-16">
        <div className="flex justify-center items-center w-full">
          <AppRoutes />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
