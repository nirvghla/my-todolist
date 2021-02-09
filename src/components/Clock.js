import React, {useEffect, useState} from 'react'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css'
const MyClock = () => {
  const [value, setValue] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className='myclock'>
      <Clock value={value} />
    </div>
  )
}

export default MyClock
