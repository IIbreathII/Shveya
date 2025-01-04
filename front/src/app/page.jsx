"use client";

import Image from 'next/image';
import { motion } from "framer-motion"
import '$style/infoPage/Popup.css'
import InfoBlock from '$component/info/InfoBlock/InfoBlock';
import CardBlock from '$component/info/CardBlock/CardBlock';
import ConBlock from '$component/info/ConBlock/ConBlock';
import MediaLinksBlock from '$component/info/MediaLinksBlock/MediaLinksBlock';
import OrderBlock from '$component/info/OrderBlock/OrderBlock';
import PartnersBlock from '$component/info/PartnersBlock/PartnersBlock';
import MapBlock from '$component/info/MapBlock/MapBlock';

export default function InfoPage() {

  const blockAnitmation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }

  return (
    <main className='main'>
      <InfoBlock />
      <OrderBlock />
      <CardBlock />
      <ConBlock />
      <MediaLinksBlock />
      <motion.div
        className="infobox"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      >
        <div className="infobox__container1">
          <motion.h1 custom={1} variants={blockAnitmation} className='_main-title'>Масштаб діяльності:</motion.h1>
          <motion.h2 custom={2} variants={blockAnitmation}>
            Ми діємо як в Україні, так і за кордоном, постачаючи адаптивний одяг у
            реабілітаційні центри Швеції, Данії, Польщі, Німеччини тощо.<br />
            Залучаємо українців за кордоном до волонтерської діяльності, що
            допомагає підтримувати зв’язок із батьківщиною.<br />
            Першими створили унікальні моделі: адаптивні худі, жіночу адаптивну
            білизну та інший одяг, який враховує потреби поранених.
          </motion.h2>
        </div>
      </motion.div>
      <PartnersBlock />
      <MapBlock />
    </main>
  );
}