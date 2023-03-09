import React from 'react';

type ConfirmModalPropsType = {
  title: string;
  description?: string;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
  onConfirm: React.MouseEventHandler<HTMLButtonElement>;
};

const ConfirmModal = ({ title, description, onCancel, onConfirm }: ConfirmModalPropsType) => {
  return (
    <div>
      <div>
        <div>
          <h2>Modal Title: {title}</h2>
          <p>description: {description}</p>
        </div>
        <div>
          <button type='button' onClick={onCancel}>
            취소
          </button>
          <button type='button' onClick={onConfirm}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
