import Flashcard from "./components/Flashcard";
import { Link, Route, Routes } from "react-router-dom";
import Cards from "./pages/Cards";
import CreateForm from "./components/CreateForm";
import EditForm from "./components/editComponent";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" element={<Cards />}>
          Cards
        </Link>
        <Link to="/createCards">CreateCards</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/createCards" element={<CreateForm />} />
        <Route path="/edit/:id" element={<EditForm />} />
      </Routes>
    </div>
  );
}

export default App;
