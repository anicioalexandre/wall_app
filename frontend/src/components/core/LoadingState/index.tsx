import React, { FC } from 'react'

const LoadingState: FC = () => (
  <div className="flex justify-center">
    <div className="animate-spin border-white border-b-0 border-l-0 border-r-0 rounded-full border-t-2 h-5 w-5" />
  </div>
)

export default LoadingState
