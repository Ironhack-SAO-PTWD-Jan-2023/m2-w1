const students = [
  'André',
  'Bruno',
  'Hercules',
  'João Victor',
  'João Vitor',
  'Lucas',
  'Matheus',
  'Natália'
];

function StudentList() {
  return (
    <div className='list'>
      <h2>Student List</h2>
      {students.map((student, index) => {
        return <p key={index}>{student}</p>
      })}
    </div>
  )
}

export default StudentList;