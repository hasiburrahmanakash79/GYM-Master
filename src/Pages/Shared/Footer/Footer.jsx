const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <nav>
        <header className="footer-title">About</header>
        <a className="link link-hover">When an unknown printer took galle y of tyand scrambled it to make typ nknown pret specimen.</a>
        <a className="link link-hover">81 Kazi Haven, Awesome Villa</a>
        <a className="link link-hover">800-123-4567</a>
        <a className="link link-hover">gymmaster@yourname.com</a>
        <a className="link link-hover">800-123-4567</a>
      </nav>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
