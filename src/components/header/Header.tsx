import "./Header.css";

function Header() {
  return (
    <header>
      <div className="title">
        <h1>OMS Dashboard</h1>
        <p>Order Management System</p>
      </div>
      <div className="bell-profile">
        <div className="bell">
          <img src="/bell.svg" alt="" />
          <div id="notify" />
        </div>
        <div className="profile">
          <div>
            <p className="name">Italo Ribeiro</p>
            <p className="role">Administrator</p>
          </div>
          <button>IR</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
