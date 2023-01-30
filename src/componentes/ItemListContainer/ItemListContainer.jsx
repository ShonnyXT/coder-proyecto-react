
const task = new Promise((resuelto, rechazado)=>{
  //acciones
  if (true){
    return resuelto('Todo ok gracias por la plata')
  }
  return rechazado('No puedo devolverte la plata')
})

const ItemListContainer = ({saludo}) => {

  task
    .then(resResuelto => console.log(resResuelto), err => console.log(err))

  return (
    <div>
        {saludo}
    </div>
  )
}

export default ItemListContainer