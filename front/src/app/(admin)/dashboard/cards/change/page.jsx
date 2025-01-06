"use client";

import { useState } from "react";
import axios from "axios";
import "$style/bootstrap.min.css";
import "$style/admin/Admin.css";

export default function ChangePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  // Функция для создания карточки
  const createCard = async (title, description, file) => {
    if (!file) {
      alert("Please select an image file.");
      return;
    }

    try {
      // Формируем данные в формате FormData
      const formData = new FormData();
      formData.append("path", file);
      formData.append("title", title);
      formData.append("description", description);

      // Отправляем POST-запрос на сервер
      const response = await fetch("http://localhost:3000/cards", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create card.");
      }

      // Обрабатываем успешный ответ
      const result = await response.json();
      console.log("Card created:", result);
      alert("Card successfully created!");
      return result;
    } catch (error) {
      console.error("Error creating card:", error.message);
      alert(`Error: ${error.message}`);
    }
  };

  // Обработчик события формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCard(title, description, file);
  };

  return (
    <main className="main">
      <div className="main__form container-lg mt-5">
        <h1 className="form-title admin-title mb-4">Додати статистичну картку</h1>
        <form className="form needs-validation" onSubmit={handleSubmit}>
          {/* Поле загрузки файла */}
          <div className="input-group mb-3">
            <input
              required
              type="file"
              className="form-control"
              id="inputGroupFile02"
              onChange={(e) => setFile(e.target.files[0])}
              accept="image/*"
            />
            <label className="input-group-text" htmlFor="inputGroupFile02">
              Зображення
            </label>
          </div>

          {/* Поле заголовка */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Заголовок:
            </span>
            <input
              required
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Поле описания */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Значення:
            </span>
            <input
              required
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </main>
  );
}
