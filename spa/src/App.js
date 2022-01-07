import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const Hi = () => <h1>Hi!</h1>
const Bye = () => <h1>Bye!</h1>

function App() {
  return (
      <div>
        <h1>nav</h1>
          <Routes>
            <Route index element={<Hi/>}>
            </Route>
            <Route path='bye' element={<Bye />} />
          </Routes>
      </div>
    );
}

export default App;
