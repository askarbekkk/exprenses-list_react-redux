import ExpensesForm from "./components/ExpensesForm";
import ExpensesTable from "./components/ExpensesTable";
import BalanceCards from "./components/BalanceCards";
import Header from "./components/Header";
import ModalReact from "./components/ModalReact";


function App() {
  return (
    <div className="container">
      <ModalReact/>
    <Header/>
    <h1>Ваш лист расходов</h1>
      <BalanceCards/>
      <ExpensesForm/>
      <ExpensesTable/>
    </div>
  );
}

export default App;
