import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>這裡是君的空間</h1>
      <div className="section">
        <h2>關於我</h2>
        <p>宅宅，喜歡玩遊戲、聽音樂及看V。是同時擁有社交牛逼症和社恐的I人。</p>
      </div>
      <div className="section">
        <h2>喜歡的遊戲</h2>
        <ul>
          <li>FINAL FANTASY系列</li>
          <li>博德之門3</li>
          <li>Red Dead Redemption 2</li>
          <li>Cyberpunk 2077</li>
        </ul>
      </div>
      <div className="section">
        <h2>喜歡的音樂類型</h2>
        <ul>
          <li>K-POP</li>
          <li>遊戲配樂</li>
          <li>動畫原聲帶</li>
          <li>電子音樂</li>
        </ul>
      </div>
      <div className="section">
        <h2>喜歡的Vtuber</h2>
        <h3>NIJISANJI EN</h3>
        <ul>
          <li><img src="img/Vox_Akuma2022.jpeg" width="40" alt="Vox Akuma"/>Vox Akuma - <a href="https://www.youtube.com/channel/UCckdfYDGrjojJM28n5SHYrA" target="_blank">@voxakuma</a></li>
          <li><img src="img/Fulgur_Ovid_Top.jpg" width="40" alt="Fulgur Ovid"/>Fulgur Ovid - <a href="https://www.youtube.com/@FulgurOvid" target="_blank">@fulgurovid</a></li>
        </ul>
        <h3>Hololive EN</h3>
        <ul>
          <li><img src="img/NEAktg4s_400x400.jpg" width="40" alt="FUWAMOCO"/>FUWAMOCO - <a href="https://www.youtube.com/@FUWAMOCOch" target="_blank">@fuwamoco</a></li>
        </ul>
        <h3>Holostars</h3>
        <ul>
          <li><img src="img/OGA.jpg" width="40" alt="荒咬オウガ"/>荒咬オウガ - <a href="https://www.youtube.com/@AragamiOga" target="_blank">@AragamiOga</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
