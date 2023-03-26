import Image from 'next/image'
import {useCallback, useState} from 'react'

type ImageData = {
  url: string
  blurDataUrl: string
  height: number
  width: number
}

export function ImageSwitcher() {
  const images: [ImageData, ImageData] = [
    {
      // url: 'https://blurha.sh/12c2aca29ea896a628be.jpg',
      url: '/images/image-1.jpeg',
      blurDataUrl: '/images/image-1-blur.png',
      height: 173,
      width: 269,
    },
    {
      // url: 'https://blurha.sh/ea9e499f8080ce9956a8.jpg',
      url: '/images/image-2.jpeg',
      blurDataUrl: '/images/image-2-blur.png',
      height: 120,
      width: 187,
    },
  ]

  const [activeImage, setActiveImage] = useState(images[0])

  return (
    <div className="text-white h-96 w-96 flex justify-center flex-col items-center gap-4">
      no key
      <Image
        width={activeImage.width}
        height={activeImage.height}
        src={activeImage.url}
        placeholder="blur"
        blurDataURL={activeImage.blurDataUrl}
        alt=""
      />
      <span className="mt-7">
        key=
        <code>
          {activeImage.url}-{activeImage.blurDataUrl}
        </code>
      </span>
      <Image
        key={`${activeImage.url}-${activeImage.blurDataUrl}`}
        width={activeImage.width}
        height={activeImage.height}
        src={activeImage.url}
        placeholder="blur"
        blurDataURL={activeImage.blurDataUrl}
        alt=""
      />
      <button
        className="text-white rounded-md px-4 p-2 bg-gradient-to-b from-neutral-600 to-neutral-700 hover:brightness-110 active:brightness-125 w-max cursor-pointer"
        onClick={() =>
          setActiveImage(
            (i) => images.filter((image) => image.url !== i.url)[0],
          )
        }
      >
        Change image
      </button>
    </div>
  )
}
