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

const Promocoes: React.FC = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("2025");

  type RowData = {
    indicadores: string;
    jan?: string | number;
    fev?: string | number;
    mar?: string | number;
    abr?: string | number;
    mai?: string | number;
    jun?: string | number;
    jul?: string | number;
    ago?: string | number;
    set?: string | number;
    out?: string | number;
    nov?: string | number;
    dez?: string | number;
    acumulado: {
      fieam?: string | number;
      sesi?: string | number;
      senai?: string | number;
      iel?: string | number;
    };
  };
  

  const data2024 = 
  [
    {
      "indicadores": "Qtd. profissionais ativos no mês",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-","dez":3,
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Qtd. de horas trabalhadas no setor",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-","dez":"-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Total de ações executadas no mês",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-","dez":"-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Tempo médio por ação executada",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-","dez":"-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    }, 
    {
      "indicadores": "Número de ações nas empresas",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 14, "dez": 21,
      "acumulado": { "fieam": 35, "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Número de eventos externos",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 1, "dez": "-",
      "acumulado": { "fieam": 1, "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Qtd leads captados em ações nas empresas",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 14, "dez": "-",
      "acumulado": { "fieam": 14, "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Qtd leads captados em eventos externos (feiras)",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 182, "dez": "-",
      "acumulado": { "fieam": 182, "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Nº de outdoors ativos por instituição",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Nº de mobiliário urbano ativo, por instituição",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    }
  ]
  const data2025 = 
    [
      {
        "indicadores": "Qtd. profissionais ativos no mês",
        "jan": 3, "fev": "3", "mar": "2", "abr": "3", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-","dez": "-",
        "acumulado": { "fieam": "3", "sesi": "-", "senai": "-", "iel": "-","total geral":"3" }
      },
      {
        "indicadores": "Qtd. de horas trabalhadas no setor",
        "jan": "528", "fev": "456", "mar": "352", "abr": "456", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-","dez": "-",
        "acumulado": { "fieam": "1.792", "sesi": "-", "senai": "-", "iel": "-","total geral":"1.792" }
      },
      {
        "indicadores": "Total de ações executadas no mês",
        "jan": "137" , "fev": "134", "mar": "61", "abr": "667", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-","dez": "-",
        "acumulado": { "fieam": "977", "sesi": "15", "senai": "7", "iel": "-","total geral":"999" }
      },
      {
        "indicadores": "Tempo médio por ação executada",
        "jan": "3h", "fev": "3h", "mar": "5h", "abr": "1h", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-","dez": "-",
        "acumulado": { "fieam": "3h", "sesi": "-", "senai": "-", "iel": "-","total geral":"3" }
      }, 
      {
        "indicadores": "Número de ações nas empresas",
        "jan": "6", "fev": "13", "mar": "6", "abr": "15", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-",
        "acumulado": { "fieam": "40", "sesi": "-", "senai": "-", "iel": "-","total geral":"40" }
      },
      {
        "indicadores": "Número de eventos externos",
        "jan": "-", "fev": "1", "mar": "2", "abr": "2", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-",
        "acumulado": { "fieam": "5", "sesi": "-", "senai": "-", "iel": "-","total geral":"5" }
      },
      {
        "indicadores": "Qtd leads captados em ações nas empresas",
        "jan": "124", "fev": "113", "mar": "38", "abr": "259", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-",
        "acumulado": { "fieam": "534", "sesi": "-", "senai": "-", "iel": "-","total geral":"534" }
      },
      {
        "indicadores": "Qtd leads captados em eventos externos (feiras)",
        "jan": "-", "fev": "2", "mar": "10", "abr": "386", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-",
        "acumulado": { "fieam": "398", "sesi": "-", "senai": "-", "iel": "-","total geral":"398" }
      },
      {
        "indicadores": "Nº de outdoors ativos por instituição",
        "jan":"7", "fev": "5", "mar": "5", "abr": "5", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-",
        "acumulado": { "fieam": "-", "sesi": 15, "senai": 7, "iel": "-","total geral":"22" }
      },
      {
        "indicadores": "Nº de mobiliário urbano ativo, por instituição",
        "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-",
        "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-","total geral":"-" }
      }
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
  
    if (pagoIndicators.includes(indicator)) return "Pago";
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

  const groupedData = data.reduce<Record<string, typeof data2024>>((acc, row) => {
    const category = categorizeIndicator(row.indicadores);
    if (!acc[category]) acc[category] = [];
    acc[category].push(row);
    return acc;
  }, {});

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="h4" gutterBottom>
                Setor: Promoções e Propaganda
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
    {["FIEAM", "SESI", "SENAI", "IEL","TOTAL - MÉDIA"].map((name, index) => (
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
          backgroundColor: rowIndex % 2 === 0 ? "#F5F5F5" : "#FFFFFF", // Alterna entre duas cores
        }}
      >
        
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
    {row[month as keyof RowData] !== undefined
      ? typeof row[month as keyof RowData] === "object"
        ? JSON.stringify(row[month as keyof RowData]) // Converte objetos em string
        : row[month as keyof RowData]
      : "-"}
  </TableCell>
))}

{["fieam", "sesi", "senai", "iel","total geral"].map((key) => (
  <TableCell align="center" key={key}>
    {row.acumulado[key as keyof typeof row.acumulado] !== undefined
      ? typeof row.acumulado[key as keyof typeof row.acumulado] === "object"
        ? JSON.stringify(row.acumulado[key as keyof typeof row.acumulado]) // Converte objetos em string
        : row.acumulado[key as keyof typeof row.acumulado]
      : "-"}
  </TableCell>
))}
      </TableRow>
    ))
  ))}
</TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <h4>Atualizado até 01/05/2025 atualizado às 9h</h4>
    </div>
  );
};
export default Promocoes;
