'use client'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState} from 'react';
import {useRouter} from 'next/navigation';

const Search = () => {
const router = useRouter()
const [user, setUser] = useState('')

const handleSubmit = (e) => {
 e.preventDefault()
 router.push(user)
 setUser('')
}

  return (
    <div className='py-1 pr-1 pl-5 rounded-md border space-x-1 flex w-full justify-between flex-row'>
      <form className='w-full item-center justify-between flex p-0.5' onSubmit={(e) => handleSubmit(e)}>
        <input className='w-full bg-transparent text-sm font-bold font-mono focus:outline-none' placeholder='Search stats...' value={user} onChange={(e) => setUser(e.target.value)} />
          <button className='w-6 h-6' type='submit'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
      </form>
    </div>
  )
}

export default Search