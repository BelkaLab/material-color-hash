export default function(
  text: string,
  shade: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
): {
  backgroundColor: string;
  color: string;
  materialColorName:
    | "Red"
    | "Pink"
    | "Purple"
    | "Deep Purple"
    | "Indigo"
    | "Blue"
    | "Light Blue"
    | "Cyan"
    | "Teal"
    | "Green"
    | "Light Green"
    | "Lime"
    | "Yellow"
    | "Amber"
    | "Orange"
    | "Deep Orange"
    | "Brown"
    | "Grey"
    | "Blue Grey";
};
