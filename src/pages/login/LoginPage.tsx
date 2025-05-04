import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../App.css";

export default function LoginPage() {
  const navigate = useNavigate()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/dashboard')  // 登入成功去主頁
  }

  const handleRegister = () => {
    navigate('/register')  //  按註冊跳去註冊頁面
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>用戶登入</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="帳號"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="密碼"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">登入</button>

          <div className="register-hint">或</div>

          <button type="button" className="register-button" onClick={handleRegister}>
            註冊
          </button>
        </form>
      </div>
    </div>
  )
}