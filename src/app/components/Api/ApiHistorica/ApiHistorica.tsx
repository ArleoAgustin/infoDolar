import { useEffect, useState } from 'react';
import ApexChartComponent from '../apexChart/ApexChart';

interface ApiHistoricaProps {
    casa: string;
  }
  
  function ApiHistorica({ casa }: ApiHistoricaProps) {
    
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const urlDBlue = "https://api.argentinadatos.com/v1/cotizaciones/dolares/blue";
  const urlDOficial = "https://api.argentinadatos.com/v1/cotizaciones/dolares/oficial"
  const urlDBolsa = "https://api.argentinadatos.com/v1/cotizaciones/dolares/bolsa"
  const urlDCripto = "https://api.argentinadatos.com/v1/cotizaciones/dolares/cripto"
  const urlDMayorista = "https://api.argentinadatos.com/v1/cotizaciones/dolares/mayorista"
  const urlDTarjeta = "https://api.argentinadatos.com/v1/cotizaciones/dolares/turista"
  let url ="";

switch (casa) {
    case "Oficial":
         url = urlDOficial
        break;
        case "Blue":
            url = urlDBlue
           break;
           case "Bolsa":
            url = urlDBolsa
           break;
           case "Cripto":
            url = urlDCripto
           break;
           case "Mayorista":
            url = urlDMayorista
           break;
           case "Tarjeta":
            url = urlDTarjeta
           break;
    default:
        break;
}

  useEffect(() => {
    fetch(`https://api.argentinadatos.com/v1/cotizaciones/dolares/${url}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Gráfico de Cotización del Dólar</h1>
      <ApexChartComponent data={data} />
    </div>
  );
}

export default ApiHistorica;
