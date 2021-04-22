import Form from "./components/Form";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import { CategoryProvider } from "./contexts/CategoryContext";
import { ModalProvider } from "./contexts/ModalContext";
import { RecetasProvider } from "./contexts/RecetasContext";

function App() {
  // api https://www.thecocktaildb.com/
  return (
    <RecetasProvider>
      <CategoryProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <RecipeList />
          </div>
        </ModalProvider>
      </CategoryProvider>
    </RecetasProvider>
  );
}

export default App;
