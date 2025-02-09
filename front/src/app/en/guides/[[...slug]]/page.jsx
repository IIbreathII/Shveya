"use client"; // Если используются клиентские функции

import { useEffect, useRef, useState } from 'react';
import '$style/Guides.css'
import Aside from '$component/guides/Aside/Aside';
import MasterClassSect from '$component/guides/MasterClassSect/MasterClassSect';
import VideoSect from '$component/guides/VideoSect/VideoSect';
import ExamplesSect from '$component/guides/ExamplesSect/ExamplesSect';
import DetailsSect from '$component/guides/DetailsSect/DetailsSect';
import AuthorSect from '$component/guides/AuthorSect/AuthorSect';
import ComSect from '$component/guides/ComSect/ComSect';
import Questions from '$component/guides/Questions/Questions';
import { useParams } from 'next/navigation';
import { getData } from 'api';

export default function MasterClassPage() {

  const [categories, setCategories] = useState([]);
  const [guidesData, setGuidesData] = useState({});
  const firstCategory = useRef();

  const params = useParams();
  const { slug } = params

  useEffect(() => {
    getData("categories", setCategories);
  }, []);

  useEffect(() => {
    if (!slug && categories.length > 0) {
      const firstCategory = categories[0];
      if (firstCategory?.subcategories?.length > 0) {
        getData(
          `subcategories/${firstCategory.subcategories[0].id}`,
          setGuidesData
        );
      }
    }
    if (slug) {
      getData(`subcategories/${slug[1]}`, setGuidesData);
    }
  }, [categories, slug]);

  useEffect(e => {
    console.log(getData);
  }, [guidesData])

  return (
    <main className='main'>
      <div className="content">
        <Questions />
        {/* Ліва колонка */}
        <Aside categories={categories} />
        {/* Основний контент */}
        <main className="main-content">
          {guidesData.authors ? (
            <>
              <MasterClassSect masterClassData={guidesData} />
              <VideoSect masterClassData={guidesData} />
              <ExamplesSect masterClassData={guidesData} />
              <DetailsSect masterClassData={guidesData} />
              <AuthorSect masterClassData={guidesData} />
            </>
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </main>
      </div>
    </main>
  );
}
