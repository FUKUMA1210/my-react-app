import React from 'react';
import './FeatureList.css';

interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
  style: number;
}

const features: Feature[] = [
  {
    id: 1,
    title: '投資組合',
    description: '查看所有投資組合',
    image: '/src/assets/img/pic3.jpg',
    style: 1,
  },
  {
    id: 2,
    title: '我的最愛',
    description: '查看目前追蹤的投資項目',
    image: '/src/assets/img/pic4.jpg',
    style: 2,
  },
  {
    id: 3,
    title: '新聞',
    description: '查看最新的財金新聞',
    image: '/src/assets/img/pic2.jpg',
    style: 3,
  },
  {
    id: 4,
    title: 'AI分析',
    description: '分析你想知道的投資資訊',
    image: '/src/assets/img/pic1.jpg',
    style: 4,
  },
];

const FeatureList: React.FC = () => (
  <section className="tiles">
    {features.map(f => (
      <article key={f.id} className={`style${f.style}`}>
        <span className="image">
          <img src={f.image} alt={f.title} />
        </span>
        <a href={`#feature-${f.id}`}>
          <h2>{f.title}</h2>
          <div className="content">
            <p>{f.description}</p>
          </div>
        </a>
      </article>
    ))}
  </section>
);

export default FeatureList;
