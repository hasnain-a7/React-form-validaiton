import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [Gender, setGender] = useState("");
  const [url, seturl] = useState("");
  const [about, setabout] = useState("");
  const [file, setfile] = useState();

  const handleReset = () => {
    setfirstName("");
    setlastName("");
    setemail("");
    setcontact("");
    setGender("");
    seturl("");
    setabout("");
    setfile();
    console.table({
      firstName,
      lastName,
      email,
      contact,
      Gender,
      url,
      about,
    });
  };

  const handleSubmit = () => {
    console.table({
      firstName,
      lastName,
      email,
      contact,
      Gender,
      url,
      about,
    });
  };

  return (
    <>
      <div>
        <h1>Form in React</h1>
        <fieldset>
          <label>First Name</label>
          <input
            type="text"
            placeholder="Your First Name"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />

          <label>Last Name</label>
          <input
            type="text"
            placeholder="Your Last Name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <label>Contact</label>
          <input
            type="tel"
            placeholder="Contact Number"
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
          />

          <label>Gender</label>
          <label>
            <input
              type="radio"
              value="male"
              checked={Gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={Gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              value="other"
              checked={Gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />
            Other
          </label>

          <label>Upload Resume</label>
          <input
            type="file"
            value={file}
            accept=".pdf, .docx"
            onChange={(e) => setfile(e.target.files[0])}
          />

          <label>Enter URL</label>
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => seturl(e.target.value)}
          />

          <label>About</label>
          <textarea
            placeholder="Tell us about yourself."
            value={about}
            onChange={(e) => setabout(e.target.value)}
          ></textarea>
        </fieldset>

        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default App;
