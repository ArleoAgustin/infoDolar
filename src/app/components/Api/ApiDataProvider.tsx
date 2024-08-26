import React, { useEffect, useState } from 'react';

interface DatesDolar {
  nombre: string;
  compra: number;
  venta: number;
  description: string;
  fechaActualizacion: string;
}

interface DataProviderProps {
  children: (data: DatesDolar[], loading: boolean, error: string | null) => React.ReactNode;
}

const descriptions = new Map<string, string>();

const dOficial = "El dólar oficial en Argentina es el tipo de cambio que establece el gobierno para la compra y venta de dólares estadounidenses en el mercado oficial. Este valor es regulado por el Banco Central de la República Argentina (BCRA) y suele ser utilizado en transacciones oficiales, como la importación y exportación de bienes. El dólar oficial generalmente es más bajo que otros tipos de cambio en el país, como el dólar blue (mercado paralelo). Debido a restricciones cambiarias, muchas operaciones no pueden realizarse al tipo de cambio oficial, lo que lleva a la existencia de diferentes cotizaciones en el mercado."
const dBlue = "El dólar blue es el tipo de cambio del dólar estadounidense en el mercado informal o paralelo de Argentina. Se diferencia del dólar oficial, ya que no está regulado por el Banco Central. Su valor es generalmente más alto debido a restricciones cambiarias y controles de capital que limitan el acceso al dólar oficial. El dólar blue refleja la oferta y demanda en el mercado negro y es utilizado para transacciones no oficiales."
const dBolsa = "El dólar bolsa es un tipo de cambio utilizado en Argentina para referirse al dólar que se compra y vende a través de operaciones financieras en la Bolsa de Valores. También conocido como dólar MEP (Mercado Electrónico de Pagos), este tipo de cambio se obtiene mediante la compra de bonos en pesos y su posterior venta en dólares, o viceversa. El dólar bolsa suele ser una opción para quienes buscan acceder a dólares de manera legal y regulada, sin recurrir al mercado informal. Su valor puede diferir del dólar oficial y del dólar blue debido a las condiciones del mercado financiero."
const dCCL = "El Dólar Contado con Liquidación (CCL) es una operación que permite a los inversores comprar dólares en el mercado argentino a través de la adquisición de activos financieros como acciones o bonos en pesos, los cuales se venden en el exterior para obtener la divisa. Esta operación es común en países con controles cambiarios, como Argentina, y se utiliza para acceder a dólares a un tipo de cambio más favorable o para protegerse contra la devaluación del peso."
const dM = "El Dólar Mayorista es el tipo de cambio utilizado en las transacciones de divisas entre grandes entidades financieras y empresas. Se refiere al valor del dólar estadounidense en el mercado mayorista, donde se negocian grandes cantidades de moneda. A diferencia del Dólar Minorista, que es el tipo de cambio aplicado a las transacciones individuales de consumidores, el Dólar Mayorista suele reflejar el valor más cercano a las condiciones reales del mercado y se utiliza como referencia para otros tipos de cambio, incluyendo el minorista. Es una herramienta clave para empresas y entidades financieras en la gestión de sus operaciones internacionales y de cobertura de riesgo cambiario."
const dCripto = "El Dólar Cripto, también conocido como Dólar Digital o Dólar en Cripto, se refiere a la representación digital del dólar estadounidense a través de tecnologías de criptomonedas. A diferencia del dólar tradicional, el Dólar Cripto está respaldado por criptografía y puede ser emitido en plataformas blockchain. Su propósito es facilitar transacciones rápidas, seguras y transparentes, combinando la estabilidad del dólar con las innovaciones tecnológicas de las criptomonedas. El Dólar Cripto busca integrar el valor del dólar con las ventajas de la tecnología blockchain, ofreciendo una alternativa digital en el ámbito financiero."
const dTarjeta = 'El "Dólar Tarjeta" es una cotización especial del dólar utilizada en Argentina para operaciones realizadas con tarjetas de crédito y débito en el extranjero. Este tipo de cambio se aplica a las compras y pagos realizados en divisas extranjeras a través de tarjetas emitidas por entidades financieras argentinas. El "Dólar Tarjeta" generalmente incluye un recargo adicional sobre el valor del dólar oficial, con el fin de reflejar los costos y tasas asociados a las transacciones internacionales y la conversión de moneda. Esta tasa es importante para aquellos que viajan al exterior o realizan compras en línea en sitios internacionales.'

descriptions.set('Oficial', dOficial);
descriptions.set('Blue', dBlue);
descriptions.set('Bolsa', dBolsa);
descriptions.set('Contado con liquidación', dCCL)
descriptions.set('Mayorista',dM);
descriptions.set('Cripto', dCripto)
descriptions.set('Tarjeta', dTarjeta)

function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState<DatesDolar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://dolarapi.com/v1/dolares')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      })
      .then((data) => {
        const mappedData = data
          .map((dolar: DatesDolar) => ({
            nombre: dolar.nombre,
            compra: dolar.compra,
            venta: dolar.venta,
            description: descriptions.get(dolar.nombre),
            fechaActualizacion: dolar.fechaActualizacion,
          }))
          .filter((dolar : DatesDolar) => dolar.nombre !== 'Contado con liquidación');

        setData(mappedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return <>{children(data, loading, error)}</>;
}

export default DataProvider;
