import { FC, ReactNode } from "react"

const Wrapper :FC<{childern: React.ReactNode}> = ({childern}) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
        {childern}
        </div>
  )
}

export default Wrapper