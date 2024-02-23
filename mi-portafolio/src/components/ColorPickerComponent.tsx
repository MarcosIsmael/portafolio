import React, { useState, useCallback } from 'react';
import { ChromePicker, ColorResult } from 'react-color';

interface ColorPickerProps {
  initialColor1?: string;
  initialColor2?: string;
  onColorChange1: (color: string) => void;
  onColorChange2: (color: string) => void;
}

const ColorPickerComponent: React.FC<ColorPickerProps> = ({
  initialColor1 = '#ffffff',
  initialColor2 = '#000000',
  onColorChange1,
  onColorChange2,
}) => {
  const [color1, setColor1] = useState<string>(initialColor1);
  const [color2, setColor2] = useState<string>(initialColor2);

  const handleColorChange1 = useCallback(
    (newColor: ColorResult) => {
      setColor1(newColor.hex);
      onColorChange1(newColor.hex);
    },
    [onColorChange1]
  );

  const handleColorChange2 = useCallback(
    (newColor: ColorResult) => {
      setColor2(newColor.hex);
      onColorChange2(newColor.hex);
    },
    [onColorChange2]
  );

  return (
    <div>
      <div>
        <label>Color 1:</label>
        <ChromePicker color={color1} onChange={handleColorChange1} />
      </div>
      <div>
        <label>Color 2:</label>
        <ChromePicker color={color2} onChange={handleColorChange2} />
      </div>
    </div>
  );
};

export default ColorPickerComponent;
