import gemPurple from "../assets/gem.png";
import gemGreen from "../assets/gem-green.png";

interface GemDividerProps {
  color?: "purple" | "green";
}

function GemDivider({ color = "purple" }: GemDividerProps) {
  const gem = color === "green" ? gemGreen : gemPurple;

  return (
    <div style={{ display: "flex", gap: "4px", margin: "16px 0" }}>
      <img height={24} src={gem} alt="" />
      <img height={24} src={gem} alt="" />
      <img height={24} src={gem} alt="" />
    </div>
  );
}

export default GemDivider;
