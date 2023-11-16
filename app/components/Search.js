'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Search = () => {
  const router = useRouter()
  const [user, setUser] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(user)
    setUser('')
  }

  return (
    <div className='py-1 pr-1 pl-5 rounded-full border border-white border-opacity-40 space-x-1 flex w-full justify-between flex-row'>
      <form className='w-full item-center justify-between flex p-1' onSubmit={(e) => handleSubmit(e)}>
        <input className='w-full bg-transparent text-sm font-bold font-mono focus:outline-none' placeholder='GitHub username...' value={user} onChange={(e) => setUser(e.target.value)} />
        <button className=' bg-[rgb(33,38,45,1)] py-1 px-2 rounded-full' type='submit'>
          <p>Search</p>
        </button>
      </form>
    </div>
  )
}

export default Search
