const Skeleton = () => {
  return (
    <div className='border p-5 rounded-lg w-full h-[450px] justify-between flex flex-col animate-pulse bg-gray-300 border-gray-300 bg-opacity-10'>
      <div className='flex items-center justify-between border-opacity-20 border-b-gray-300 border-b pb-6'>
        <div className='flex gap-2'>
          <div className='rounded-full w-14 h-14 bg-gray-300' />
          <p className='h-4 rounded-lg bg-gray-600 w-[6rem] flex self-center' />
        </div>
        <div className='w-10 h-10 rounded-full bg-gray-300' />
      </div>
      <div className='grid grid-cols-2 gap-4 text-gray-300 text-sm'>
        <div className='flex flex-col'><div className='flex gap-1 items-center'><div className='w-4 h-4 rounded-full bg-gray-300' /><p className='h-4 rounded-lg bg-gray-600 text-sm w-[5rem]' /></div><p className='h-4 rounded-lg bg-gray-600 w-[2rem]' /></div>
        <div className='flex flex-col'><div className='flex gap-1 items-center'><div className='w-4 h-4 rounded-full bg-gray-300' /><p className='h-4 rounded-lg bg-gray-600 text-sm w-[5rem]' /></div><p className='h-4 rounded-lg bg-gray-600 w-[2rem]' /></div>
        <div className='flex flex-col'><div className='flex gap-1 items-center'><div className='w-4 h-4 rounded-full bg-gray-300' /><p className='h-4 rounded-lg bg-gray-600 text-sm w-[5rem]' /></div><p className='h-4 rounded-lg bg-gray-600 w-[2rem]' /></div>
        <div className='flex flex-col'><div className='flex gap-1 items-center'><div className='w-4 h-4 rounded-full bg-gray-300' /><p className='h-4 rounded-lg bg-gray-600 text-sm w-[5rem]' /></div><p className='h-4 rounded-lg bg-gray-600 w-[2rem]' /></div>
        <div className='flex flex-col'><div className='flex gap-1 items-center'><div className='w-4 h-4 rounded-full bg-gray-300' /><p className='h-4 rounded-lg bg-gray-600 text-sm w-[5rem]' /></div><p className='h-4 rounded-lg bg-gray-600 w-[2rem]' /></div>
        <div className='flex flex-col'><div className='flex gap-1 items-center'><div className='w-4 h-4 rounded-full bg-gray-300' /><p className='h-4 rounded-lg bg-gray-600 text-sm w-[5rem]' /></div><p className='h-4 rounded-lg bg-gray-600 w-[2rem]' /></div>
      </div>
      <div className='flex flex-start gap-6'>
        <div className='gap-2 flex items-center'><div className='w-4 h-4 rounded-full bg-gray-300' /><p className='w-[3rem] h-4 rounded-lg bg-gray-600 text-sm' /></div>
        <div className='gap-2 flex items-center'><div className='w-4 h-4 rounded-full bg-gray-300' /><p className='w-[3rem] h-4 rounded-lg bg-gray-600 text-sm' /></div>
        <div className='gap-2 flex items-center'><div className='w-4 h-4 rounded-full bg-gray-300' /><p className='w-[3rem] h-4 rounded-lg bg-gray-600 text-sm' /></div>
      </div>
    </div>
  )
}

export default Skeleton
