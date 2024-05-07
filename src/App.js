import MainPage from "./pages/mainPage/MainPage";
// import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
// import TodoPage from "./pages/todoPage/TodoPage";

export const containerVariant = {
  mid: 'mid',
  small: 'small',
  large: 'large'
}

function App() {

  return (
    <div className="App">
      <MainPage/>
      {/*<TodoPage/>*/}
    </div>

  );
}

export default App;
