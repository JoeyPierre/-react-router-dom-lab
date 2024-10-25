import { useState } from "react";
import { useNavigate } from "react-router-dom";

// const initialState = {
//   _id: "",
//   boxSize: "",
//   boxholder: "",
// };

const MailboxForm = (props) => {
  const [formData, setFormData] = useState({
    boxSize: "",
    boxholder: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addMailbox(formData);
    setFormData({ boxSize: "", boxholder: ""});
    navigate("/mailboxes");
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxSize">Box Size:</label>
        <input
          type="text"
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        />
        <label htmlFor="boxholder">Box Holder:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          value={formData.boxholder}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;
