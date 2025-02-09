"use client";

import '$style/infoPage/Popup.css'
import CardBlock from '$component/info/CardBlock/CardBlock';
import ConBlock from '$component/info/ConBlock/ConBlock';
import OrderBlock from '$component/info/OrderBlock/OrderBlock';
import PartnersBlock from '$component/info/PartnersBlock/PartnersBlock';
import dynamic from "next/dynamic";
const MapBlock = dynamic(() => import('$component/info/MapBlock/MapBlock'), { ssr: false });
import MediaBlock from "$component/info/MediaBlock/MediaBlock";
import InfoBlockEn from "$component/en/InfoBlock/InfoBlockEn";

export default function InfoPage() {

  const anitmationLeft = {
    hidden: {
      x: -40,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }
  const anitmationRight = {
    hidden: {
      x: 40,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }

  return (
    <main className='main'>
      <InfoBlockEn />
      <OrderBlock />
      <CardBlock />
      <ConBlock />
      <PartnersBlock />
      <MediaBlock/>
      <MapBlock />
    </main>
  );
}