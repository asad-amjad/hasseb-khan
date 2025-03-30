import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const services = [
  { label: "Body Aesthetics", href: "/body-aesthetics" },
  { label: "Genital Aesthetics", href: "/genital-aesthetics" },
  { label: "Breast Aesthetics", href: "/breast-aesthetics" },
  { label: "Facial Aesthetics", href: "/facial-aesthetics" },
  { label: "Dentistry", href: "/dentistry" },
];

export default function Footer() {
  return (
    <>
      <ScrollToTop />
      <footer className="bg-[#1F385F] text-white py-[80px] px-[16px] md:px-[100px]">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[200px] text-sm">
            {/* Quick Links */}
            <FooterColumn title="Quick Links">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about-us">About Us</FooterLink>
              <FooterLink to="/contact-us">Contact Us</FooterLink>
            </FooterColumn>

            {/* Services */}
            <FooterColumn title="Services">
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {services.map((service) => (
                  <FooterLink key={service.href} to={service.href}>
                    {service.label}
                  </FooterLink>
                ))}
              </div>
            </FooterColumn>

            {/* Contact */}
            <FooterColumn title="Contact">
              <p className="body-2 mt-4">(+971) 52 123 4567</p>
              <p className="body-2 mt-4">
                <a href="mailto:info@domainname.com" className="hover:underline">
                  info@domainname.com
                </a>
              </p>
              <p className="body-2 mt-4">123 Street, Dubai, United Arab Emirates</p>
            </FooterColumn>
          </div>
        </div>
      </footer>
    </>
  );
}

/* Scroll to Top Component */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

/* Footer Column Wrapper */
const FooterColumn = ({ title, children }) => (
  <div className="">
    <h5 className="mb-[33px]">{title}</h5>
    <div className="space-y-[20px]">{children}</div>
  </div>
);

/* Footer Link Component */
const FooterLink = ({ to, children }) => (
  <Link to={to} className="body-2 block hover:underline">
    {children}
  </Link>
);
