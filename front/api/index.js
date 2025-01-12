import axios from "axios";

// функція отримання карток
export default async function getData(type, setData) {
	try {
		const response = await axios.get('http://localhost:3000/' + type);
		console.log(response.data);
		setData(response.data);
	} catch (error) {
		console.error("Ошибка при получении данных:", error);
	}
}

// функція видалення карток
export async function deleteDataById(type, id, setData) {
	try {
		await axios.delete(`http://localhost:3000/${type}/${id}`);
		setData((prevData) => prevData.filter((data) => data.id !== id));
	} catch (error) {
		console.error(`Ошибка при удалении карточки с id ${id}:`, error);
	}
}

export async function postData(type, formData, setShowAlert) {
	try {
		await axios.post("http://localhost:3000/" + type, formData, {
			headers: { "Content-Type": "multipart/form-data" },
		});
		setShowAlert(true);
		setTimeout(() => setShowAlert(false), 3000);
	} catch (error) {
		console.error("Ошибка при отправке данных:", error);
		alert("Ошибка при отправке данных.");
	}
}