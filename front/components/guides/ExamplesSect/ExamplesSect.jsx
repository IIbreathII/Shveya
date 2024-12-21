import "./ExamplesSect.css"

const ExamplesSect = ({masterClassData}) => {
	return (
        <section className="examples">
            <h2>Приклади готового одягу:</h2>
            <div className="gallery">
              <img src={masterClassData.example.url} alt="Готовий одяг 1" />
            </div>
          </section>
	);
};

export default ExamplesSect;