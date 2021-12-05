import { VictoryChart, VictoryTheme, VictoryBar } from "victory";
const AgeChart = (props) => {
  const { youngUser, averageUser, oldUser } = props;

  console.log(youngUser, averageUser, oldUser);
  const total = youngUser + averageUser + oldUser;
  const myDataset = [
    { x: "Age <=20", y: youngUser },
    { x: "Age <30", y: averageUser },
    { x: "Age >=30", y: oldUser },
  ];
  return (
    <div style={{ marginTop: "15px" }}>
      <>
        <div
          style={{
            flexDirection: "row",
            justifyContent: "center",
            // backgroundColor: "#35a4ba",
            alignItems: "center",
            width: "100%",
            height: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>Total Users: {total}</h2>
          <p>Users's age data analysis</p>
        </div>
      </>

      <VictoryChart
        theme={VictoryTheme.material}
        animate={{
          duration: 3000,
          onLoad: { duration: 1000 },
        }}
        domainPadding={{ x: 20, y: 10 }}
        responsive={true}
      >
        <VictoryBar
          style={{ data: { fill: "#c43a31" } }}
          data={myDataset}
          x="x"
          y="y"
          events={[
            {
              target: "data",
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: "data",
                      mutation: (props) => {
                        const fill = props.style && props.style.fill;
                        return fill === "black"
                          ? null
                          : { style: { fill: "black" } };
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
      </VictoryChart>
    </div>
  );
};

export default AgeChart;
