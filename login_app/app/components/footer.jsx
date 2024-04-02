// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <div>
        <p>
          &copy; {new Date().getFullYear()} Tender Management System. All Rights
          Reserved.
        </p>
        <p>
          Follow us on{" "}
          <a href="#" className="text-blue-400 hover:text-blue-500">
            Social Media
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
