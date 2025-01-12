import "./AuthorSect.css"

const AuthorSect = ({ masterClassData }) => {
  return (
    <section className="author">
      <h2>Автори лекал:</h2>
      {masterClassData.authors[0]}
    </section>
  );
};

export default AuthorSect;