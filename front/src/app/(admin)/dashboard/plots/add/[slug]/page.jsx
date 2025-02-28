"use client";

import { useEffect, useState } from "react";
import "$style/bootstrap.min.css";
import "$style/admin/Admin.css";
import dynamic from 'next/dynamic';
const Bootstrap = dynamic(() => import('$component/guides/Bootstrap/Bootstrap'), { ssr: false });
import Alert from "$component/dashboard/Alert/Alert";
import { changeData, getData, postData } from "api";
import { useParams } from "next/navigation";
import FileInput from "$component/dashboard/FileInput/FileInput";
import ImageInput from "$component/dashboard/ImageInput/ImageInput";

export default function ChangePage() {
	const [title, setTitle] = useState("");
	const [url, setUrl] = useState("");
	const [title_en, setTitleEn] = useState("");
	const [file, setFile] = useState("");
	const [showAlert, setShowAlert] = useState(false);

	const [element, setElement] = useState();

	const params = useParams();
	const { slug } = params
 
	useEffect(() => {
		getData(`plots/${slug}`, setElement);
	}, []);

	useEffect(() => {
		if (element != undefined) {
			setTitle(element.title)
			setFile(element.path)
			setTitleEn(element.title_en)
			setUrl(element.url)
		}
	}, [element]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("title", title);
		formData.append("url", url);
		formData.append("title_en", title_en);
		if (file) {
			formData.append("path", file);
		}

		changeData("plots", slug, formData, setShowAlert)
	};

	return (
		<main className="main">
			{showAlert && (
				<Alert
					message="Слайд був успішно змінений!"
					onClose={() => setShowAlert(false)}
				/>
			)}
			<div className="main__form container-lg mt-5">
				<h1 className="form-title admin-title mb-4">Змінити сюжет</h1>
				<form className="form needs-validation" onSubmit={handleSubmit}>
					<div className="ua">
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
							<span className="input-group-text" id="inputGroup-sizing-default">Url</span>
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
					</div>
					<div className="en">
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
					</div>
					<button type="submit" className="btn btn-primary">Save</button>
				</form>
			</div>
			<Bootstrap />
		</main>
	);
}
