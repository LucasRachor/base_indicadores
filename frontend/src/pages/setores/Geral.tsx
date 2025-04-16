import Marketing from "./Marketing";
import Comercial from "./Comercial";
import CallCenter from "./CallCenter";
import Design from "./Design";
import { Typography } from "@mui/material";
import Administracao from "./Administracao";
import Mercado from "./Mercado";
//import Pesquisa from "./Pesquisa";
import Promocoes from "./Promocoes";
import RedesSociais from "./RedesSociais";

const Geral: React.FC = () => {
    return (
    <div>

                <Typography 
                variant="h4" 
                gutterBottom 
                style={{ textAlign: 'center' }}
                >
                VISÃO GERAL
                </Typography>

    <Comercial></Comercial>
    <CallCenter></CallCenter>
    <Marketing></Marketing>
    <Design></Design>
    <Administracao></Administracao>
    <Mercado></Mercado>
    {/* <Pesquisa></Pesquisa> */}
    <Promocoes></Promocoes>
    <RedesSociais></RedesSociais>
</div>
)}
export default Geral;
