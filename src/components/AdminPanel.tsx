import React, { useState } from 'react';
import './css/AdminPanel.css'; // Import CSS for AdminPanel

export default function AdminPanel({ onStyleChange }) {
  const [styles, setStyles] = useState({
    backgroundColor: '#ffffff',
    textColor: '#000000',
    buttonColor: '#007bff',
    buttonTextColor: '#ffffff',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedStyles = { ...styles, [name]: value };
    setStyles(updatedStyles);
    onStyleChange(updatedStyles);
  };

  return (
    <div className="admin-panel p-4 border rounded shadow">
      <h2 className="font-bold mb-4">Customize ChatForm Styles</h2>
      <div className="mb-4">
        <label className="block mb-2">Background Color</label>
        <input
          type="color"
          name="backgroundColor"
          value={styles.backgroundColor}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Text Color</label>
        <input
          type="color"
          name="textColor"
          value={styles.textColor}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Button Color</label>
        <input
          type="color"
          name="buttonColor"
          value={styles.buttonColor}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Button Text Color</label>
        <input
          type="color"
          name="buttonTextColor"
          value={styles.buttonTextColor}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
}
