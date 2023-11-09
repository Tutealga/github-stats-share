'use client'

import * as htmlToImage from 'html-to-image';

const saveComponentAsImage = () => {
  htmlToImage.toJpeg(document.getElementById('user-card'), { quality: 0.95 })
    .then(function (dataUrl) {
      const link = document.createElement('a')

      link.download = `${crypto.randomUUID()}.jpg`
      link.href = dataUrl
      link.click()
    })
}

const SaveImage = () => {
  return <button className='border border-opacity-40 border-white p-2 rounded-full font-bold font-mono text-xs mx-auto flex items-center justify-center' onClick={saveComponentAsImage}> <svg className="fill-current w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>Download</button>
}

export default SaveImage