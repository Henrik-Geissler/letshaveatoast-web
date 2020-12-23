import React from 'react'

interface ToastViewProps {
  linkedToast: any
}

const ToastView: React.FC<ToastViewProps> = ({ linkedToast }) => {
  if (linkedToast === null) return <></>
  const toast = linkedToast.data.getToastById
  if (toast === undefined) return <></>
  return <></>
}

export default ToastView
