import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import "./Card.css";

const Card = ({ title, number, img }) => {
  const [count, setCount] = useState(0);
  const [fontSize, setFontSize] = useState('20px'); // Состояние для размера шрифта
  const ref = useRef(null);
  const hasAnimated = useRef(false); // Флаг, чтобы не перезапускать анимацию

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && !hasAnimated.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          hasAnimated.current = true;
          animateNumber();
        }
      }
    };

    const animateNumber = () => {
      let start = 0;
      const end = parseInt(number.replace(/\D/g, ""), 10) || 0; // Оставляем только цифры
      const duration = 1500; // Длительность анимации (мс)
      const startTime = performance.now();

      const updateNumber = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Ограничиваем от 0 до 1
        const currentValue = Math.floor(progress * end);

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        }
      };

      requestAnimationFrame(updateNumber);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [number]);

  // Динамическое изменение шрифта в зависимости от длины текста
  useEffect(() => {
    const titleLength = title.length;
    if (titleLength > 50) {
      setFontSize('16px'); // Уменьшаем шрифт, если текста много
    } else {
      setFontSize('20px'); // Оставляем стандартный размер шрифта
    }
  }, [title]);

  const blockAnimation = {
    hidden: { y: 70, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.2 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      ref={ref}
      className="card"
      variants={blockAnimation}
    >
      <div className="card__content">
        <div className="card_top">
          <Image
            src={'http://drive.google.com/uc?export=view&id=' + img}
            height={55}
            width={55}
            alt="icon"
          />
          <p className="card__number">{count.toLocaleString()}</p>
        </div>

        <h1 className="card__title" style={{ fontSize: fontSize }}>{title}</h1> {/* Применяем динамический размер шрифта */}
      </div>
    </motion.div>
  );
};

export default Card;
