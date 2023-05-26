import React, { useState } from 'react';
import axios from 'axios';

const UpdateDoc = () => {
    const [updatedDocument, setUpdatedDocument] = useState({});

    const updateDocument = (documentId, updatedData) => {
        axios.put(`/api/documents/${documentId}`, updatedData)
            .then(response => {
                // Gérer la mise à jour réussie si nécessaire
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <h3>Document à mettre à jour</h3>
            <input
                type="text"
                value={updatedDocument.nom || ''}
                onChange={e => setUpdatedDocument(prevState => ({
                    ...prevState,
                    nom: e.target.value
                }))}
            />
            <input
                type="text"
                value={updatedDocument.description || ''}
                onChange={e => setUpdatedDocument(prevState => ({
                    ...prevState,
                    description: e.target.value
                }))}
            />
            <input
                type="text"
                value={updatedDocument.model || ''}
                onChange={e => setUpdatedDocument(prevState => ({
                    ...prevState,
                    model: e.target.value
                }))}
            />
            <button onClick={() => updateDocument(1, updatedDocument)}>Mettre à jour</button>
        </div>
    );
};

export default CollectionComponent;