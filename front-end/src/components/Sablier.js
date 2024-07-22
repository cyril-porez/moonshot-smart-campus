import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Assurez-vous que le chemin vers FontAwesome est correct
import '../style/Sablier.css'; // Assurez-vous que le chemin vers votre fichier CSS est correct

const Sablier = () => {
  return (
    <div id="hourglass" className="fa-stack fa-4x body1">
      <i className="fa fa-stack-1x fa-hourglass-start"></i>
      <i className="fa fa-stack-1x fa-hourglass-half"></i>
      <i className="fa fa-stack-1x fa-hourglass-end"></i>
      <i className="fa fa-stack-1x fa-hourglass-end"></i>
      <i className="fa fa-stack-1x fa-hourglass-o"></i>
    </div>
  );
};

export default Sablier;

