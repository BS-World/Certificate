import { useState, useEffect } from "react";
import "../styles/certificate.css";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    domain: "Frontend Developer",
    duration: "1 Month",
    startDate: "",
    endDate: "",
    candidateId: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("certData");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    localStorage.setItem("certData", JSON.stringify(updated));
  };

  return (
    <>
      {/* FORM */}
      <div className="form-box">
        <h2>Certificate Generator</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <select name="domain" onChange={handleChange}>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Web Developer</option>
          <option>Data Science</option>
        </select>

        <select name="duration" onChange={handleChange}>
          <option>1 Month</option>
          <option>2 Months</option>
        </select>

        <input type="date" name="startDate" onChange={handleChange} />
        <input type="date" name="endDate" onChange={handleChange} />
        <input name="candidateId" placeholder="BS/REG/XXXXX" onChange={handleChange} />

        <button onClick={() => window.print()}>Download Certificate</button>
      </div>

      {/* CERTIFICATE */}
      <div className="certificate">
        <img src="/logo.png" className="logo" />

        <h1>CERTIFICATE</h1>
        <h3>OF COMPLETION</h3>

        <p className="small">THIS CERTIFICATE IS PRESENTED TO</p>
        <h2 className="name">{form.name}</h2>
        <p className="from">From Alfido Tech</p>

        <p className="content">
          In recognition of his/her efforts and achievements in completing
          <strong> {form.duration} </strong>
          internship as a
          <strong className="highlight"> {form.domain}</strong>.
        </p>

        <p className="content">
          Conducted From <strong>{form.startDate}</strong> to
          <strong> {form.endDate}</strong>
        </p>

        <div className="bottom">
          <div>
            <img src="/qr.png" className="qr" />
            <p>Candidate ID</p>
            <strong>{form.candidateId}</strong>
          </div>

          <div className="badges">
            <img src="/iso.png" />
            <img src="/msme.png" />
          </div>

          <div className="sign-box">
            <img src="/sign.png" />
            <p>Company CEO</p>
            <img src="/stamp.png" className="stamp" />
          </div>
        </div>
      </div>
    </>
  );
}
