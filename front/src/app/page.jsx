"use client";

import Image from 'next/image';
import '$style/infoPage/Infobox.css'
import '$style/infoPage/Cardbox.css'
import '$style/infoPage/Conbox.css'
import '$style/infoPage/Popup.css'
import '$style/infoPage/Media.css'
import '$style/infoPage/Partners.css'
import '$style/infoPage/Map.css'
import { useRef } from 'react';

export default function InfoPage() {

  const iframe = useRef();

  function changeMapURL(newURL) {
    iframe.current.src = newURL;
  }

  return (
    <main className='main'>
      <div className="infobox">
        <div className="infobox__container">
          <div className="left">
            <div className="icon_shveya">
              <Image
                src="/images/iconshveya.png"
                alt="logo"
                width={356}
                height={61}
                layout="intrinsic"
                className="logo-img"
                priority
              />
            </div>
          </div>
          <div className="right">
            <h1>Швейна рота</h1>
            <h2>Це волонтерський проєкт, який займається пошиттям
              адаптивного одягу для поранених
              захисників, захисниць України, а також цивільних,
              які постраждали внаслідок російської агресії. Наші
              зусилля спрямовані на забезпечення поранених якісним,
              комфортним і функціональним одягом, який допомагає
              зберегти гідність і полегшити реабілітацію на всіх
              етапах від евакуації до одужання.</h2>
          </div>
        </div>
      </div>
      <div className="order">
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScwlcFX3jqmOrJ3oXMrcNJJS3-LgfYy5fjMlXSlSmpU6HaLaw/viewform" className="order__link">Замовити адаптивний одяг</a>
      </div>
      <div className="cardbox">
        <div className="cardbox__container">
          <div className="card">
            <div className="card__top1">
              <div className="iconshveya">
                <Image
                  src="/images/short1.png"
                  alt="logo"
                  width={356}
                  height={61}
                  layout="intrinsic"
                  className="logo-img"
                  priority
                />
              </div>
              <h1>Створено одягу</h1>
            </div>
            <div className="card__bottom">
              <p>10000+</p>
            </div>
          </div>
          <div className="card">
            <div className="card__top1">
              <div className="iconshveya">
                <Image
                  src="/images/short1.png"
                  alt="logo"
                  width={356}
                  height={61}
                  layout="intrinsic"
                  className="logo-img"
                  priority
                />
              </div>
              <h1>Створено одягу</h1>
            </div>
            <div className="card__bottom">
              <p>10000+</p>
            </div>
          </div>
          <div className="card">
            <div className="card__top1">
              <div className="iconshveya">
                <Image
                  src="/images/short1.png"
                  alt="logo"
                  width={356}
                  height={61}
                  layout="intrinsic"
                  className="logo-img"
                  priority
                />
              </div>
              <h1>Створено одягу</h1>
            </div>
            <div className="card__bottom">
              <p>10000+</p>
            </div>
          </div>
          <div className="card">
            <div className="card__top1">
              <div className="iconshveya">
                <Image
                  src="/images/short1.png"
                  alt="logo"
                  width={356}
                  height={61}
                  layout="intrinsic"
                  className="logo-img"
                  priority
                />
              </div>
              <h1>Створено одягу</h1>
            </div>
            <div className="card__bottom">
              <p>10000+</p>
            </div>
          </div>
        </div>
      </div>
      <div className="conboxcontainer">
        <div className="conbox">
          <a href="" className="left">
            <h1>Доєднатися до пошиття</h1>
          </a>
          <div className="column"></div>
          <div className="column"></div>
          <button id="openBtn" className="right">Підтримуй нас<br /> Донатом</button>
          <div id="popup" className="popup">
            <div className="popup-content">
              <span id="closeBtn" className="paypal">&times;</span>
              <div className="paypal _paypal">
                <div className="paypalimg">
                  <img src="{% static 'Main_page/images/paypal.jpg' %}" alt="PayPal logo" />
                </div>
                marishka.polo@gmail.com
              </div>
              <a href="https://send.monobank.ua/jar/5VV7zhDJGY"
                className="paypal _paypal">
                <div className="paypalimg">
                  <img src="{% static 'Main_page/images/mono.jpg' %}" alt="PayPal logo" />
                </div>
                5375 4112 0381 7304
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="media-links">
        <div className="media-links__container">
          <h2 className="media-links__title">Наші соцмережі</h2>
          <div className="media-links__block">
            <a href="" className="media-links__link">
              <div className="media-links__image">
                <Image
                  src="/images/223.webp"
                  alt="logo"
                  width={50}
                  height={50}
                  layout="intrinsic"
                  className="logo-img"
                  priority
                /></div>
              Instagram
            </a>
            <a href="" className="media-links__link">
              <div className="media-links__image">
                <Image
                  src="/images/223.webp"
                  alt="logo"
                  width={50}
                  height={50}
                  layout="intrinsic"
                  className="logo-img"
                  priority
                /></div>
              Instagram
            </a>
            <a href="" className="media-links__link">
              <div className="media-links__image">
                <Image
                  src="/images/223.webp"
                  alt="logo"
                  width={50}
                  height={50}
                  layout="intrinsic"
                  className="logo-img"
                  priority
                /></div>
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="infobox">
        <div className="infobox__container1">
          <h1>Масштаб діяльності:</h1>
          <h2>
            Ми діємо як в Україні, так і за кордоном, постачаючи адаптивний одяг у
            реабілітаційні центри Швеції, Данії, Польщі, Німеччини тощо.<br />
            Залучаємо українців за кордоном до волонтерської діяльності, що
            допомагає підтримувати зв’язок із батьківщиною.<br />
            Першими створили унікальні моделі: адаптивні худі, жіночу адаптивну
            білизну та інший одяг, який враховує потреби поранених.
          </h2>
        </div>
      </div>
      <div className="partners">
        <div className="partners__container">
          <h1 className="partners__title">Наші партнери</h1>
          <div className="partners__box">
            <div className="partners__partner"><img src="{{ partner.img.url }}" alt="" /></div>
          </div>
        </div>
      </div>
      <div className="mapcontainer">
        <div className="mapbox">
          <div className="left">
            <iframe id="mapIframe"
              ref={iframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509425!2d-122.41941548467836!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a043bf3f%3A0x6e59c40cde44e5e0!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sus!4v1601840347235!5m2!1sen!2sus"
              loading="lazy">
            </iframe>
          </div>

          <div className="right">
            <button className="button"
              onClick={e => changeMapURL('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82352.68481656504!2d23.929834766914727!3d49.83265984405233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57:0x4223c517012378e2!2z0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1733485105656!5m2!1sru!2sua')}>Львівське відділення</button>
          </div>
        </div>
      </div>
    </main>
  );
}
