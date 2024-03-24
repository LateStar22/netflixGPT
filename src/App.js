import Body from './Components/Body';
import { UserContextProvider } from "./Contexts/userContext"
import { ActionContextProvider } from "./Contexts/actionContext"
import { MoviesContextProvider } from "./Contexts/moviesContext"

function App() {
  return (
    <MoviesContextProvider>
      <UserContextProvider>
        <ActionContextProvider>
          <Body />
        </ActionContextProvider>
      </UserContextProvider>
    </MoviesContextProvider>
  );
}

export default App;
