"use client"; // Если используются клиентские функции

import { useState } from 'react';
import '$style/Guides.css'
import Aside from '$component/guides/Aside/Aside';
import MasterClassSect from '$component/guides/MasterClassSect/MasterClassSect';
import VideoSect from '$component/guides/VideoSect/VideoSect';
import ExamplesSect from '$component/guides/ExamplesSect/ExamplesSect';
import DetailsSect from '$component/guides/DetailsSect/DetailsSect';
import AuthorSect from '$component/guides/AuthorSect/AuthorSect';
import ComSect from '$component/guides/ComSect/ComSect';

export default function MasterClassPage() {
  const [author, setAuthor] = useState("");

  // Заглушки для даних майстер-классів 
  const masterClassData = {
    title: "Кіберштани",
    file: {
      url: "/path/to/lekalo1.pdf"
    },
    video_url: "https://www.youtube.com/embed/NY7yk_wn9v4?si=SOO6eYcPvSQGb87K",
    example: {
      url: "/images/example1.jpg"
    },
    details: "Матеріали: Для пошиття адаптивних штанів можна закупити матеріали самостійно або отримати готовий комплект від швейної роти. Комплект включає чотири викроєні деталі штанів, кишеню, чорний шнурок для бокових зав'язок, резинку в пояс, липучки, колючу та м'яку клеєву стрічку для дублювання деяких ділянок, а також кольорові шнурки для поясу",
    summary: "Після підготовки деталей, потрібно підгинаючи низ на величину припуску 2 см, пришити його на машинці. Важливо вибрати штани із закритими липучками та випрасувати їх перед пакуванням",
    authors: "Автор 1, Автор 2"
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
    <main className='main'>
      <div className="content">
        {/* Ліва колонка */}
        <Aside/>
        {/* Основний контент */}
        <main className="main-content">
          <MasterClassSect masterClassData={masterClassData}/> 

          <VideoSect masterClassData={masterClassData}/>

          <ExamplesSect masterClassData={masterClassData}/>

          <DetailsSect masterClassData={masterClassData}/>

          <AuthorSect masterClassData={masterClassData}/>

          <ComSect/>
        </main>
      </div>
    </main>
  );
}
