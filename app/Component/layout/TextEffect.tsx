import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Coder",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Web Developer",
        1500,
        "Design Grafis",
        1500,
        "Programmer",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[2rem] text-red-500 font-bold  font-mono"
      repeat={Infinity}
    />
  );
};
export default TextEffect;
