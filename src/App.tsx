import React, { useState } from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import './App.css'

export default function App() {
  // state：是否已登入
  const [loggedIn, setLoggedIn] = useState(false)
  // state：帳號、密碼（只是示範用，不做真驗證）
  const [account, setAccount]   = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 不管填什麼都直接「登入成功」
    setLoggedIn(true)
  }

  if (loggedIn) {
    return <Dashboard />
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>使用者登入</h2>

        <label>
          帳號
          <input
            type="text"
            value={account}
            onChange={e => setAccount(e.target.value)}
            placeholder="請輸入帳號"
            required
          />
        </label>

        <label>
          密碼
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="請輸入密碼"
            required
          />
        </label>

        <button type="submit" className="login-button">
          登入
        </button>
      </form>
    </div>
  )
}
