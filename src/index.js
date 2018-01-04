import hash from 'string-hash';
import materialColors from './materialColors';

const availableShades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const materialWhite = 'rgba(255, 255, 255, 1)';
const materialBlack = 'rgba(0, 0, 0, 0.87)';

/* Get the whole color object, including all the shades, name and white breakpoint */
function getColorObj(text) {
  const hashedText = hash(text);
  const colorIndex = hashedText % materialColors.length;

  return materialColors[colorIndex];
}

/* Get a ready-to-use Style object of the Material color of a string */
export default function toMaterialStyle(text, shade) {
  let shadeStr = `${shade}`; // convert shade to string
  if (!availableShades.includes(shadeStr)) {
    shadeStr = '500';
  }

  const colorObj = getColorObj(text);

  return {
    backgroundColor: colorObj.shades[shadeStr],
    color: parseInt(shadeStr, 10) >= colorObj.whiteBreakpoint ? materialWhite : materialBlack,
    materialColorName: colorObj.name
  };
}
