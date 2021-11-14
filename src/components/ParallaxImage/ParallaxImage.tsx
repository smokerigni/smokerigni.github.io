import React, { useRef, useEffect } from 'react'

const ParallaxImage: React.FunctionComponent = () => {
  const imageRef = useRef<HTMLDivElement>(null)


  const handleScroll = (event: Event) => {
    const img = imageRef.current

    if (img !== null) {
      const imgParent = img.parentElement
      const parentHeight = imgParent?.offsetHeight || 0
      const parentTop = imgParent?.getBoundingClientRect().top || 0

      if (parentHeight + parentTop > 0) {
        const parentVisiblePercent: number =
          Number(((parentHeight + parentTop) / parentHeight * 100).toFixed(0))
        const movePercent = (100 - parentVisiblePercent) / 10
        // Image height 120% and safe +10% offset
        img.style.transform = 'translate(-50%, -' + movePercent + '%)'
      }

    }

  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return <div ref={imageRef} className="image-layer position-absolute"/>
}

export default ParallaxImage
