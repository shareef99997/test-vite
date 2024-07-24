
import Home from './Home'
import Page1 from './Page1'
import Page2 from './Page2'
import './App.css'

function App() {


  const renderPage = () => {
    const path = window.location.pathname;
    switch (path) {
      case '/test-vite/page1':
        return <Page1 />;
      case '/test-vite/page2':
        return <Page2 />;

      case '/':
      default:
        return <Home />;
    }
  };

  return (
    <>
    {renderPage()}
      
    </>
  )
}

export default App
