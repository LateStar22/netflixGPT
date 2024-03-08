import Body from './Components/Body';
import { UserContextProvider } from "./Contexts/userContext"
import { ActionContextProvider } from "./Contexts/actionContext"

function App() {
  return (
    <UserContextProvider>
      <ActionContextProvider>
        <Body />
      </ActionContextProvider>
    </UserContextProvider>
  );
}

export default App;
