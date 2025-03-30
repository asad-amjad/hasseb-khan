import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1F385F] text-white py-[80px] px-[100px]">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[180px] text-sm">
          {/* Quick Links */}
          <div>
            <h5>Quick Links</h5>
            <ul className="space-y-[30px] mt-[33px]">
              <li>
                <Link to="/" className="hover:underline">
                  <p className="body-2">Home</p>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  <p className="body-2">About Us</p>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  <p className="body-2">Contact Us</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5>Services</h5>
            <div className="grid grid-cols-2 gap-[30px] mt-[33px]">
              <Link to="">
                <p className="body-2">Gastric Sleeves</p>
              </Link>
              <Link to="">
                <p className="body-2">Hair Transplant</p>
              </Link>
              <Link to="">
                <p className="body-2">Rhinoplasty</p>
              </Link>
              <Link to="">
                <p className="body-2">Oncology</p>
              </Link>
              <Link to="">
                <p className="body-2">Tummy Tuck (BBL)</p>
              </Link>
              <Link to="">
                <p className="body-2">Orthopedics</p>
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5>Contact</h5>
            <p  className="body-2 mt-[33px]">(+971) 52 123 4567</p>
            <p className="body-2 mt-[30px]">
              <a href="mailto:info@domainname.com" className="hover:underline">
                info@domainname.com
              </a>
            </p>
            <p className="body-2 mt-[30px]">123 Street, Dubai, United Arab Emirates</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
