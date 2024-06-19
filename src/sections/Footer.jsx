const Footer = () => {
  return (
    <section className="text-white flex-wrap">
      <div  className="flex flex-1 flex-col gap-5">
        <div className="mb-8">
          <h1 className="font-palanquin font-bold text-3xl">Contact Us</h1>
        </div>
        <div className="flex flex-wrap gap-1 items-center justify-start">
          <img src="src/assets/images/email.png"
          alt="email icon"
          height={44}
          width={44}
          />
          <h2 className="pl-2 text-lg font-palanquin font-medium">Thesolv@gmail.com</h2>
        </div>
        <div className="flex flex-wrap gap-1 items-center justify-start">
          <img src="src/assets/images/phone.png"
          alt="email icon"
          height={44}
          width={44}
          />
          <div className="items-center">
          <h2 className="pl-2 text-lg font-palanquin font-medium">+20 102 704 2134</h2>
          <h2 className="pl-2 text-lg font-palanquin font-medium">+20 107 012 9443</h2>
          </div>
          
        </div>
        <div className="flex flex-wrap gap-1 items-center justify-start">
          <img src="src/assets/images/Blue-facebook.png"
          alt="email icon"
          height={44}
          width={44}
          />
          <a href="https://www.facebook.com/profile.php?id=100083255174736&mibextid=JRoKGi" target="_blank" className="pl-2 text-lg font-palanquin font-medium">
          <h2 className=" hover:text-blue-600">Enginnerig Co</h2>
          </a>
        </div>
        <div className="flex flex-wrap gap-1 items-center justify-start">
          <img src="src/assets/images/address.png"
          alt="email icon"
          height={44}
          width={44}
          />
          <h2 className="pl-2 text-lg font-palanquin font-medium max-w-56">Al Obour City , 6th district next to Capital Plaza</h2>
        </div>
      </div>
    </section>
  );
};

export default Footer;
