import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import CompanyDataCard from "./components/CompanyDataCard";
import { useState } from "react";
import CompanyData from "../types/companyData";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [currentCompanyData, setCurrentCompanyData] = useState<CompanyData>();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <SearchInput setCurrentCompanyData={setCurrentCompanyData} />
      {currentCompanyData && (
        <CompanyDataCard currentCompanyData={currentCompanyData} />
      )}
    </ThemeProvider>
  );
}

export default App;
