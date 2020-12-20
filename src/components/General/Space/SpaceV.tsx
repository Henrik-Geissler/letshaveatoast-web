import React from 'react'

interface SpaceVProps {
  x: number
  y: number
}

const SpaceV: React.FC<SpaceVProps> = ({ x, y }) => {
  return (
    <div
      style={{
        width: `${x}px`,
        height: `${y}px`,
        marginTop: '0px',
        marginBottom: '0px',
      }}
    ></div>
  )
}

export default SpaceV
