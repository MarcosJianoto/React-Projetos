import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-main">
      <div className="search">
        <button className="button-buscar">Buscar</button>
      </div>
      <div className="menu">
        <button>Categorias</button>
        <button>Modelos de Equipamentos</button>
        <button>Equipamentos</button>
        <button>Histórico de Manutenções</button>
        <button>Relatórios</button>
      </div>
    </div>
  );
};

export default Sidebar;
