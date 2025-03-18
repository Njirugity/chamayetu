import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./Home.css";

const data = [
  { month: "Jan", contribution: 42200 },
  { month: "Feb", contribution: 21100 },
  { month: "Mar", contribution: 30000 },
  { month: "Apr", contribution: 0 },
  { month: "May", contribution: 0 },
  { month: "Jun", contribution: 0 },
  { month: "Jul", contribution: 0 },
  { month: "Aug", contribution: 0 },
  { month: "Sep", contribution: 0 },
  { month: "Oct", contribution: 0 },
  { month: "Nov", contribution: 0 },
  { month: "Dec", contribution: 0 },
];

const ColumnChart = () => {
  return (
    <div>
      <ResponsiveContainer className="columnChart" width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="contribution" fill="#007bff" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ColumnChart;
