import "./Sidebar.css";

const Sidebar = () => {
  const buttonsSidebar = [
    { name: "Categorias" },
    { name: "Modelos de Equipamentos" },
    { name: "Equipamentos" },
    { name: "Histórico de Manutenções" },
    { name: "Relatórios" },
  ];

  return (
    <div className="sidebar-main">
      <div className="search">
        <button className="button-buscar">Buscar</button>
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
