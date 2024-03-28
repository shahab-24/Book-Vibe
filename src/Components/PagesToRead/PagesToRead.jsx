

import {
  Bar,
  BarChart,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getStoredBook } from "../Utility/LocalStorage";

const PagesToRead = () => {
  const colors = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042", "red", "pink"];

  const readedData = getStoredBook("read");
console.log(readedData);
  const chartData = readedData.map((book) => ({
    name: book.bookName,
    totalPages: book.totalPages,
    
  }))

  const getPath =  (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3} 
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div  className="bg-[#13131308] p-0 py-0 lg:p-5 md:p-5 lg:py-10 md:py-10 rounded-lg">
      <ResponsiveContainer width="100%" height={500}>
        <BarChart width={150} height={60} data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="totalPages"
            barSize={80}
            fill="#8B5CF6"
            shape={<TriangleBar />}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead; 