'use client';
import bootstrap from "bootstrap"
import '$style/bootstrap.min.css'
import "$style/admin/Admin.css"
import Image from 'next/image';
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  const navigateTo = () => {
    router.push('/dashboard/cards/change');
  };

  return (
    <>
      <main className="main">
        <div className="main__columns container-lg mt-5">
          <div className="main__column lead-column">
            <h1 className="admin__title admin-title">Керування елементами</h1>
            <div className="mt-3">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="/dashboard/cards">Статистичні картки</a>
                  <div className="list-group-item__block d-flex align-items-center gap-3">
                    <span className="badge text-bg-primary rounded-pill">4</span>
                    <button onClick={navigateTo} type="button" className="btn btn-outline-success"><span className="_plus">+</span> Додати</button>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="">Медіа посилання</a>
                  <div className="list-group-item__block d-flex align-items-center gap-3">
                    <span className="badge text-bg-primary rounded-pill">2</span>
                    <button onClick={navigateTo} type="button" className="btn btn-outline-success"><span className="_plus">+</span> Додати</button>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="">Партнери</a>
                  <div className="list-group-item__block d-flex align-items-center gap-3">
                    <span className="badge text-bg-primary rounded-pill">4</span>
                    <button onClick={navigateTo} type="button" className="btn btn-outline-success"><span className="_plus">+</span> Додати</button>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="">Посилання на мапу</a>
                  <div className="list-group-item__block d-flex align-items-center gap-3">
                    <span className="badge text-bg-primary rounded-pill">5</span>
                    <button onClick={navigateTo} type="button" className="btn btn-outline-success"><span className="_plus">+</span> Додати</button>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="">Категорії кібер-одягу</a>
                  <div className="list-group-item__block d-flex align-items-center gap-3">
                    <span className="badge text-bg-primary rounded-pill">2</span>
                    <button onClick={navigateTo} type="button" className="btn btn-outline-success"><span className="_plus">+</span> Додати</button>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="">Навчальні матеріали</a>
                  <div className="list-group-item__block d-flex align-items-center gap-3">
                    <span className="badge text-bg-primary rounded-pill">18</span>
                    <button onClick={navigateTo} type="button" className="btn btn-outline-success"><span className="_plus">+</span> Додати</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="main__column">
            <h1 className="admin__title">Останні дії</h1>
            <div className="main__actions actions mt-3 mb-3">
              <div className="actions__body">
                <div className="actions__action">
                  <Image
                    src="/images/admin/deleted.svg"
                    alt="icon"
                    width={26}
                    height={26}
                  />
                  <div className="actions__name">Елемент(6) видалено | Навчальні матеріали</div>
                </div>
                <div className="actions__action">
                  <Image
                    src="/images/admin/add.svg"
                    alt="icon"
                    width={26}
                    height={26}
                  />
                  <div className="actions__name">Елемент(6) додано | Навчальні матеріали</div>
                </div>
                <div className="actions__action">
                  <Image
                    src="/images/admin/add.svg"
                    alt="icon"
                    width={26}
                    height={26}
                  />
                  <div className="actions__name">Елемент(5) додано | Навчальні матеріали</div>
                </div>
                <div className="actions__action">
                  <Image
                    src="/images/admin/add.svg"
                    alt="icon"
                    width={26}
                    height={26}
                  />
                  <div className="actions__name">Елемент(4) додано | Навчальні матеріали</div>
                </div>
                <div className="actions__action">
                  <Image
                    src="/images/admin/change.svg"
                    alt="icon"
                    width={26}
                    height={26}
                  />
                  <div className="actions__name">Елемент(3) змінено | Навчальні матеріали</div>
                </div>
                <div className="actions__action">
                  <Image
                    src="/images/admin/add.svg"
                    alt="icon"
                    width={26}
                    height={26}
                  />
                  <div className="actions__name">Елемент(3) додано | Навчальні матеріали</div>
                </div>
                <div className="actions__action">
                  <Image
                    src="/images/admin/deleted.svg"
                    alt="icon"
                    width={26}
                    height={26}
                  />
                  <div className="actions__name">Елемент(6) видалено | Навчальні матеріали</div>
                </div>
                <div className="actions__action">
                  <Image
                    src="/images/admin/deleted.svg"
                    alt="icon"
                    width={26}
                    height={26}
                  />
                  <div className="actions__name">Елемент(6) видалено | Навчальні матеріали</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}