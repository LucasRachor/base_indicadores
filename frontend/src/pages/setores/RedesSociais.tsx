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

const RedesSociais: React.FC = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("2025");

  const data2024 = [
    
    {
      "indicadores": "Qtd. profissionais ativos no mês",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Qtd. de horas trabalhadas no setor",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Total de ações executadas no mês",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
   
    {
      "indicadores": "Tempo médio por ação executada",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    }, 
        {
          "indicadores": "Número de anúncios",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 195,
          "acumulado": { "fieam": 0, "sesi": 146, "senai": 49, "iel": 0 }
        },
        {
          "indicadores": "Alcance total",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 513221,
          "acumulado": { "fieam": 0, "sesi": 336409, "senai": 176812, "iel": 0 }
        },
        {
          "indicadores": "Impressões (ADS)",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 2285816,
          "acumulado": { "fieam": 0, "sesi": 1398706, "senai": 887110, "iel": 0 }
        },
        {
          "indicadores": "Cliques no anúncio",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 24300,
          "acumulado": { "fieam": 0, "sesi": 14732, "senai": 9568, "iel": 0 }
        },
        {
          "indicadores": "CTR (Click-Through Rate)",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 0.0213,
          "acumulado": { "fieam": 0, "sesi": 0.0105, "senai": 0.0108, "iel": 0 }
        },
        {
          "indicadores": "CPC (Custo por Clique)",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 1.74,
          "acumulado": { "fieam": 0, "sesi": 0.76, "senai": 0.98, "iel": 0 }
        },
        {
          "indicadores": "COM (Custo por Mil Impressões)",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 18.88,
          "acumulado": { "fieam": 0, "sesi": 9.87, "senai": 9.01, "iel": 0 }
        },
        {
          "indicadores": "Conversões",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 3405,
          "acumulado": { "fieam": 0, "sesi": 2252, "senai": 1153, "iel": 0 }
        },
        {
          "indicadores": "Taxa de conversão (%)",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 0,
          "acumulado": { "fieam": 0, "sesi": 0, "senai": 0, "iel": 0 }
        },
        {
          "indicadores": "CPA (Custo por Aquisição)",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 15.36,
          "acumulado": { "fieam": 0, "sesi": 7.21, "senai": 8.15, "iel": 0 }
        },
        {
          "indicadores": "Qtd de E-mails enviados",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 45043,
          "acumulado": { "fieam": 0, "sesi": 45043, "senai": 0, "iel": 0 }
        },
        {
          "indicadores": "Taxa de abertura de e-mail",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 0.0342,
          "acumulado": { "fieam": 0, "sesi": 0.0342, "senai": 0, "iel": 0 }
        },
        {
          "indicadores": "Site - Visitantes únicos",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": 210,
          "acumulado": { "fieam": 210, "sesi": 0, "senai": 0, "iel": 0 }
        },
        {
          "indicadores": "Publicação nas redes sociais",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
          "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
        },
    {
          "indicadores": "Resposta de comentários nas redes sociais",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
          "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
        },
        {
          "indicadores": "Contas Alcançadas",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
          "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
        },
        {
          "indicadores": "Interações",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
          "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
        },
    {
          "indicadores": "Taxa de Engajamento",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
          "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
        }, 
       
        {
          "indicadores": "Seguidores",
          "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
          "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
        }, 
        ];

  const data2025 = [
    {
      "indicadores": "Qtd. profissionais ativos no mês",
      "jan": 3, "fev": "3", "mar": "3", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 3, "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Qtd. de horas trabalhadas no setor",
      "jan": 528, "fev": "456", "mar": "504", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam":"1.488", "sesi": "-", "senai": "-", "iel": "-" }
    },
    {
      "indicadores": "Total de ações executadas no mês",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    },
   
    {
      "indicadores": "Tempo médio por ação executada",
      "jan": "-", "fev": "-", "mar": "-", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "-", "senai": "-", "iel": "-" }
    }, 
    {
      "indicadores": "Número de anúncios",
      "jan": "-", "fev": "-", "mar": "125", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "34", "senai": "74", "iel": "17" }
    },
    {
      "indicadores": "Alcance total",
      "jan": "918.090", "fev": "1.132.613", "mar": "1.191.849", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "585.861", "senai": "579.414", "iel": "26.574"
      }
    },
    {
      "indicadores": "Impressões (ADS)",
      "jan": "1.563.641", "fev": "3.384.256", "mar": "3.263.810", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "1.774.586", "senai": "1.423.569", "iel": "65.655"
      }
    },
    {
      "indicadores": "Cliques no anúncio",
      "jan": "17.214", "fev": "23.760", "mar": "48.370", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "14.987", "senai": "32.430", "iel": "953" }
    },
    {
      "indicadores": "CTR (Click-Through Rate)",
      "jan": "1.86", "fev": "4.22", "mar": "4.25", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam":"-", "sesi": "1,25", "senai": "1,76", "iel":"1,24"}
    },
    {
      "indicadores": "CPC (Custo por Clique)",
      "jan": "2.97", "fev": "1.52", "mar": "5,37", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "2", "senai": "1,07", "iel": "2,3" }
    },
    {
      "indicadores": "COM (Custo por Mil Impressões)",
      "jan": "51.72", "fev": "33,41", "mar": "26,86", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "9,13", "senai":"8,74", "iel": "8,99"}
    },
    {
      "indicadores": "Conversões",
      "jan": 1.603, "fev": "5.492", "mar": "5.353", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": "1.016", "senai":"4.217", "iel": "120" }
    },
    {
      "indicadores": "Taxa de conversão (%)",
      "jan": 59, "fev": "27", "mar": "34", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": 11, "senai": "14", "iel": "9" }
    },
    {
      "indicadores": "CPA (Custo por Aquisição)",
      "jan": "13,15", "fev": "15,4", "mar": "16,39", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "-", "sesi": 7.41, "senai": "4,14", "iel": "4,84" }
    },
    {
      "indicadores": "Qtd de E-mails enviados",
      "jan": 1.476, "fev": "519", "mar": " 619", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 129, "sesi": 1.476, "senai": 751, "iel": "258" }
    },
    {
      "indicadores": "Taxa de abertura de e-mail",
      "jan": 27, "fev": "10", "mar": "14", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 8, "sesi": 20, "senai": 17, "iel": "6" }
    },
    {
      "indicadores": "Site - Visitantes únicos",
      "jan": 9.395, "fev": "11.544", "mar": "7.234", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 3.147, "sesi": 2.100, "senai": 1.987, "iel": "-" }
    },
    {
      "indicadores": "Publicação nas redes sociais",
      "jan": "94", "fev": "674", "mar": "225", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 50, "sesi": 474, "senai": 150, "iel": 94 }
    },
{
      "indicadores": "Resposta de comentários nas redes sociais",
      "jan": 157, "fev": "2.220", "mar": "1.835", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 3, "sesi": 1.449, "senai": 203, "iel": 180 }
    },
    {
      "indicadores": "Contas Alcançadas",
      "jan": 88.867, "fev": "450.493", "mar": "575.176", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "4.307", "sesi": "420.545", "senai": "96.728", "iel": "53.596" }
    },
    {
      "indicadores": "Interações",
      "jan": 3.672, "fev": "46.495", "mar": "44.782", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 229, "sesi": "31.132", "senai": "7.106", "iel": "6315" }
    },
{
      "indicadores": "Taxa de Engajamento",
      "jan": 12, "fev": "10", "mar": "4", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": "3,18", "sesi": "3,12", "senai": "3,98", "iel": "6,08" }    }, 
    {
      "indicadores": "Seguidores",
      "jan": 171.729, "fev": "177.273", "mar": "181.501", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-",
      "acumulado": { "fieam": 9.149, "sesi": 63.581, "senai": 87.003, "iel": 21.768 }
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

    const OrganicoIndicators = [
      
"Seguidores",
"Taxa de Engajamento",
"Interações",
"Contas Alcançadas",
"Resposta de comentários nas redes sociais",
"Publicação nas redes sociais"
       
     ];
   const siteIndicators = ["Site - Visitantes únicos"];
  
    if (pagoIndicators.includes(indicator)) return "Pago";
    if (emailIndicators.includes(indicator)) return "Email";
    if (siteIndicators.includes(indicator)) return "Site";
    if (OrganicoIndicators.includes(indicator)) return "Orgânico";
  
    return " ";
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
                Setor: Redes Sociais
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
              //overflow: "hidden", 
              
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
      <h4>Atualizado até 02/04/2025 às 12h</h4>
    </div>
  );
};
export default RedesSociais;
