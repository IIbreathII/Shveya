import "./ComSect.css"

const ComSect = () => {
	return (
        <section className="comments">
            <h2>Коментарі і питання:</h2>
            <textarea className='guides-textarea' placeholder="Залиште ваш коментар..."></textarea>
            <button>Надіслати</button>
          </section>
	);
};

export default ComSect;