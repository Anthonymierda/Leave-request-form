import React, { useState } from 'react';
import UserForm from './UserForm';
import AdminForm from './AdminForm';

const App = () => {
  const [formData, setFormData] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const [declined, setDeclined] = useState(false);

  const handleUserFormSubmit = (data) => {
    setFormData(data);
  };

  const handleAccept = () => {
    setAccepted(true);
    setDeclined(false);
  };

  const handleDecline = () => {
    setAccepted(false);
    setDeclined(true);
  };

  return (
    <div>
      {!formData && <UserForm onSubmit={handleUserFormSubmit} />}
      {formData && !accepted && !declined && (
        <div>
          <p>Form submitted. Waiting for admin approval...</p>
          <AdminForm onAccept={handleAccept} onDecline={handleDecline} />
        </div>
      )}
      {accepted && (
        <p style={{ color: 'green' }}>Your leave request has been accepted.</p>
      )}
      {declined && (
        <p style={{ color: 'red' }}>Your leave request has been declined.</p>
      )}
    </div>
  );
};

export default App;