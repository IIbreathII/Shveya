import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function ImageInput({ image, setImage }) {
    const handleChange = (value) => {
        const match = value.match(/[-\w]{25,}/);
        setImage(match ? match[0] : "");
    };

    return (
        <InputGroup className="mb-3">
            <Form.Control
                type="text"
                placeholder="Посилання на зображення з Google Drive"
                value={image}
                onChange={(e) => handleChange(e.target.value)}
            />
        </InputGroup>
    );
}