'use client';

import bootstrap from "bootstrap"
import '$style/bootstrap.min.css'
import "$style/admin/Admin.css"
import Image from 'next/image';

export default function ChangePage() {
	return (
		<main className="main">
			<div className="main__form container-lg mt-5">
				<h1 className="form-title admin-title mb-4">Додати статистичну картку</h1>
				<form className="form needs-validation">
					<div className="input-group mb-3">
						<input required type="file" className="form-control" id="inputGroupFile02" />
						<label className="input-group-text" htmlFor="inputGroupFile02">Зображення</label>
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">Заголовок:</span>
						<input required type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">Значення:</span>
						<input required type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
					</div>
					<button type="submit" className="btn btn-primary">Save</button>
				</form>
			</div>
		</main>
	)
}