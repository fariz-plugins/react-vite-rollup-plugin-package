import React from 'react';
export interface ConfirmationProps {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}
declare const Confirmation: React.FC<ConfirmationProps>;
export default Confirmation;
