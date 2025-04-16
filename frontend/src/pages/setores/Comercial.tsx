import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import InfoIcon from "@mui/icons-material/Info";


const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

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
import PowerBIModalComercial from "./modalBI/PowerBIModal";

const Comercial: React.FC = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("2025");

  const indicadoresInfo: Record<string, string> = {
    "Qtd. profissionais ativos no mês": "São todas as 9 Consultoras e Coordenadora Adriana Dabela",
    "Qtd. horas de trabalhadas no setor": "O cálculo é realizado pelo valor da jornada de trabalho multiplicado pelo dia útil do mês",
    "Total de ações executadas no mês": "É o somatório de todas as atividades realizadas incluindo (Nº de Visitas, Propostas e Pedidos)",
    "Tempo médio por ação executada": "O valor da média de ações executadas é o total de horas trabalhadas dividido pelo total de ações executadas",
    "Nº de visitas realizadas": "São contabilizadas todas as visitas cadastradas no sistema CRM chamado de Compromisso",
    "Propostas geradas - Qtd": "São contabilizadas todas as propostas geradas no sistema CRM com status Ganha, Rascunho, Fechado. *E estão em constante atualização devido negociação",
    "Propostas geradas - R$": "São somados os valores das propostas geradas no sistema CRM com status Ganha, Rascunho, Fechado. *E estão em constante atualização devido negociação",
    "Propostas Ganha - Qtd": "São somados os valores das propostas geradas no sistema CRM com status Ganha e Ativa",
    "Propostas Ganha - R$": "São somados os valores das propostas geradas no sistema CRM com status Ganha e Ativa",
    "Pedidos gerados - Qtd": "É a contagem de todos os “status” que foram realizados no período do mês vigente",
    "Pedidos gerados - R$": "É a soma de todos os “status” que foram realizados no período do mês vigente",
    "Pedidos faturados - Qtd": "É a contagem dos “status” [FATURADO e GANHA]  que foram realizados no período do mês vigente",
    "Pedidos faturados - R$": "É a soma dos “status” [FATURADO e GANHA]  que foram realizados no período do mês vigente",
    
  };
  const data2024 = 
[
{ indicadores: "Qtd. profissionais ativos no mês", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 10, dez: "9", acumulado: { fieam: "9,5", sesi: "-", senai: "-", iel: "-" } }, 
{ indicadores: "Qtd. horas de trabalhadas no setor", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "1.600", dez: "1.224", acumulado: { fieam: "2.824", sesi: "-", senai: "-", iel: "-" } }, 
{ indicadores: "Total de ações executadas no mês", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "560", dez: "591", acumulado: { fieam: "1.151", sesi: "-", senai: "-", iel: "-" } }, 
{ indicadores: "Tempo médio por ação executada", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "2h51min", dez: "2h03min", acumulado: { fieam: "2h27min", sesi: "-", senai: "-", iel: "-" } }, 
{ indicadores: "Nº de visitas realizadas", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 40, dez: 20, acumulado: { fieam: 60, sesi: "-", senai: "-", iel: "-" } }, 
{ indicadores: "Propostas geradas - Qtd", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 144, dez: 128, acumulado: { fieam: "-", sesi: 168, senai: 62, iel: 42 } }, 
{ indicadores: "Propostas geradas - R$", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "R$ 1.651.434", dez: "R$ 1.370.626", acumulado: { fieam: "-", sesi: "R$ 2.069.092", senai: "R$ 833.128", iel: "R$ 119.840" } }, 
{ indicadores: "Propostas Ganha - Qtd", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 18, dez: 10, acumulado: { fieam: "-", sesi: 8, senai: 20, iel: "-" } }, 
{ indicadores: "Propostas Ganha - R$", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: " R$ 54.039", dez: " R$ 203.059", acumulado: { fieam: "-", sesi: "R$ 17.065", senai: "R$ 240.034", iel: "-" } }, 
//{ indicadores: "Pedidos gerados - Qtd", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 373, dez: 440, acumulado: { fieam: "-", sesi: 748, senai: 65, iel: "-" } }, 
//{ indicadores: "Pedidos gerados - R$", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "R$ 1.347.214", dez: " R$ 1.220.266", acumulado: { fieam: "-", sesi: "R$ 1.985.745", senai: "R$ 581.734", iel: "-" } }, 
{ indicadores: "Pedidos faturados - Qtd", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: 350, dez: 396, acumulado: { fieam: "-", sesi: 695, senai: 51, iel: "-" } }, 
{ indicadores: "Pedidos faturados - R$", jan: "-", fev: "-", mar: "-", abr: "-", mai: "-", jun: "-", jul: "-", ago: "-", set: "-", out: "-", nov: "R$ 1.119.479", dez: "R$ 1.017.566", acumulado: { fieam: "-", sesi: "R$ 1.854.887", senai: "R$ 282.158", iel: "-" } } ];
  

