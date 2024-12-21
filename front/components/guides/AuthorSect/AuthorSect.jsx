import "./AuthorSect.css"

const AuthorSect = ({author, handleAuthorInput}) => {
	return (
        <section className="author">
            <h2>Автор лекал:</h2>
            <textarea
              className='guides-textarea'
              id="authorTextarea"
              value={author}
              onChange={handleAuthorInput}
              placeholder="@"
            />
          </section>
	);
};

export default AuthorSect;