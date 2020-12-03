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
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message"></textarea>
    </form>
  );
};

export default ContackForm;
