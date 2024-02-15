import React, { useState } from 'react';

const JobAdvtForm = () => {
  const [resume, setResume] = useState(null);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, including uploading the resume file
    // You can use FormData API to send the form data to the server
    // Example:
    // const formData = new FormData();
    // formData.append('resume', resume);
    // formData.append('jobTitle', jobTitle);
    // formData.append('jobDescription', jobDescription);
    // fetch('/api/submit-job-advt', {
    //   method: 'POST',
    //   body: formData,
    // })
    // .then(response => {
    //   // Handle response
    // })
    // .catch(error => {
    //   // Handle error
    // });
  };

  return (
    <div className="job-advt-form">
      <h2>Job Advertisement</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows={4}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="resume">Upload Resume (PDF only)</label>
          <input
            type="file"
            id="resume"
            name="resume"
            value={resume}
            accept=".pdf"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobAdvtForm;
