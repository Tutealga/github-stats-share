'use client'

import * as htmlToImage from 'html-to-image';

const saveComponentAsImage = () => {
  htmlToImage.toJpeg(document.getElementById('user-card'), { quality: 0.95 })
    .then(function (dataUrl) {
      const link = document.createElement('a')

      link.download = `dev.jpg`
      link.href = dataUrl
      link.click()
    })
}

const SaveImage = () => {
  return <button className='border hover:text-white py-1 px-2 rounded-full font-bold font-mono text-xs mx-auto' onClick={saveComponentAsImage}>Save as image</button>
}

export default SaveImage