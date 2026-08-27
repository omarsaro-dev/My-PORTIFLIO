import { services } from "@/lib/services";
import { Icon } from "@/components/site/icons";

export function Services() {
  return (
    <section className="services" id="services" aria-label="Services">
      <div className="services-head">
        <div className="about-eyebrow mono" style={{ color: "var(--orange)" }}>
          Capabilities
        </div>
        <h2 className="display">Services</h2>
      </div>
      <div className="services-list">
        {services.map((service) => (
          <div key={service.idx} className="service-item">
            <div className="service-idx mono">{service.idx} /</div>
            <div className="service-content">
              <h3 className="service-title display">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className={`service-status mono ${service.status}`}>
                {service.status}
              </div>
            </div>
            <div className="service-arrow">
              <Icon name="chevronRight" size={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}