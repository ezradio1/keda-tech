import { useEffect, useState } from 'react'

const useIndex = () => {
  const [login, setLogin] = useState(false)
  const [showShadow, setShowShadow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const myDiv = document.getElementById('home')
    if (myDiv) {
      if (window.pageYOffset > myDiv.offsetTop) {
        setShowShadow(true)
      } else {
        setShowShadow(false)
      }
    }
  }

  return { login, setLogin, showShadow }
}

export default useIndex
