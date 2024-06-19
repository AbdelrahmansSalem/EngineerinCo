const Nav = () => {
  return (
    <header className='padding-x p-8 fixed z-20 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'
            className="flex justify-start items-center gap-4 font-montserrat text-3xl font-extrabold ">
                <img src="src/assets/images/Logo.png"
                alt="Logo"
                height={70}
                width={60}
                />
                <h><span className="text-sky-600 font-palanquin font-extrabold"> Engineering</span> Co</h>
            </a>
            <div className="hidden z-20  max-lg:block ">
              <a href="tel:01027042134">
                <img
                src="src/assets/images/call.png"
                alt="call"
                width={35}
                height={30}
                />
              </a>
              
            </div>
        </nav>
    </header>
  )
}

export default Nav