"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import "$style/bootstrap.min.css";
import "$style/admin/Admin.css";
import dynamic from 'next/dynamic';
const Bootstrap = dynamic(() => import('$component/guides/Bootstrap/Bootstrap'), { ssr: false });
import Alert from "$component/dashboard/Alert/Alert";
import { changeData, getData, postData } from "api";
import { useParams, usePathname } from "next/navigation";
import FileInput from "$component/dashboard/FileInput/FileInput";
import ImageInput from "$component/dashboard/ImageInput/ImageInput";

export default function ChangePage() {
	const [title, setTitle] = useState("");
	const [title_en, setTitleEn] = useState("");
	const [url, setUrl] = useState("");
	const [file, setFile] = useState("");
	const [showAlert, setShowAlert] = useState(false);

	const [element, setElement] = useState();

	const params = useParams();
	const { slug } = params

	useEffect(() => {
		getData(`medialinks/${slug}`, setElement);
	}, []);

	useEffect(() => {
		if (element != undefined) {
			setFile(element.path)
			setTitle(element.title)
			setTitleEn(element.title_en)
			setUrl(element.url)
		}
	}, [element]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		if (file) {
			formData.append("path", file);
		}
		formData.append("title", title);
		formData.append("title_en", title_en);
		formData.append("url", url);

		changeData("medialinks", slug, formData, setShowAlert)
	};

	return (
		<main className="main">
			{showAlert && (
				<Alert
					message="Посилання було успішно змінене!"
					onClose={() => setShowAlert(false)}
				/>
			)}
			<div className="main__form container-lg mt-5">
				<h1 className="form-title admin-title mb-4">Змінити посилання</h1>
				<form className="form needs-validation" onSubmit={handleSubmit}>
					<ImageInput image={file} setImage={setFile} />
					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">Заголовок:</span>
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
					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">Заголовок (англ):</span>
						<input
							required
							type="text"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-default"
							value={title_en}
							onChange={(e) => setTitleEn(e.target.value)}
						/>
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">Посилання:</span>
						<input
							required
							type="text"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-default"
							value={url}
							onChange={(e) => setUrl(e.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-primary">Save</button>
				</form>
			</div>
			<Bootstrap />
		</main>
	);
}
