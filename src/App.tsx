import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import CompanyDataCard from "./components/CompanyDataCard";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <SearchInput />
      <CompanyDataCard />
    </ThemeProvider>
  );
}

export default App;
