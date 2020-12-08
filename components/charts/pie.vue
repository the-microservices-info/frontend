<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,

  props: {
    input: {
      type: Object,
      required: true,
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
          { data: Object.values(this.input), backgroundColor: this.colors },
        ],
      }
    },
  },

  mounted() {
    this.renderChart(this.chartData, {
      legend: {
        position: 'bottom',
      },
    })
  },
}
</script>
