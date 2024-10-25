import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails"
import MailboxForm from "./components/MailboxForm";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addMailbox = (newMailboxData) => {
    console.log(newMailboxData) // {boxSize: 'Small', boxholder: 'Alex'}
    // Add _id to new mail box before adding to mailboxes array
    newMailboxData._id = mailboxes.length + 1
    // add newMailboxData to mailboxes array (setMailboxes)
    setMailboxes([...mailboxes, newMailboxData])
  };

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route
          path="/mailboxes/new"
          element={<MailboxForm addMailbox={addMailbox} />}
        />
      </Routes>
    </>
  );
};

export default App;
