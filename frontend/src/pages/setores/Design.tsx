import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Tooltip,
} from "@mui/material";

const Design: React.FC = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("2025");

  const data2024 = [
    {
      "indicadores": "Qtd. profissionais ativos no mês",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 4,"dez":4,
      "acumulado": { "fieam": 8, "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Qtd. de horas trabalhadas no setor",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 640,"dez":544,
      "acumulado": { "fieam": 1.184, "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Total de ações executadas no mês",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 1203,"dez":331,
      "acumulado": { "fieam": 1035, "sesi": 266, "senai": 169, "iel": 64  }
    },
    {
      "indicadores": "Tempo médio por ação executada",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "30min","dez": "1h30min",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    }, 
    {
      "indicadores": "Demanda recebida compras",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 8,"dez": 15,
      "acumulado": { "fieam": 5, "sesi": 8, "senai": 10, "iel": "-" }
    },
    {
      "indicadores": "Demanda atendidas compras",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 11,"dez": 18,
      "acumulado": { "fieam": 8, "sesi": 8, "senai": 13, "iel": "-" }
    },
    {
      "indicadores": "Demanda recebida baixa complexidade",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 503,"dez": 79,
      "acumulado": { "fieam": 478, "sesi": 62, "senai": 22, "iel": 20 }
    },
    {
      "indicadores": "Demanda atendidas baixa complexidade",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 503,"dez": 79,
      "acumulado": { "fieam": 478, "sesi": 62, "senai": 22, "iel": 20}
    },
    {
      "indicadores": "Demanda recebida média complexidade",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 53,"dez": 32,
      "acumulado": { "fieam": 12, "sesi": 49, "senai": 18, "iel": 6 }
    },
    {
      "indicadores": "Demanda atendidas média complexidade",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 53,"dez": 32,
      "acumulado": { "fieam": 12, "sesi": 49, "senai": 18, "iel": 6 }
    },
    {
      "indicadores": "Demanda recebida alta complexidade",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 36,"dez": 38,
      "acumulado": { "fieam": 21, "sesi": 14, "senai": 33, "iel": 6 }
    },
    {
      "indicadores": "Demanda atendidas alta complexidade",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 36,"dez": 38,
      "acumulado": { "fieam": 21, "sesi": 14, "senai": 33, "iel": 6 }
    },
     
  ];
  const data2025 = [
    {
      "indicadores": "Qtd. profissionais ativos no mês",
      "jan": 4, "fev": "4", "mar": "4", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 4, "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Qtd. de horas trabalhadas no setor",
      "jan": "704", "fev": "608", "mar": "672", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "1.984", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Total de ações executadas no mês",
      "jan": 207, "fev": "128", "mar": "205", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 540, "sesi": "-", "senai": "-", "iel": "-" }
    },
   
    {
      "indicadores": "Tempo médio por ação executada",
      "jan": "4h", "fev": "3h", "mar": "3h", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "3h", "sesi": "-", "senai": "-", "iel": "-" }
    }, 
    
    {
      "indicadores": "Demanda atendidas compras",
      "jan": 86, "fev": "4", "mar": "32", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 59, "sesi": 20, "senai": "41", "iel": "2" }
    },
 /*    {
      "indicadores": "Demanda recebida compras",
      "jan": 86, "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 77, "sesi": 9, "senai": "-", "iel": "-" }
    }, */
    {
      "indicadores": "Demanda recebida baixa complexidade",
      "jan": 104, "fev": "89", "mar": "116", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 98, "sesi": 161, "senai": 32, "iel": 18 }
    },
    {
      "indicadores": "Demanda atendidas baixa complexidade",
      "jan": 104, "fev": "89", "mar": "116", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": {  "fieam": 98, "sesi": 161, "senai": 32, "iel": 18 }
    },
    {
      "indicadores": "Demanda recebida média complexidade",
      "jan": 9, "fev": "23", "mar": "34", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "8", "sesi": 45, "senai": 11, "iel": 2 }
    },
    {
      "indicadores": "Demanda atendidas média complexidade",
    "jan": 9, "fev": "23", "mar": "34", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "8", "sesi": 45, "senai": 11, "iel": 2 }
    },
    {
      "indicadores": "Demanda recebida alta complexidade",
      "jan": 8, "fev": "20", "mar": "23", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "5", "sesi": 24, "senai": 17, "iel": 5}
    },
    {
      "indicadores": "Demanda atendidas alta complexidade",
      "jan": 8, "fev": "20", "mar": "23", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "5", "sesi": 24, "senai": 17, "iel": 5 }
    },
  ]
  const categorizeIndicator = (indicator: string): string => {
    const pagoIndicators = [
      "Número de anúncios",
      "Alcance total",
      "Impressões (ADS)",
      "Cliques no anúncio",
      "CTR (Click-Through Rate)",
      "CPC (Custo por Clique)",
      "COM (Custo por Mil Impressões)",
      "Conversões",
      "Taxa de conversão (%)",
      "CPA (Custo por Aquisição)",
    ];
    const emailIndicators = [
      
     "Qtd de E-mails enviados",
    "Taxa de abertura de e-mail",
    ];
   const siteIndicators = ["Site - Visitantes únicos"];
  
    if (pagoIndicators.includes(indicator)) return "";
    if (emailIndicators.includes(indicator)) return "Email";
    if (siteIndicators.includes(indicator)) return "Site";
    return "";
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedYear(newValue);
  };

  const data = selectedYear === "2024" ? data2024 : data2025;

  const handlePrint = () => {
    window.print();
  };
  const groupedData = data.reduce((acc, row) => {
    const category = categorizeIndicator(row.indicadores);
    if (!acc[category]) acc[category] = [];
    acc[category].push(row);
    return acc;
  }, {});
  return (
    <div style={{ padding: "20px" }}>
       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h4" gutterBottom>
              Setor: Design
            </Typography>
       <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
          <Table>
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
    overflow: "hidden", 
   }}
>
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
            padding: "8px",
            minWidth: "60px",
          }}
        >
          {month}
        </TableCell>
      )
    )}
    <TableCell
      colSpan={4}
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
    {["FIEAM", "SESI", "SENAI", "IEL"].map((name, index) => (
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
  {Object.entries(groupedData).map(([category, rows]) => (
    rows.map((row, rowIndex) => (
      <TableRow
        key={`${category}-${rowIndex}`}
        sx={{
          "& .MuiTableCell-root": {
            padding: "4px 6px",
            lineHeight: "1",
          },
          height: "50px",
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
              overflow: "hidden", 
              
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
        >{row.indicadores}</TableCell>
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
        {["fieam", "sesi", "senai", "iel"].map((key) => (
          <TableCell align="center" key={key}>
            {row.acumulado && row.acumulado[key] !== undefined ? row.acumulado[key] : "-"}
          </TableCell>
        ))}
      </TableRow>
    ))
  ))}
</TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <h4>Atualizado até 01/04/2025 às 11:55</h4>
    </div>
  );
};
export default Design;