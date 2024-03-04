import { useState } from 'react';
import Button from '../utilities/Button';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');

    alert(
      'Message is currently not being sent. You can find my Links in the footer to contact me. Thank you!'
    );
  };

  return (
    <>
      <h2 className="text-3xl font-bold pb-4 text-center pt-14 px-8">
        Contact me
      </h2>
      <div className="flex flex-col items-center bg-orange-400 text-white">
        <form
          id="contact"
          className="flex flex-col items-center rounded-md p-4 "
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-center mb-4 ">
            <label htmlFor="name" className="mr-2 flex flex-col font-bold">
              Name
            </label>
            <input
              className="rounded-md px-2 text-black"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-center mb-4">
            <label htmlFor="email" className="mr-2 flex flex-col font-bold">
              Email
            </label>
            <input
              className="rounded-md px-2 text-black"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-center mb-4">
            <label htmlFor="message" className="flex font-bold">
              Message
            </label>
            <textarea
              className="rounded-md p-2 text-black"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              cols="32"
              rows="4"
              required
            ></textarea>
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    </>
  );
}

export default Contact;
