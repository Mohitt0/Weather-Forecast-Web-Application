import React from 'react'
import DotLoader from "react-spinners/DotLoader";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-[100%] min-h-[500px]">
        <div className="flex justify-center flex-col items-center gap-4">
          <DotLoader color="#36d7b7" />
        </div>
      </div>
  )
}

export default Loading