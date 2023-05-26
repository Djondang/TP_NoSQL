import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CollectionComponent = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    axios.get('/api/documents')
      .then(response => {
        setDocuments(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {documents.map(document => (
        <div key={document.id}>
          <h3>{document.nom}</h3>
          <p>{document.description}</p>
          <p>{document.model}</p>
        </div>
      ))}
    </div>
  );
};

export default CollectionComponent;