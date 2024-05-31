
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import {UserProvider} from "./utils/UserContext.tsx";
import ListUserPage from "./page/ListUserPage";

function App() {
  return (
    <UserProvider>
        <ListUserPage/>
    </UserProvider>
  )
}

export default App
