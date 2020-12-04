import React, { useEffect, useState } from "react";

const ContackForm = () => {
  const [showModal, setShowModal] = useState("");
  useEffect(() => {}, []);

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="max-contact-name">Name</label>
      <input id="max-contact-name" type="text" name="name" />
      <label htmlFor="max-contact-email">E-mail</label>
      <input id="max-contact-email" type="email" name="email" />
      <label htmlFor="max-contact-content">Subject</label>
      <textarea id="max-contact-content" name="message"></textarea>
    </form>
  );
};

export default ContackForm;
