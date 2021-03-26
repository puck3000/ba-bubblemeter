import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

export default function ScoreBars({ barData }) {
  return (
    <ResponsiveContainer width='100%' height='100%' minHeight={100}>
      <BarChart
        margin={{
          top: 0,
          right: 20,
          bottom: 0,
          left: 50,
        }}
        layout='vertical'
        data={barData}
        barGap={1}
        barCategoryGap={0}
      >
        <Bar
          dataKey='value'
          maxBarSize={15}
          label={{ fill: 'white', fontSize: 10 }}
        />
        <XAxis domain={[0, 15]} type='number' hide={true} />
        <YAxis dataKey='name' type='category' />
      </BarChart>
    </ResponsiveContainer>
  )
}
