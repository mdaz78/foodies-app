"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInputRef = useRef();

  const handlePickImage = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    /**
     * const fileReader = new FileReader();
     * fileReader.onload = () => {
     *  setPickedImage(fileReader.result);
     * };
     * fileReader.readAsDataURL(file);
     *
     * We can use the above code to read the file and set the picked image as well
     */

    const url = URL.createObjectURL(file);
    setPickedImage(url);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No Image picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="Image selected by user" fill />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
