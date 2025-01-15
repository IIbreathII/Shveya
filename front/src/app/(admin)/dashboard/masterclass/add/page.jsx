"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import "$style/bootstrap.min.css";
import "$style/admin/Admin.css";
import bootstrap from "bootstrap";
import Alert from "$component/dashboard/Alert/Alert";
import getData, { postData } from "api";
import PhotoInput from "$component/dashboard/ImageInput/ImageInput";
import AuthorInput from "$component/dashboard/AuthorsInput/AuthorsInpu";

export default function ChangePage() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    videoUrl: '',
    details: '',
    summary: '',
    authors: [],
    category: ''
  });
  const [lekala, setLekala] = useState([]);
  const [examples, setExamples] = useState([]);

  useEffect(() => {
    getData("categories", setCategories);
  }, []);

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("subcategory_name", formData.title);
    data.append("title", formData.title);
    data.append("videoUrl", formData.videoUrl);
    data.append("details", formData.details);
    data.append("summary", formData.summary);
    data.append("authors", JSON.stringify(formData.authors));
    data.append("category", formData.category);

    lekala.forEach((elem) => {
      data.append("lekala", elem.file);
    });

    examples.forEach((elem) => {
      data.append("example", elem.file);
    });

    postData("categories/" + formData.category + "/subcategories", data, setShowAlert)
  };

  return (
    <main className="main">
      {showAlert && (
        <Alert
          message="Картка була додана успішно!"
          onClose={() => setShowAlert(false)}
        />
      )}
      <div className="main__form container-lg mt-5 mb-5">
        <h1 className="form-title admin-title mb-4">Додати майстре-клас</h1>
        <form className="form needs-validation" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Заголовок</label>
            <input onChange={(e) => setFormData({ ...formData, title: e.target.value })} value={formData.title} type="text" className="form-control" id="title" name="title" placeholder="Введіть заголовок" />
          </div>

          <div className="mb-3">
            <label className="form-label">Лекала</label>
            <PhotoInput photos={lekala} setPhotos={setLekala} />
          </div>

          <div className="mb-3">
            <label htmlFor="videoUrl" className="form-label">Посилання на відео(embed)</label>
            <input onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })} value={formData.videoUrl} type="url" className="form-control" id="videoUrl" name="videoUrl" placeholder="Введіть посилання на відео" />
          </div>

          <div className="mb-3">
            <label className="form-label">Приклади готового виробу</label>
            <PhotoInput photos={examples} setPhotos={setExamples} />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Деталі</span>
            <textarea onChange={(e) => setFormData({ ...formData, details: e.target.value })} value={formData.details} style={{ resize: "none" }} className="form-control" aria-label="деталі"></textarea>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Підсумок</span>
            <textarea onChange={(e) => setFormData({ ...formData, summary: e.target.value })} value={formData.summary} style={{ resize: "none" }} className="form-control" aria-label="підсумок"></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">Імена авторів через кому (,)</label>
            <input onChange={e => setFormData({ ...formData, authors: e.target.value.split(",") })} type="text" className="form-control" id="title" name="title" placeholder="Введіть авторів" />
          </div>

          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Категорія</label>
            <select defaultValue="DEFAULT" onChange={e => setFormData({ ...formData, category: e.target.value })} className="form-select" id="inputGroupSelect01">
              <option value="DEFAULT" disabled>Оберіть категорію...</option>
              {categories.map(cat =>
                <option key={cat.id} value={cat.id}>{cat.categoryname}</option>
              )}
            </select>
          </div>
          <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </main>
  );
}
