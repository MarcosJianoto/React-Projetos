import "./Sidebar.css";

const Sidebar = () => {
  const buttonsSidebar = [
    { name: "CATEGORIAS" },
    { name: "MODELOS DE EQUIPAMENTOS" },
    { name: "EQUIPAMENTOS" },
    { name: "HISTÓRICO DE MANUTENÇÕES" },
    { name: "RELATÓRIOS" },
  ];

  return (
    <div className="sidebar-main">
      <div className="search">
        <button className="button-buscar">BUSCAR</button>
      </div>
      <div className="menu">
        <div className="menu-buttons">
          {buttonsSidebar.map((button, index) => (
            <button key={index} className="button-sidebar">
              {button.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
