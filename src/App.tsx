import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Container } from "./components/Header/styles";
import { TransactionsTable } from "./components/TransactionsTable";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
     <Header />
     <Dashboard />
     <GlobalStyle />
     <Container />
    </>
  );
}

