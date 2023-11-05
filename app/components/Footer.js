import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Footer = () => {
    
    return (
    <footer className="flex gap-2 opacity-20 text-sm">
        © 2023 ·
        <Link className="flex gap-1 items-center justify-center" href="https://www.linkedin.com/in/mateoalganaras/">
            <FontAwesomeIcon className="w-4 h-4" icon={faLinkedin} />
            <span>/mateoalganaras</span>
        </Link>
        <p>-</p>
        <Link className="flex gap-1 items-center justify-center" href="https://github.com/Tutealga">
        <FontAwesomeIcon className="w-4 h-4" icon={faGithub} />
            <span>Tutealga</span>
        </Link>
        </footer>
    )
}

export default Footer