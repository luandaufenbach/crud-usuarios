import './style.css'
import Lixeira from "../../assets/lixeira.png"

function Home() {

  const users = [{
    id: '12152352',
    name: 'sidnei',
    age: 22,
    email: 'sidnei@gmail.com'
  },
  {
    id: '235235235',
    name: 'luan',
    age: 45,
    email: 'luan@gmail.com'
  },
  ]
  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' />
        <input name='idade' type='number' />
        <input name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>
      {users.map(user => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>
            <img src={Lixeira} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home
