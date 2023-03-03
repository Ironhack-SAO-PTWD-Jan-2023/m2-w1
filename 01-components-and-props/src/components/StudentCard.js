function StudentCard ({name, cohort, week, color}) {
  // const {name, cohort, week} = props;

  return (
    <div className={`student-card ${color}`} >
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Cohort:</b> {cohort.city} - {cohort.course}
      </p>
      <p>
        <b>Current Week:</b> {week}
      </p>
    </div>
  )
}

export default StudentCard;