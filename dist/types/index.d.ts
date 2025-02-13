import React from 'react';

interface ConfirmationProps {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}
declare const Confirmation: React.FC<ConfirmationProps>;

export { Confirmation, type ConfirmationProps };
