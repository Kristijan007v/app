import React from "react";
import { useTheme } from "next-themes";
import MoonIcon from "../Icons/MoonIcon";
import SunIcon from "../Icons/SunIcon";
import { useState, useEffect } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const dark = theme === "dark" ? true : false;

  const [checked, setChecked] = useState(dark);
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  const handleChange = () => {
    setChecked(() => !checked);
  };

  useEffect(() => {
    setTheme(checked ? "dark" : "light");
  }, [checked, setTheme]);

  if (!mounted) return null;

  return (
    <>
      {checked ? (
        <SunIcon onclick={handleChange} />
      ) : (
        <MoonIcon onclick={handleChange} />
      )}
    </>
  );
}
