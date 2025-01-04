import "./AuthorSect.css"

const AuthorSect = ({ masterClassData }) => {
  return (
    <section className="author">
      <h2>Автори лекал:</h2>
      {masterClassData.authors}
    </section>
  );
};

export default AuthorSect;