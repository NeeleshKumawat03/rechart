import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = ({vaccinationByAge}) => {
  console.log(vaccinationByAge)
  return (
    <div>
      <h1>Vaccination By Age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="70%"
          cy="40%"
          data={vaccinationByAge}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
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

export default VaccinationByAge
