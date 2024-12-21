import "./MasterClassSect.css"

const MasterClassSect = ({masterClassData}) => {
	return (
        <section className="master-class">
            <h1 style={{ marginBottom: '20px', fontSize: '26px', textAlign: 'center' }}>
              {masterClassData.title}
            </h1>
            <h2>Лекала:</h2>
            <ul>
              <li>
                Розмір 1 - <a href={masterClassData.file.url}>завантажити</a>
              </li>
            </ul>
          </section>
	);
};

export default MasterClassSect;