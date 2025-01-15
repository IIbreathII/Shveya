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
import getData from 'api';
import { useParams } from 'next/navigation';

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
          `categories/${firstCategory.id}/subcategory/${firstCategory.subcategories[0].id}`,
          setGuidesData
        );
      }
    }
    if (slug) {
      getData(`categories/${slug[0]}/subcategory/${slug[1]}`, setGuidesData);
    }
  }, [categories, slug]);

  return (
    <main className='main'>
      <div className="content">
        <Questions />
        {/* Ліва колонка */}
        <Aside categories={categories} />
        {/* Основний контент */}
        <main className="main-content">
          {guidesData.detail ? (
            <>
              <MasterClassSect masterClassData={guidesData.detail} />
              <VideoSect masterClassData={guidesData.detail} />
              <ExamplesSect masterClassData={guidesData.detail} />
              <DetailsSect masterClassData={guidesData.detail} />
              <AuthorSect masterClassData={guidesData.detail} />
              <ComSect />
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
