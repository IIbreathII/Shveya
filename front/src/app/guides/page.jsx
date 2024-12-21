"use client"; // Если используются клиентские функции

import { useState } from 'react';
import '$style/Guides.css'
import '$style/Guides-menu.css'
import '$style/Guides-infobox.css'
import Aside from '$component/guides/Aside/aside';

export default function MasterClassPage() {
  const [author, setAuthor] = useState("");

  // Заглушки для данных мастер-класса
  const masterClassData = {
    title: "СЮДИ НАЗВУ ВИРОБУ",
    file: {
      url: "/path/to/lekalo1.pdf"
    },
    video_url: "https://www.youtube.com/embed/NY7yk_wn9v4?si=SOO6eYcPvSQGb87K",
    example: {
      url: "/images/example1.jpg"
    },
    details: "Матеріали: Для пошиття адаптивних штанів можна закупити матеріали самостійно або отримати готовий комплект від швейної роти. Комплект включає чотири викроєні деталі штанів, кишеню, чорний шнурок для бокових зав'язок, резинку в пояс, липучки, колючу та м'яку клеєву стрічку для дублювання деяких ділянок, а також кольорові шнурки для поясу",
    summary: "Після підготовки деталей, потрібно підгинаючи низ на величину припуску 2 см, пришити його на машинці. Важливо вибрати штани із закритими липучками та випрасувати їх перед пакуванням",
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
        <Aside/>

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
              className='guides-textarea'
              id="authorTextarea"
              value={author}
              onChange={handleAuthorInput}
              placeholder="@"
            />
          </section>

          <section className="comments">
            <h2>Коментарі і питання:</h2>
            <textarea className='guides-textarea' placeholder="Залиште ваш коментар..."></textarea>
            <button>Надіслати</button>
          </section>
        </main>
      </div>
    </div>
  );
}
