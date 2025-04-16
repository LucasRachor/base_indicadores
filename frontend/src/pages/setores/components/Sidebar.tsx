import React from "react";

const Sidebar: React.FC = () => (
  <div
    style={{
      width: "250px",
      height: "100vh",
      padding: "20px",
      backgroundColor: "#f4f4f4",
      borderRight: "1px solid #ddd",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    }}
  >
    <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Resumo 2025</h2>
    {[
      { label: "Nº de clientes Industrial:", value: 1969 },
      { label: "Clientes visitados:", value: 475 },
      { label: "Propostas Realizadas:", value: 605 },
      { label: "Produtos existentes:", value: 1022 },
      { label: "Produtos Vendidos:", value: 841 },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          backgroundColor: "#fff",
          padding: "15px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          transition: "transform 0.3s, background-color 0.3s", // Transição suave
        }}
        onMouseEnter={(e) => {
          const target = e.currentTarget;
          target.style.backgroundColor = "#eaeaea";
          target.style.transform = "scale(1.05)"; // Aumenta o tamanho no hover
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget;
          target.style.backgroundColor = "#fff";
          target.style.transform = "scale(1)"; // Volta ao tamanho original
        }}
      >
        <p style={{ margin: 0 }}>{item.label}</p>
        <strong
          style={{
            fontSize: "20px",
            transition: "color 0.3s", // Transição de cor no hover
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#007BFF")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
        >
          {item.value}
        </strong>
      </div>
      
    ))}
    <p style={{ margin: "0", padding: "0", fontSize: "15px",textAlign:"center" }} >Atualizado em 01/04/2025</p>
  </div>
);

export default Sidebar;
