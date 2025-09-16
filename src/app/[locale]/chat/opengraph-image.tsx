import { COMMON_DATA } from "@/data/common";
import { getTranslations } from "next-intl/server";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = COMMON_DATA.owner;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const gizmoData = ["25%", "80%", "10%"];

const gizmoStyle = {
  width: 7,
  height: 24,
  borderRadius: 6,
  background: "#121418",
};

const Image = async () => {
  const [t, lexendRegular, montserratBlack, oswaldBold, heroData] =
    await Promise.all([
      getTranslations("chat.info"),
      readFile(join(process.cwd(), "src/assets/fonts/Lexend-Regular.ttf")),
      readFile(join(process.cwd(), "src/assets/fonts/Montserrat-Black.ttf")),
      readFile(join(process.cwd(), "src/assets/fonts/Oswald-SemiBold.ttf")),
      readFile(join(process.cwd(), "src/assets/heroes/jack.png"), "base64"),
    ]);

  const heroSrc = `data:image/png;base64,${heroData}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#090b0f",
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          color: "white",
          fontFamily: "'Lexend', sans-serif",
        }}
      >
        {/* Background clipped shape */}
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
            background: "#07090d",
            position: "absolute",
            top: 0,
            left: 0,
            width: "36rem",
            height: "54rem",
          }}
        />

        {/* Grid lines with gizmos */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                background: "#121418",
                width: "1px",
                height: "100%",
                display: "flex",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: gizmoData[i],
                  left: "-4px", // center gizmo on line
                  ...gizmoStyle,
                }}
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            gap: "50px",
            padding: "60px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                color: "#d97706",
                fontSize: "64px",
              }}
            >
              {t("title")}
            </div>
            <div
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 600,
                fontSize: "42px",
                opacity: 0.9,
              }}
            >
              {t("catchphrase")}
            </div>
            <div
              style={{
                width: "100px",
                height: "6px",
                borderRadius: "10px",
                background: "#d97706",
                marginTop: "12px",
              }}
            />
          </div>

          <img
            src={heroSrc}
            alt="hero"
            style={{ height: "70%", transform: "scaleX(-1)" }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Lexend", data: lexendRegular, style: "normal", weight: 400 },
        { name: "Oswald", data: oswaldBold, style: "normal", weight: 600 },
        {
          name: "Montserrat",
          data: montserratBlack,
          style: "normal",
          weight: 900,
        },
      ],
    }
  );
};

export default Image;
