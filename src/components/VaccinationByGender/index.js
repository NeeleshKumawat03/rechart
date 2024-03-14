import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByGender = ({vaccinationByGender}) => {
  return (
    <div>
      <h1>Vaccination By Gender</h1>
      <PieChart width={1000} height={300}>
      <Pie
        cx="70%"
        cy="40%"
        data={vaccinationByGender}
        startAngle={180}
        endAngle={0}
        innerRadius="40%"
        outerRadius="70%"
        dataKey="count"
      >
        <Cell name="Male" fill="#f54394" />
        <Cell name="Female" fill="#5a8dee" />
        <Cell name="Others" fill="#2cc6c6" />
      </Pie>
      <Legend
        iconType="circle"
        layout="horizontal"
        verticalAlign="middle"
        align="center"
      />
    </PieChart>
    </div>
    
  )
}

export default VaccinationByGender
