'use client'

import { useEffect } from "react";
import '@/app/styles/error.module.css';

export default function Error({
  error,
  reset,
}:{
  error : Error;
  reset: () => void;
}) {

  useEffect(()=>{
    console.error(error);
  },[error])

  return(
    <div className="error-container">
      <h1 className="error-title">오류가 발생했습니다</h1>
      <p className="error-message">죄송합니다. 문제가 발생했습니다.</p>
      <button onClick={reset} className="error-button">
        다시 시도
      </button>
    </div>

  )
}