import { footer } from "@/lib/footer";
import { OmLogo } from "@/components/site/logo";

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-left">
        <div className="footer-logo">
          <OmLogo size={24} />
        </div>
        <span>{footer.copyright}</span>
        <span className="footer-built">{footer.built}</span>
      </div>
      <div className="footer-right">
        <span>{footer.role}</span>
      </div>
    </footer>
  );
}