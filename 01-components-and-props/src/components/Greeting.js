function Greeting (props) {
  const message = `Olá, ${props.firstName}`;
  
  return (
    <div>
      <u>{message}</u>
    </div>
  )
}

export default Greeting;