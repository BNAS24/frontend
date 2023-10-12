import React from "react";

const email = (
  <a href="mailto:contact@sportsfanatichub.com">contact@sportsfanatichub.com</a>
);

const contactUs = {
  title: "Contact Us",
  email: email, // Store the email as a JSX element
  body: (
    <>
      At Sports Fanatic Hub, we value your feedback, questions, and suggestions.
      If you'd like to get in touch with us, please feel free to send us an email at{" "}
      {email}
    </>
  ),
};

export default contactUs;


