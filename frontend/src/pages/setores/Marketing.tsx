import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import {
  Paper,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  Box,
} from "@mui/material";

const Marketing: React.FC = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("2025");

  const data2024 = [
    { indicadores: "Qtd. profissionais ativos no mês", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 6, dez: 6, acumulado: { fieam: 12, sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Qtd. horas de trabalhadas no setor", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 960,dez: 816, acumulado: { fieam: 1.776, sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Total de ações executadas no mês", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 495,dez: "-", acumulado: { fieam: 495, sesi: "-", senai: "-", iel: "-" } },
    { indicadores: "Tempo médio por ação executada", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "1h55min",dez: "-", acumulado: { fieam: "-", sesi: "-", senai: "-", iel: "-" }, },
    { indicadores: "Campanhas ativas", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "12", dez: "-", acumulado: { fieam: 2, sesi: 4, senai: 3, iel: 3 } },
    { indicadores: "Roteiro de vídeos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 31,dez: "-", acumulado: { fieam: 1, sesi: 25, senai: 3, iel: 2 } },
    { indicadores: "Vídeos Produzidos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 31,dez: "-", acumulado: { fieam: 1, sesi: 25, senai: 3, iel: 2 } },
    { indicadores: "Cards Produzidos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 86,dez: "-", acumulado: { fieam: 14, sesi: 31, senai: 23, iel: 18 }, },
    { indicadores: "Stories Produzidos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov:206, dez: "-", acumulado: { fieam: 16, sesi: 131, senai: 23, iel: 36 }, },
    { indicadores: "Flyers Produzidos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 12 ,dez: "-", acumulado: { fieam: "-", sesi: 12, senai: "-", iel: "-" } ,},
    { indicadores: "Copies Produzidos", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 117,dez: "-", acumulado: { fieam: 15, sesi: 56, senai: 26, iel: 20 } },
  ];

  const data2025 = [
    { indicadores: "Qtd. profissionais ativos no mês", jan: 6, fev: 6, mar: "6", abr: "6", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", 
      acumulado: { fieam: 6, sesi: "-", senai: "-", iel: "-","total geral":"6" } },

    { indicadores: "Qtd. horas de trabalhadas no setor", jan: 1.056, fev: 912, mar: "1.008", abr: "912", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", 
      acumulado: { fieam: "3.888", sesi: "-", senai: "-", iel: "-","total geral":"3.888" } },

    { indicadores: "Total de ações executadas no mês", jan: 962, fev: "1012", mar: "980", abr: "1.459", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", 
      acumulado: { fieam: "188", sesi: "2.417", senai: "1.091", iel: "717","total geral":"4.413" } },

    { indicadores: "Tempo médio por ação executada", jan: "01h01min", fev: "1h06min", mar: "1h", abr: "37min", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", 
      acumulado: { fieam: "55min", sesi: "-", senai: "-", iel: "-","total geral":"55min" }, },

    { indicadores: "Campanhas ativas", jan: "13", fev: "13", mar: "15", abr: "12", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-", dez: "-", 
      acumulado: { fieam: 7, sesi: 15, senai: 18, iel: 13,"total geral":"53" } },

    { indicadores: "Roteiro de vídeos", jan: 48, fev: "64", mar: "88", abr: "60", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", 
      acumulado: { fieam: 10, sesi: 172, senai: 43, iel:  35,"total geral":"260"} },

    { indicadores: "Vídeos Produzidos", jan: 42, fev: "60", mar:"88", abr: "60", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-",
       acumulado: { fieam: 10, sesi: 162, senai: 39, iel: 39,"total geral":"250" } },

    { indicadores: "Cards Produzidos", jan: 397, fev: "314", mar: "172", abr: "396", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", 
      acumulado: { fieam: 49, sesi: 636, senai: 376, iel: 218,"total geral":"1.279" }, },

    { indicadores: "Stories Produzidos", jan: 209, fev: "262", mar: "346", abr: "454", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov:"-", dez: "-", 
      acumulado: { fieam: 48, sesi: 745, senai: 307, iel: 171, "total geral":"1.271"}, },

    { indicadores: "Flyers Produzidos", jan: 38, fev: "21", mar: "30", abr: "32", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-" ,dez: "-", 
      acumulado: { fieam: 11, sesi: 53, senai: 30, iel: 27,"total geral":"121" } ,},

    { indicadores: "Copies Produzidos", jan: 215, fev: "278", mar: "241", abr: "445", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "-",dez: "-", 
      acumulado: { fieam: 53, sesi: 634, senai: 278, iel: 214,"total geral":"1.179" } },
  ];

  const categorizeIndicator = (indicator: string): string => {
    const pagoIndicators = [
      "Campanhas ativas",
      "Roteiro de vídeos",
      "Vídeos Produzidos",
      "Revisão de Vídeos",
      "Cards Produzidos",
      "Stories Produzidos",
      "Flyers Produzidos",
      "Copies Produzidos",
      "Publicação nas redes sociais",
      "Resposta de comentários nas redes sociais",
    ];
    const emailIndicators = [
     "Contas Alcançadas",
      "Impressões",
      "Interações",
      "Taxa de engajamento",
      "Seguidores"
    ];
    if (pagoIndicators.includes(indicator)) return "Midia ON e OFF";
    if (emailIndicators.includes(indicator)) return "Orgânico";
    return " ";
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedYear(newValue);
  };

  const data = selectedYear === "2024" ? data2024 : data2025;

  const groupedData = data.reduce((acc, row) => {
    const category = categorizeIndicator(row.indicadores);
    if (!acc[category]) acc[category] = [];
    acc[category].push(row);
    return acc;
  }, {});

  const handlePrint = () => {
    window.print();
  };

  return (

    <div>
            <div style={{ padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h4" gutterBottom>
                Setor: Marketing
              </Typography>
              <div style={{display: "flex", justifyContent: "flex-end" }}>
                <Tooltip title="Voltar para o menu principal">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate("/indicadores")}
                    style={{ marginBottom: "20px" }}
                  >
                    Voltar
                  </Button>
                </Tooltip>
                <Button
                  variant="contained"
                  color="inherit"
                  onClick={handlePrint}
                  style={{ marginBottom: "20px", marginLeft: "10px" }}
                >
                  Imprimir
                </Button>
              </div>
            </div>
          </div>
      <Box sx={{ width: "100%", marginBottom: "20px" }}>
        <Tabs
          value={selectedYear}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="Tabs de anos"
        >
          <Tab value="2024" label="2024" />
          <Tab value="2025" label="2025" />
        </Tabs>
      </Box>
      <Paper sx={{ marginTop: "20px" }}>
      <TableContainer>
      <Table size="small" sx={{ width: "100%", tableLayout: "fixed" }}>
          <TableHead>
  <TableRow>
  <TableCell
  rowSpan={2}
  style={{
    backgroundColor: "#ADD8E6",
    fontWeight: "bold",
    textAlign: "center",
    verticalAlign: "middle",
    padding: "4px",
    width: "30px", 
    maxWidth: "30px", 
    whiteSpace: "nowrap",
  }}
>
Tipo
</TableCell>
    <TableCell
      rowSpan={2}
      style={{
        fontWeight: "bold",
        backgroundColor: "#ADD8E6",
        padding: "2px",
        textAlign: "center",
        minWidth: "180px",
        maxWidth: "180px",
        width: "180px",
      
      }}
    >
      Indicadores
    </TableCell>
    {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"].map(
      (month, index) => (
        <TableCell
          key={index}
          rowSpan={2}
          align="center"
          style={{
            fontWeight: "bold",
            backgroundColor: "#ADD8E6",
            padding: "2px",
            minWidth: "30px",
          }}
        >
          {month}
        </TableCell>
      )
    )}
    <TableCell
      colSpan={5}
      align="center"
      style={{
        fontWeight: "bold",
        backgroundColor: "#4682B4",
        color: "white",
        padding: "8px",
      }}
    >
      Acumulado
    </TableCell>
  </TableRow>
  <TableRow>
    {["FIEAM", "SESI", "SENAI", "IEL", "TOTAL - MÉDIA"].map((name, index) => (
      <TableCell
        key={`acumulado-${index}`}
        align="center"
        style={{
          fontWeight: "bold",
          backgroundColor: "#4682B4",
          color: "white",
          padding: "8px",
        }}
      >
        {name}
      </TableCell>
    ))}
  </TableRow>
</TableHead>

<TableBody>
  {Object.entries(groupedData).map(([category, rows]) =>
    rows.map((row, rowIndex) => (
      <TableRow
        key={`${category}-${rowIndex}`}
        sx={{
          "& .MuiTableCell-root": {
            padding: "4px 6px",
            lineHeight: "1",
          },
          height: "50px",
          backgroundColor: rowIndex % 2 === 0 ? "#F5F5F5" : "#FFFFFF", // Alterna entre duas cores
        }}
      >
        {rowIndex === 0 && (
          <TableCell
            rowSpan={rows.length}
            align="center"
            style={{
              fontWeight: "bold",
              verticalAlign: "middle",
              transform: "rotate(-90deg)", 
              textAlign: "center", 
              minWidth: "25px", 
              maxWidth: "25px",
              width: "25px",
              whiteSpace: "nowrap",
              padding: "2px",
            }}
          >
            {category}
          </TableCell>
        )}
        <TableCell
          style={{
            fontWeight: "bold",
            verticalAlign: "middle",
            textAlign: "left", 
            minWidth: "180px",
            maxWidth: "180px",
            width: "180px",
            padding: "2px",
          }}
        >
          {row.indicadores}
        </TableCell>
        {["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"].map((month) => (
          <TableCell align="center" key={month}>
            {typeof row[month] === "object"
              ? Object.entries(row[month])
                  .map(([key, value]) => `${key}: ${value}`)
                  .join(", ")
              : row[month] !== undefined
              ? row[month]
              : "-"}
          </TableCell>
        ))}
        {["fieam", "sesi", "senai", "iel", "total geral"].map((key) => (
          <TableCell align="center" key={key}>
            {row.acumulado && row.acumulado[key] !== undefined ? row.acumulado[key] : "-"}
          </TableCell>
        ))}
      </TableRow>
    ))
  )}
</TableBody>

          </Table>
        </TableContainer>
      </Paper>
      <h4>Atualizado até 01/05/2025 às 11h</h4>
    </div>
  );
};
export default Marketing;