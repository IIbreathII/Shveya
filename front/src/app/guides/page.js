"use client"; // Если используются клиентские функции

import { useState } from 'react';
import '$style/Guides.css'
import '$style/Guides-menu.css'
import '$style/Guides-infobox.css'

export default function MasterClassPage() {
  const [author, setAuthor] = useState("");

  // Заглушки для данных мастер-класса
  const masterClassData = {
    title: "СЮДИ НАЗВУ ВИРОБУ",
    file: {
      url: "/path/to/lekalo1.pdf"
    },
    video_url: "https://www.youtube.com/watch?v=example",
    example: {
      url: "/images/example1.jpg"
    },
    details: "СЮДИ МАТЕРІАЛИ",
    summary: "СЮДИ КОРОТКИЙ ОПИС І ОСНОВНІ МАТЕРІАЛИ",
  };

  const handleAuthorInput = (event) => {
    let value = event.target.value;
    if (value && value[0] !== '@') {
      setAuthor('@' + value);
    } else {
      setAuthor(value);
    }
  };

  return (
    <div>
      {/* Инфоблок */}
      <div className="infobox">
        <div className="infobox__container">
          <div className="line2"></div>
          <div className="center">
            <h1>Майстер клас пошивки</h1>
          </div>
          <div className="line1"></div>
        </div>
      </div>

      {/* Контент */}
      <div className="content">
        {/* Левая колонка */}
        <aside className="PRM">
          <h2>Кіберодяг</h2>
          <ul>
            <li>Кіберштани</li>
          </ul>
          <h2>Бронеодяг</h2>
          <ul>
            <li>Бронефутболки</li>
          </ul>
        </aside>

        {/* Основной контент */}
        <main className="main-content">
          <section className="master-class">
            <h1 style={{ marginBottom: '20px', fontSize: '26px', textAlign: 'center' }}>
              {masterClassData.title}
            </h1>
            <h2>Лекала:</h2>
            <ul>
              <li>
                Розмір 1 - <a href={masterClassData.file.url}>завантажити</a>
              </li>
            </ul>
          </section>

          <section className="video">
            <h2>Майстер-клас</h2>
            <iframe
              width="330"
              height="315"
              src={masterClassData.video_url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </section>

          <section className="examples">
            <h2>Приклади готового одягу:</h2>
            <div className="gallery">
              <img src={masterClassData.example.url} alt="Готовий одяг 1" />
            </div>
          </section>

          <section className="details1">
            <p>{masterClassData.details}</p>
            <p>{masterClassData.summary}</p>
          </section>

          <section className="author">
            <h2>Автор лекал:</h2>
            <textarea
              id="authorTextarea"
              value={author}
              onChange={handleAuthorInput}
              placeholder="@"
            />
          </section>

          <section className="comments">
            <h2>Коментарі і питання:</h2>
            <textarea placeholder="Залиште ваш коментар..."></textarea>
            <button>Надіслати</button>
          </section>
        </main>
      </div>
    </div>
  );
}
