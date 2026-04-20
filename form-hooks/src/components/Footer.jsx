import logo from "../assets/new-logo.png";

export default function Footer() {
    return <>
    
    <style>{`
        .mziuri-footer-link:hover {
          color: #f0c060 !important;
          padding-left: 6px !important;
        }
        .mziuri-copyright-link:hover {
          color: #f0c060 !important;
        }
      `}</style>
    <footer
        style={{
          width: "100%",
          background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 40%, #16213e 100%)",
          borderTop: "2px solid #e8a020",
          padding: "48px 0 0 0",
          position: "relative",
          overflow: "hidden",
          fontFamily: "'Segoe UI', Tahoma, Geneva, sans-serif",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.6fr 1fr 1fr",
              gap: 48,
              paddingBottom: 40,
            }}
          >
            <div>
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: 70,
                  height: "auto",
                  marginBottom: 14,
                  objectFit: "contain",
                }}
              />

              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#e8a020",
                  letterSpacing: "0.04em",
                  lineHeight: 1.3,
                  marginBottom: 6,
                }}
              >
                საინფორმაციო ტექნოლოგიების<br />
                ცენტრი <span style={{ color: "#f0c060" }}>«მზიური»</span>
              </div>

              <p
                style={{
                  fontSize: 13,
                  color: "#8899bb",
                  lineHeight: 1.6,
                  marginTop: 10,
                  borderLeft: "2px solid #e8a020",
                  paddingLeft: 12,
                }}
              >
                1987 წელიდან თქვენს სამსახურში —<br />
                ცოდნა, ტექნოლოგია, მომავალი.
              </p>
            </div>

            <div>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#e8a020",
                  marginBottom: 16,
                  paddingBottom: 8,
                  borderBottom: "1px solid rgba(232,160,32,0.2)",
                }}
              >
                ნავიგაცია
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "მთავარი",
                  "ზოგადი მონაცემები",
                  "ისტორია",
                  "სასწავლო პროცესი",
                  "სკოლის მოსწავლეთათვის",
                  "ზრდასრულთათვის",
                ].map((label) => (
                  <li key={label} style={{ marginBottom: 9 }}>
                    <a
                      href="#"
                      className="mziuri-footer-link"
                      style={{
                        color: "#a0b0cc",
                        textDecoration: "none",
                        fontSize: 13.5,
                        transition: "color 0.2s, padding-left 0.2s",
                        display: "inline-block",
                      }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#e8a020",
                  marginBottom: 16,
                  paddingBottom: 8,
                  borderBottom: "1px solid rgba(232,160,32,0.2)",
                }}
              >
                სხვა
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: 9 }}>
                  <a href="#" className="mziuri-footer-link" style={{ color: "#a0b0cc", textDecoration: "none", fontSize: 13.5 }}>
                    კონტაქტი
                  </a>
                </li>
                <li style={{ marginBottom: 9 }}>
                  <a
                    href="https://mziuri.ge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mziuri-footer-link"
                    style={{ color: "#a0b0cc", textDecoration: "none", fontSize: 13.5 }}
                  >
                    მთავარი საიტი (mziuri.ge)
                  </a>
                </li>
                <li style={{ marginBottom: 9 }}>
                  <a href="#" className="mziuri-footer-link" style={{ color: "#a0b0cc", textDecoration: "none", fontSize: 13.5 }}>
                    ინტერნეტ შეჯიბრი
                  </a>
                </li>
                <li style={{ marginBottom: 9 }}>
                  <a href="#" className="mziuri-footer-link" style={{ color: "#a0b0cc", textDecoration: "none", fontSize: 13.5 }}>
                    იმედი ხვალის
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(232,160,32,0.15)",
              padding: "16px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <p style={{ fontSize: 12, color: "#556677" }}>
              © 2026 ყველა უფლება დაცულია &nbsp;·&nbsp;
              <a
                href="https://mziuri.ge"
                className="mziuri-copyright-link"
                style={{ color: "#e8a020", textDecoration: "none", fontWeight: 600 }}
              >
                mziuri.ge
              </a>
            </p>

            <span
              style={{
                fontSize: 11,
                background: "rgba(232,160,32,0.1)",
                border: "1px solid rgba(232,160,32,0.25)",
                color: "#e8a020",
                padding: "3px 10px",
                borderRadius: 20,
              }}
            >
              დაარსდა 1987 წელს
            </span>
          </div>
        </div>
      </footer>
    </>
}