import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './app/routes/Routes'
import '@mantine/core/styles.css';
import { ThemeProvider } from './app/context/ThemeContext';
function App() {

  return (
    <ThemeProvider>
    <Router>
      <AppRoutes/>
    </Router>
    </ThemeProvider>
  )
}

export default App
