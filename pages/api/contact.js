import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
  "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"
);

export default async (req, res) => {
  const { email, subject, message, name } = req.body;
  const msg = {
    to: "vidovic@kristijan.me",
    from: email,
    subject,
    name,
    text: message,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    res.status(500).json({ error: "Error sending email" });
  }
};
