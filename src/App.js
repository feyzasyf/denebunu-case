import "./App.css";
import AvailableProducts from "./components/availableProducts/AvailableProducts";
import CategoriesList from "./components/categoriesList/CategoriesList";
import Review from "./components/review/Review";

function App() {
  return (
    <div className="container">
      <div>
        <AvailableProducts />
        <Review />
      </div>
      <CategoriesList />
    </div>
  );
}

export default App;
