import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={footerCont}>
      <div>
        Made with <FaHeart className="heart" /> by{" "}
        <a
          style={footerLink}
          href="https://victoreke.netlify.app"
          target="_blank"
          rel="noreferrer"
          rel="noopener"
        >
          Eke
        </a>
      </div>
      <div>
        <a style={footerLink} href="/about">
          About
        </a>
      </div>
    </footer>
  );
};

const footerCont = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "1rem",
};

const footerLink = {
  color: "#fff",
};

export default Footer;
