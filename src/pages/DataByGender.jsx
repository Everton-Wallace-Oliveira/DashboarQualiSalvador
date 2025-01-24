import { useEffect, useState, useCallback } from "react";
import DashboardHeader from "../components/DashboardHeader";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart";
import Loading from "../components/Loading";

export default function DataByGender() {
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = {
        genero: [
          { id: "Masculino", label: "Masculino", value: 60 },
          { id: "Feminino", label: "Feminino", value: 40 },
        ],
        inscritosPorMes: [
          { x: "Jan", y: 50 },
          { x: "Fev", y: 75 },
          { x: "Mar", y: 100 },
          { x: "Abr", y: 125 },
        ],
      };
      setChartData(data);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <DashboardHeader title="Dashboard - QualiSalvador" />
      <div className="container mx-auto p-4">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Gráficos de Pizza */}
            <div className="col-span-1">
              {chartData?.genero && (
                <PieChart
                  data={chartData.genero}
                  title="Distribuição por Gênero"
                  height={300}
                />
              )}
            </div>
            {/* Gráfico de Linha */}
            <div className="col-span-2">
              {chartData?.inscritosPorMes && (
                <LineChart
                  data={chartData.inscritosPorMes}
                  title="Inscritos por Mês"
                  height={400}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}