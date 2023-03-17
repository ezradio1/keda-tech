import { message } from 'antd'
import { useState } from 'react'
import { ModalLoginProps } from './index.types'

const useIndex = ({ onCloseModal }: ModalLoginProps) => {
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      onCloseModal()
      message.success('Successfully Logged In')
    }, 1500)
  }
  return { loading, handleLogin }
}

export default useIndex
