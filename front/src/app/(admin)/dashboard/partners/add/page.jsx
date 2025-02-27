"use client";

import { useState } from "react";
import axios from "axios";
import "$style/bootstrap.min.css";
import "$style/admin/Admin.css";
import dynamic from 'next/dynamic';
const Bootstrap = dynamic(() => import('$component/guides/Bootstrap/Bootstrap'), { ssr: false });
import Alert from "$component/dashboard/Alert/Alert";
import { postData } from "api";
import FileInput from "$component/dashboard/FileInput/FileInput";
import PhotoInput from "$component/dashboard/ImageInput/ImageInput";

export default function ChangePage() {
  const [file, setFile] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Пожалуйста, выберите файл");
      return;
    }

    const formData = new FormData();
    formData.append("path", file);

    postData("partners", formData, setShowAlert)
  };

  return (
    <main className="main">
      {showAlert && (
        <Alert
          message="Партнер був доданий успішно!"
          onClose={() => setShowAlert(false)}
        />
      )}
      <div className="main__form container-lg mt-5">
        <h1 className="form-title admin-title mb-4">Додати партнера</h1>
        <form className="form needs-validation" onSubmit={handleSubmit}>
          <PhotoInput photos={file} setPhotos={setFile}/>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
      <Bootstrap/>
    </main>
  );
}
