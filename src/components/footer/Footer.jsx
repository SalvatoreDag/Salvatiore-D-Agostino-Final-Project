import React from 'react'

function Footer() {
  return (
    
<footer className="p-4 bg-green-primary shadow md:flex md:items-center md:justify-between md:p-6">
    <span className="text-sm text-white sm:text-center">© 2022 Salvatore D'Agostino. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
        <li>
            <a href="https://salvatore-dagostino.netlify.app/" target="_blank" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="https://github.com/SalvatoreDag" target="_blank" className="mr-4 hover:underline md:mr-6">Git Hub</a>
        </li>
        <li>
            <a href="salvatore.dagostino.work@gmail.com" target="_blank" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

  )
}

export default Footer