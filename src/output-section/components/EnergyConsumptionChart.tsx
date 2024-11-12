import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { blue } from "../../constants";
import { Formatter } from "recharts/types/component/DefaultTooltipContent";

const formatLabel = (key: string) => {
  const power = key.match(/\d+kW/);
  return power ? `${power[0]} Stations` : key;
};

const tooltipFormatter: Formatter<number, string> = (value, name) => [
  value,
  formatLabel(name),
];
export const EnergyConsumptionChart = () => {
  return (
    <ResponsiveContainer minWidth={300} width={500} height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          label={{
            value: "Energy Consumption (Wh / day)",
            angle: -90,
            offset: -8,
            dy: 110,
            position: "insideLeft",
          }}
        />

        <Tooltip formatter={tooltipFormatter} />
        <Legend
          formatter={formatLabel}
          // @ts-expect-error Legend accepts percentage widths although it expects a number type
          width="100%"
        />
        <Bar dataKey="charge_11kW" stackId="a" fill={blue[11]} />
        <Bar dataKey="charge_22kW" stackId="a" fill={blue[22]} />
        <Bar dataKey="charge_50kW" stackId="a" fill={blue[50]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

const data = [
  {
    name: "Mon",
    charge_11kW: 5000,
    charge_22kW: 3500,
    charge_50kW: 2000,
  },
  {
    name: "Tue",
    charge_11kW: 5200,
    charge_22kW: 3700,
    charge_50kW: 2100,
  },
  {
    name: "Wed",
    charge_11kW: 5100,
    charge_22kW: 3600,
    charge_50kW: 2050,
  },
  {
    name: "Thu",
    charge_11kW: 4900,
    charge_22kW: 3400,
    charge_50kW: 1950,
  },
  {
    name: "Fri",
    charge_11kW: 4700,
    charge_22kW: 3300,
    charge_50kW: 1900,
  },
  {
    name: "Sat",
    charge_11kW: 2500,
    charge_22kW: 1800,
    charge_50kW: 1000,
  },
  {
    name: "Sun",
    charge_11kW: 2000,
    charge_22kW: 1500,
    charge_50kW: 800,
  },
];
