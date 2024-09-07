import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface LineChartProps {
  data: number[] // Single dataset array
  labels: string[] // Labels for X-axis, passed from the parent component
  colors?: string // Color for the line
  showYAxes?: boolean // Toggle display of Y-axis
  showXAxes?: boolean // Toggle display of X-axis
  axisLabelSuffix?: string // Add suffix to Y-axis labels (e.g., "тыс. руб")
  height?: number // Chart height
  width?: number // Chart width
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  labels, // Labels passed from parent
  colors = '#2977B5', // Default line color
  showYAxes = true,
  showXAxes = true,
  axisLabelSuffix = '', // Default: no suffix
  height = 150!, // Default height
  width = 500!, // Default width
}) => {
  const chartData = {
    labels: labels, // X-axis labels provided by the parent component
    datasets: [
      {
        label: '',
        data: data, // Data provided by the parent component
        borderColor: colors, // Line color
        backgroundColor: colors, // Point background color
        pointRadius: 0, // Remove dots
        borderWidth: 1, // Thinner line
        tension: 0.1, // Smooth curve
        fill: false, // Disable fill under the line
      },
    ],
  }

  const options = {
    scales: {
      x: {
        display: showXAxes, // Hide or show X axis
        grid: {
          display: showXAxes,
        },
        ticks: {
            font:{
                size: 7.7
            }
          },
      },
      y: {
        display: showYAxes, // Hide or show Y axis
        position: 'right' as const, // Move Y-axis to the right
        grid: {
          display: showYAxes,
        },
        ticks: {
          callback: function (value: number | string) {
            return value + ' ' + axisLabelSuffix // Add suffix to Y-axis labels
          },
          font:{
            size: 10
            }
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
     
    },
    responsive: false, // Make chart responsive
    maintainAspectRatio: true, // Allows better responsiveness
  }

  return <Line data={chartData} options={options} height={height} width={width} />
}

export default LineChart
