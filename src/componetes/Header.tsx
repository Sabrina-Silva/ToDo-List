
import styles from "./Header.module.css"
import ImgLogo from '../assets/Logo.svg'

export function Header() {

  return (
    <header className={styles.header}>
      <div>
        <img src={ImgLogo} alt="Logo ToDo" />
      </div>
    </header>

  )
}

