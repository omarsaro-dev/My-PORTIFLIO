import { site } from "@/lib/site";

export function OgArtwork() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#050505",
        display: "flex",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "0",
          display: "flex",
          background:
            "radial-gradient(circle at 50% 60%, rgba(255,77,0,0.12) 0%, rgba(5,5,5,0) 50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "0",
          display: "flex",
          background:
            "radial-gradient(circle at 30% 30%, rgba(139,92,246,0.08) 0%, rgba(5,5,5,0) 40%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 80,
          top: 80,
          width: 48,
          height: 48,
          borderRadius: 10,
          border: "1px solid rgba(255,77,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 18, fontWeight: 700, color: "#FF4D00" }}>
          OM
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          left: 80,
          top: 300,
          right: 80,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: "#FF4D00",
            letterSpacing: 4,
            opacity: 0.9,
            textTransform: "uppercase",
          }}
        >
          Frontend Developer
        </span>
        <div style={{ display: "flex", marginTop: 30 }} />
        <span
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: "#8A8A8A",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          AI Automation Enthusiast
        </span>
        <div
          style={{
            marginTop: 36,
            width: 320,
            height: 1,
            background: "rgba(255,77,0,0.4)",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "#F5F5F5",
            letterSpacing: 6,
          }}
        >
          OMAR
        </span>
        <span
          style={{
            fontSize: 96,
            fontWeight: 300,
            color: "transparent",
            WebkitTextStroke: "1.5px #F5F5F5",
            letterSpacing: 6,
          }}
        >
          MOHAMED
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
        }}
      >
        <svg width={1200} height={630} style={{ position: "absolute", inset: 0 }}>
          <circle cx={1100} cy={120} r={2} fill="#FF4D00" opacity={0.6} />
          <circle cx={1050} cy={200} r={1.5} fill="#8B5CF6" opacity={0.4} />
          <circle cx={1120} cy={350} r={1} fill="#FF4D00" opacity={0.3} />
          <circle cx={980} cy={450} r={2.5} fill="#8B5CF6" opacity={0.3} />
          <line
            x1={1100}
            y1={120}
            x2={1050}
            y2={200}
            stroke="#FF4D00"
            strokeWidth={0.5}
            opacity={0.15}
          />
          <line
            x1={1050}
            y1={200}
            x2={1120}
            y2={350}
            stroke="#FF4D00"
            strokeWidth={0.5}
            opacity={0.1}
          />
        </svg>
      </div>

      <span
        style={{
          position: "absolute",
          right: 40,
          bottom: 28,
          fontSize: 11,
          letterSpacing: 2,
          color: "#55555A",
        }}
      >
        {site.url}
      </span>
    </div>
  );
}