const data2025 = [
    { "indicadores": "Qtd. profissionais ativos no mês", "jan": 10, "fev": 8, "mar": "9", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-", 
      "acumulado": { "fieam": 9, "sesi": "-", "senai": "-", "iel": "-" } }, 

    { "indicadores": "Qtd. horas de trabalhadas no setor", "jan": "1.760", "fev": "1.360", "mar": "1.512", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-", 
      "acumulado": { "fieam": "4.632", "sesi": "-", "senai": "-", "iel": "-" } }, 

    { "indicadores": "Total de ações executadas no mês", "jan": 547, "fev": 836, "mar": "829", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-", 
      "acumulado": { "fieam": "475", "sesi": "1.373", "senai": "288", "iel": "76" } }, 

    { "indicadores": "Tempo médio por ação executada", "jan": "3h12min", "fev": "1h37min", "mar": "1h49min", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-", 
      "acumulado": { "fieam": "2h9min", "sesi": "-", "senai": "-", "iel": "-" } },

    { "indicadores": "Nº de visitas realizadas", "jan": 173, "fev": 134, "mar": "168", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-", 
      "acumulado": { "fieam": 475, "sesi": "-", "senai": "-", "iel": "-" } }, 

    { "indicadores": "Propostas geradas - Qtd", "jan": 166, "fev": 205, "mar": "234", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-", 
      "acumulado": { "fieam": "-", "sesi": 398, "senai":157, "iel": 50 } }, 

    { "indicadores": "Propostas geradas - R$", "jan": "R$ 866.191", "fev": "R$ 1.197.978", "mar": " R$ 1.722.616,61 ", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-", 
      "acumulado": { "fieam": "-", "sesi": " R$ 2.519.573,79", "senai": "R$ 1.096.417,88", "iel": " R$ 170.794,55" } }, 

    { "indicadores": "Propostas Ganha - Qtd", "jan": 90, "fev": 90, "mar": "111", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-", 
      "acumulado": { "fieam": "-", "sesi": 204, "senai": 61, "iel": 26 } },

    { "indicadores": "Propostas Ganha - R$", "jan": "R$ 265.368", "fev": "R$ 421.483", "mar": "R$ 394.192", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-", 
      "acumulado": { "fieam": "-", "sesi": "R$ 763.520", "senai": "R$ 263.803", "iel": "R$ 53.720" } }, 
  
    { "indicadores": "Pedidos faturados - Qtd", "jan": 118, "fev": 407, "mar": "316", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-", 
      "acumulado": { "fieam": "-", "sesi": 771, "senai": 70, "iel": "-" } }, 

    { "indicadores": "Pedidos faturados - R$", "jan": "R$ 953.033", "fev": "R$ 1.100.428", "mar": "R$ 697.127", "abr": "-", "mai": "-", "jun": "-", "jul": "-", "ago": "-", "set": "-", "out": "-", "nov": "-", "dez": "-", 
      "acumulado": { "fieam": "-", "sesi": "R$ 3.640.079", "senai": "R$ 912.342", "iel": "-" } } ]
  
    
    const categorizeIndicator = (indicator: string): string => {
    const pagoIndicators = [
      "Qtd. profissionais ativos no mês",
    ];
  
    const emailIndicators = [
     "Pedidos faturados - R$",
    ];
   const siteIndicators = ["Site - Visitantes únicos"];
  
    if (pagoIndicators.includes(indicator)) return "RH";
    if (emailIndicators.includes(indicator)) return "PJ";
    if (siteIndicators.includes(indicator)) return "Site";
  
    return ".";
  };
  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedYear(newValue);
  };
  const handlePrint = () => {
    window.print();
  };
  const data = selectedYear === "2025" ? data2025 : data2024;
  const groupedData = data.reduce((acc, row) => {
    const category = categorizeIndicator(row.indicadores);
    if (!acc[category]) acc[category] = [];
    acc[category].push(row);
    return acc;
  }, {});

  return (
    <div style={{ padding: "20px" }}>
      
      <div style={{ padding: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <BootstrapTooltip title="Setor Comercial - Supervisionado pela Coordenadora Adriana Dabela ">
                  <Typography variant="h4" gutterBottom>
                Setor: Comercial
              </Typography>
              </BootstrapTooltip>
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
                <PowerBIModalComercial></PowerBIModalComercial>
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
          <Tab value="2025" label="2025" />
          
          <Tab value="2024" label="2024" />

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
             <BootstrapTooltip title={indicadoresInfo[row.indicadores] || "Sem descrição disponível"} arrow>
             <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                {row.indicadores}
                </div>
              </BootstrapTooltip>
            
        
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
      <h4>Atualizado até 01/04/2025 às 9h</h4>
    </div>
  );
};
export default Comercial;
