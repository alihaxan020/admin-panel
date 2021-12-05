import { VictoryPie, VictoryLabel } from "victory";
const Chart = (props) => {
  const { maleCount, femaleCount } = props;
  return (
    <div style={{ marginTop: "15px" }}>
      <>
        <h2>Male: </h2>
        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#35a4ba",
            width: "50%",
            height: "25px",
            borderRadius: "20px",
          }}
        ></div>
      </>
      <>
        <h2>Female: </h2>
        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#f65a6f",
            width: "50%",
            height: "25px",
            borderRadius: "20px",
          }}
        ></div>
      </>
      <svg viewBox="0 0 400 400">
        <VictoryPie
          animate={{
            duration: 3000,
            onLoad: { duration: 1000 },
          }}
          standalone={false}
          width={400}
          height={400}
          colorScale={["#35a4ba", "#f65a6f"]}
          data={[
            { x: "Male", y: maleCount },
            { x: "Female", y: femaleCount },
          ]}
          innerRadius={68}
          labelRadius={100}
          percent={true}
          responsive={true}
          style={{ labels: { fontSize: 15, fill: "white" } }}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 20 }}
          x={200}
          y={200}
          text="Gender!"
        />
      </svg>
    </div>
  );
};

export default Chart;
