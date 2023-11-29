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
    <div className='pl-2 border border-white border-opacity-40 space-x-1 flex w-full justify-between flex-row rounded-lg'>
      <form className='w-full item-center justify-between flex' onSubmit={(e) => handleSubmit(e)}>
        <input className='w-full bg-transparent text-sm font-bold font-mono focus:outline-none p-2' placeholder='GitHub username...' value={user} onChange={(e) => setUser(e.target.value)} />
        <button className={`py-1 px-2 rounded-r-lg p-2 selection:ease-in-out duration-300 transition ${user ? 'bg-[#E0004D] cursor-pointer text-[#101a23] shadow-[0_0_14px_rgb(224,0,77,0.7),inset_0_0_0_1px_#e0004d]' : 'bg-[rgb(33,38,45,1)] cursor-not-allowed'}`} type='submit'>
          <p className='opacity-80'>Search</p>
        </button>
      </form>
    </div>
  )
}

export default Search
