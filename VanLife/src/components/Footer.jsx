function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footerContent">
          <span>
            #VANLIFE &copy; {thisYear} |{" "}
            <a href="https://twitter.com/theblaisecode/" target="_blank">
              TheBlaiseCode
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
