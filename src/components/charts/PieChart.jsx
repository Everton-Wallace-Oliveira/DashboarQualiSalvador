import { ResponsivePie } from "@nivo/pie";
import PropTypes from "prop-types";

const PieChart = ({ data, title, height }) => {
  return (
    <div style={{ height }}>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <ResponsivePie
              data={data}
              //
        margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "orange_red" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkColor={{ from: "color" }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
      />
    </div>
  );
}

PieChart.propTypes = {
    data: PropTypes.any,
    title: PropTypes.string,
    height: PropTypes.number,
}

export default PieChart