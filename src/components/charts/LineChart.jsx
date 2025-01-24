import { ResponsiveLine } from "@nivo/line";
import PropTypes from "prop-types";

export default function LineChart({ data, title, height }) {
  return (
    <div style={{ height }}>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <ResponsiveLine
        data={[{ id: "Inscritos", data }]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Mês",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Quantidade",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={{ scheme: "category10" }}
        lineWidth={2}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
      />
    </div>
  );
}


LineChart.propTypes = {
    data: PropTypes.any,
    title: PropTypes.string,
    height: PropTypes.number,
}
