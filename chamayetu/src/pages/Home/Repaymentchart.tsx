import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./Home.css";

const data = [
  { name: "Fully paid", value: 21, percentage: "21%" },
  { name: "Partialy paid", value: 37, percentage: "37%" },
  { name: "Not paid", value: 32, percentage: "32%" },
  { name: "Emergency Loan", value: 10, percentage: "10%" },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

//pie chart to display the repayment rate
const Repaymentchart = () => {
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

export default Repaymentchart;
