import { useEffect } from 'react'

type Props = {
  time: number
  started: boolean
  onTick: () => void
}

export const Timer = ({ time, started, onTick }: Props) => {
  useEffect(() => {
    let intId: any = null
    if (started) {
      intId = setInterval(() => {
        onTick()
      }, 1000)
    } else if (!started) {
      clearInterval(intId)
    }
    return () => clearInterval(intId)
  }, [started, onTick])

  return (
    <div className="pb-6">
      <div className="flex justify-center mb-1"> Your Time: {time}s</div>
    </div>
  )
}
