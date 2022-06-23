
import './style.css'
import ImgLogo from '../../assets/Logo.svg'

export function Header() {
  
    return(
      <header className='header-todo'>
        <div>
        <img src={ImgLogo} alt="Logo ToDo" />
      </div>
      </header>

    )
  }
  
  