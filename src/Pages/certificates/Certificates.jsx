import React, { useState } from 'react';
import './Certificates.css';
import { certificates } from '../Certificates/certData.js';
import { Eye } from 'lucide-react';

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="certificates-container">
      <h2 className="certificates-title">My Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="certificate-card"
            onClick={() => setSelected(cert)}
          >
            <img src={cert.thumb} alt={cert.title} className="cert-thumb"/>
            <div className="eye-icon">
              <Eye size={20} />
            </div>
            <p className="cert-name">{cert.title}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="cert-modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={selected.file}
              title={selected.title}
              className="pdf-viewer"
            />
            <p className="modal-title">{selected.title}</p>
            <button className="close-btn" onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
