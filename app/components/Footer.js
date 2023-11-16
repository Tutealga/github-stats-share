import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex gap-2 text-sm'>
      <p className='opacity-40'>© 2023 ·</p>
      <Link className='hover:opacity-100 opacity-40 flex gap-1 items-center justify-center' href='https://www.linkedin.com/in/mateoalganaras/'>
        <FontAwesomeIcon className='w-4 h-4' icon={faLinkedin} />
        <span>/mateoalganaras</span>
      </Link>
      <p className='opacity-40'>-</p>
      <Link className='hover:opacity-100 opacity-40 flex gap-1 items-center justify-center' href='https://github.com/Tutealga'>
        <FontAwesomeIcon className='w-4 h-4' icon={faGithub} />
        <span>Tutealga</span>
      </Link>
    </footer>
  )
}

export default Footer
