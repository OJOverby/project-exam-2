import "./App.css";
import { AppRoutes } from "./js/components/routes.js";
import Theme from "./js/components/styled/theme.jsx";
import { ScrollToTop } from "./js/components/scrollToTop.js";

function App() {
  return (
    <Theme>
      <ScrollToTop />
      <AppRoutes />
    </Theme>
  );
}

export default App;
