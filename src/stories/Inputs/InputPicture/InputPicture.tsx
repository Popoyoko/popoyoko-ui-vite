import React, { useRef } from 'react';
import './InputPicture.css';
import addPicture from "../../../Icons/AddPicture/addPicture.svg"

interface InputPictureProps {
    label: string;
};

export const InputPicture = ({
    label,
}: InputPictureProps) => {

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      // Dessine capture vidéo sur canevas
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convertit canvas en URL de données
      const imageData = canvas.toDataURL('image/jpeg');
      console.log(imageData);

      //Ce que vous voulez avec l'URL de données de l'image catch
    }
  };

  // Demande autorisation d'accéder à la webcam quand composant monté
  React.useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error('Erreur lors de l\'accès à la webcam :', error);
      });
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay muted style={{ display: 'none' }} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <button onClick={handleCapture}>
        {label}
        <img src={addPicture} alt='addPicture'></img>
      </button>
    </div>
  );
};