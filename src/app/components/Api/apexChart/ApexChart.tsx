import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface ApexChartComponentProps {
  data: { fecha: string; compra: number; venta: number }[];
}

function ApexChart({ data }: ApexChartComponentProps) {

    const filteredData = data.filter(d => new Date(d.fecha) >= new Date('2016-01-01'));

    const series = [
      {
        name: 'Venta',
        data: filteredData.map(d => ({ x: d.fecha, y: d.venta })),
      },
    ];

  const options: ApexOptions = {
    chart: {
      type: "line",
      width: 500,
      height: 350,
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: data.map((d) => d.fecha),
    },
    tooltip: {
      x: {
        format: "dd/MM/yyyy",
      },
    },
    colors: ["#00E396", "#0090FF"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
  };

  return <Chart options={options} series={series} type="area" width={400} height={250} />;
}

export default ApexChart;
