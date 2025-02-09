import "./AuthorSect.css"

const AuthorSect = ({ masterClassData }) => {
  return (
    <section className="author">
      <h2>Автори лекал:</h2>
      {masterClassData.authors.map((e, index) => 
        <div key={index}>{e}</div>
      )}
    </section>
  );
};

export default AuthorSect;