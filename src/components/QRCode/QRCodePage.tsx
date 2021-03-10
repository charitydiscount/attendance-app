import React from 'react';
import QRCode from 'react-qr-code';

export const QRCodePage = () => {
  const qrValue = 'https://charitydiscount.ro/shops'; // here we can fill with any link we want

  return (
    <div style={{ padding: 50 }}>
      <QRCode value={qrValue} />
    </div>
  );
};
