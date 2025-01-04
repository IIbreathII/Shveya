import "./DetailsSect.css"

const DetailsSect = ({ masterClassData }) => {
  return (
    <section className="details1">
      <p>{masterClassData.details}</p>
      <p>{masterClassData.summary}</p>
    </section>
  );
};

export default DetailsSect;