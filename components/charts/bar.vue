<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,

  props: {
    input: {
      type: Object,
      required: true,
    },
    displayLegend: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    colors: ['red', 'green', 'blue', 'orange', 'purple'],
  }),

  computed: {
    chartData() {
      return {
        labels: Object.keys(this.input),
        datasets: [
          {
            label: Object.keys(this.input),
            data: Object.values(this.input),
            backgroundColor: this.colors,
          },
        ],
      }
    },
  },

  mounted() {
    this.renderChart(this.chartData, {
      legend: {
        display: this.displayLegend,
      },
    })
  },
}
</script>
