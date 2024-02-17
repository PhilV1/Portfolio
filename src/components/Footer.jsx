import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <div className=" flex flex-col items-center mt-8 py-4">
        <div className="flex gap-2 mb-2">
          <a target="_blank" href="https://github.com/philv1" rel="noreferrer">
            <FaGithub className="text-orange-500 text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/phil-werpub/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-orange-500 text-2xl" />
          </a>
        </div>
        ©Copyright 2023 Phil Werpub. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
