import './style.css'
import ImgPlus from '../../assets/plus.svg'
export function TaskCard() {

  return (
    <>
      <header className="input-task">
        <div >
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
          />
          <button>
            criar
            <img src={ImgPlus} alt="" />
          </button>
        </div>
      </header>

      <main>
        <span>Tarefas concluidas</span>
        <span>Concluidas</span>
        <hr />
      </main>
    </>

  )
}

