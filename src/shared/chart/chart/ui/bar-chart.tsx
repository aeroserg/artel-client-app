import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface BarChartProps {
  data: number[] // Single dataset array
  labels?: string[] // Labels for X-axis
  colors?: string[] // Colors for each bar
  showYAxes?: boolean // Toggle display of Y-axis
  showXAxes?: boolean // Toggle display of X-axis
  showLabels?: boolean // Toggle display of data labels
  axisLabelSuffix?: string // Add suffix to Y-axis labels (e.g., "тыс. руб")
  height?: number // Chart height
  width?: number // Chart width
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'], // Provide default labels for X-axis
  colors = ['#2977B5', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'], // Default colors for each bar
  showYAxes = true,
  showXAxes = true,
  showLabels = true,
  axisLabelSuffix = '', // Default: no suffix
  height = 400, // Default height
  width = 600, // Default width
}) => {
  const chartData = {
    labels: showLabels ? labels.slice(0, data.length) : Array(data.length).fill(''), // Only show as many labels as there are data points
    datasets: [
      {
        label: '',
        data: data,
        backgroundColor: colors.slice(0, data.length), // Assign unique color to each bar
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

  return <Bar data={chartData} options={options} height={height} width={width} />
}

export default BarChart
