import styles from "./TaskCard.module.css"

import ImgPlus from '../assets/plus.svg'
import ImgTrash from '../assets/trash.svg'
import ImgClipboard from '../assets/Clipboard.svg'

import { useState } from 'react'


interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

export function TaskCard() {

  const [task, setTask] = useState<Todo[]>([])
  const [newTask, setNewTask] = useState(" ")


  function handleCreateNewTask() {
    if (!newTask) return

    const initialTodo= {
      id: Math.random(),
      text: newTask,
      isComplete: false,
    }

    setTask(oldState => [...oldState, initialTodo])
    setNewTask('')
  }


  function handleDeleteTask(id: number) {
    const deleteTask = task.filter(todo => todo.id !== id)

    setTask(deleteTask)
  }


  function handleToggleTaskIscomplet(id: number) {
    const changeTask = task.map(todo => todo.id == id ? {
      ...todo,
      isComplete: !todo.isComplete
    } : todo)

    setTask(changeTask)
  }

  const taskConcluded = task.reduce((total, curr) => total + Number(curr.isComplete), 0,)
  const taskCreated = task.length


  return (
    <main>
      <header className={styles.AddTask}>
        <div >
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          />

          <button type='submit' onClick={handleCreateNewTask} >
            Criar
            <img src={ImgPlus} alt="" />
          </button>
        </div>
      </header>

      <div className={styles.informationTask}>
        <div className={styles.information}>
          <div className={styles.taskCreated}>
            <b>Tarefas criadas</b>
            <span>{taskCreated}</span>
          </div>

          <div className={styles.taskConcluded}>
            <b>Concluidas</b>
            <span> {taskConcluded} de {taskCreated}</span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {taskCreated == 0 ? (
          <div className={styles.ifTaskNull}>
            <img src={ImgClipboard} alt="Ilustração de uma agenda" />
            <div>
              <p className={styles.phaseBold}>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        ) : (
          <ul>
            {task.map(todo => (
              <li key={todo.id}>
                <div>
                  <label className={styles.checked}>
                    <input
                      type="checkbox"
                      checked={todo.isComplete}
                      onClick={() => handleToggleTaskIscomplet(todo.id)}
                    />
                    <span className={styles.checkmark}></span>
                  </label >                 
                  <p className={todo.isComplete ? styles.completed : ''} >{todo.text}</p>
                </div>

                <button className={styles.btnDelet} onClick={() => handleDeleteTask(todo.id)}>
                  <img src={ImgTrash} alt="Deletar" />
                </button>
              </li>
            ))}
          </ul>
        )}

      </div>
    </main>

  )
}
