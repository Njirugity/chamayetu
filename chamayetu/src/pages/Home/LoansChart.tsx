import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./Home.css";

const data = [
  { name: "Cleared Loans", value: 120000 },
  { name: "Active loans", value: 247330 },
  { name: "Defaulted loans", value: 60500 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//loads a pie chart that displays the total loans and their status
const LoansChart = () => {
  return (
    <div>
      <PieChart className="chartContainer" width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={65}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className="chart-legend">
        {data.map((entry, index) => (
          <div key={index} className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: COLORS[index] }}
            ></span>
            <span>
              {entry.name}: {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoansChart;
