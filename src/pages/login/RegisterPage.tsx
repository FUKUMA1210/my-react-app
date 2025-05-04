import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css"; 

export default function RegisterPage() {
  const navigate = useNavigate();
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('密碼不一致，請重新輸入');
      return;
    }

    alert('註冊成功！請登入');
    navigate('/'); // 註冊成功跳回登入頁
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>註冊新帳號</h2>
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
          <input
            type="password"
            placeholder="確認密碼"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">註冊</button>
        </form>
      </div>
    </div>
  )
}