import "./Home.css";
import Header from "../components/header/Header";
import Dashboard from "../components/dashboard/Dashboard";
import Order from "../components/order/Order";

function Home() {
  return (
    <main>
      <Header />
      <div className="content">
        <Dashboard />
        <Order />
      </div>
    </main>
  );
}

export default Home;
