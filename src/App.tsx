import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import Summary from "./Pages/Summary";
import "./style.css";

function App() {
  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Header />
          <Summary />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
