import React from 'react';

export interface ConfirmationProps {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="confirmation-dialog">
            <p>{message}</p>
            <button onClick={onConfirm}>Confirm</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default Confirmation;