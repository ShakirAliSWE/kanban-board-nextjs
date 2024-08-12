import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const typography = {
  fontFamily: poppins.style.fontFamily,
};

export default typography;
