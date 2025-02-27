const ALLOWED_EXTENSIONS = ["jpg", "jpeg", "png", "svg"];

export default function FileInput({ setFile, isRequired=false }) {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
      alert("Непідтримуваний формат файлу. Дозволені: jpg, jpeg, png, svg.");
      e.target.value = ""; // Очищення інпуту
      return;
    }

    setFile(selectedFile);
  };

  return (
    <div className="input-group mb-3">
      <input
        required={isRequired ? true : false}
        type="file"
        className="form-control"
        id="inputGroupFile02"
        onChange={handleFileChange}
        accept=".jpg,.jpeg,.png,.svg"
      />
      <label className="input-group-text" htmlFor="inputGroupFile02">
        Зображення (jpg, jpeg, png, svg)
      </label>
    </div>
  );
}
