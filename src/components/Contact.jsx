import { useState } from 'react'
import Button from '../utilities/Button'

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Name:', name, 'Email:', email, 'Message:', message)
  }

  return (
    <>
      <h2 className="text-3xl font-bold pb-4 text-center pt-14 px-8">
        Contact me
      </h2>
      <div className="flex flex-col items-center bg-orange-400">
        <form
          id="contact"
          className="flex flex-col items-center rounded-md p-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-center mb-4 ">
            <label className="mr-2 flex flex-col font-bold">Name</label>
            <input
              className="rounded-md px-2"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center mb-4">
            <label className="mr-2 flex flex-col font-bold">Email</label>
            <input
              className="rounded-md px-2"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center mb-4">
            <label className="flex font-bold">Message</label>
            <textarea
              className="rounded-md p-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              cols="40"
              rows="4"
            ></textarea>
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    </>
  )
}

export default ContactForm
