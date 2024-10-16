import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

interface ModalContextInterface {
  showModal: (modal: JSX.Element) => void;
  modal?: JSX.Element;
  popModal: () => void;
}

const ModalContext = createContext<ModalContextInterface>(undefined as any);

export const useModals = () => useContext(ModalContext);

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modal, setModal] = useState<JSX.Element | undefined>(undefined);

  const popModal = () => {
    setModal(undefined);
  };

  const showModal = (modal: JSX.Element) => {
    setModal(modal);
  };

  return <ModalContext.Provider value={{ modal, showModal, popModal }}>{children}</ModalContext.Provider>;
};

interface BaseModalProps {
  title: string;
  bodyText: string;
}

interface PromptModalProps extends BaseModalProps {
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}

interface AlertModalProps extends BaseModalProps {
  onAcknowledge?: () => void;
  acknowledgeText?: string;
}

export const PromptModal: FC<PromptModalProps> = ({
  title,
  bodyText,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
}) => {
  const { popModal } = useModals();

  const handleConfirm = () => {
    onConfirm?.();
    popModal();
  };

  const handleCancel = () => {
    onCancel?.();
    popModal();
  };

  return (
    <div className="border-[#444444] bg-[#1e1e1e] w-5/12 rounded-md border-2 p-8">
      <h1 className="font-bold">{title}</h1>
      <p className="mt-4">{bodyText}</p>

      <div className="mt-8 flex flex-row space-x-4">
        <button
          type="button"
          className="border-[#444444] bg-[#444444] text-theme-text hover:border-blue-500 hover:bg-[#1e1e1e] hover:text-theme-highlight flex w-full items-center justify-center rounded-md border-2 px-8 py-2 text-center transition duration-100"
          onClick={handleCancel}
        >
          {cancelText ?? "Cancel"}
        </button>
        <button
          type="button"
          className="border-blue-500 bg-blue-500 text-theme-body hover:bg-[#1e1e1e] hover:text-theme-highlight flex w-full items-center justify-center rounded-md border-2 px-8 py-2 text-center transition duration-100"
          onClick={handleConfirm}
        >
          {confirmText ?? "Confirm"}
        </button>
      </div>
    </div>
  );
};

export const AlertModal: FC<AlertModalProps> = ({ title, bodyText, onAcknowledge, acknowledgeText }) => {
  const { popModal } = useModals();

  const handleAcknowledge = () => {
    onAcknowledge?.();
    popModal();
  };

  return (
    <div className="border-[#444444] bg-[#1e1e1e] w-5/12 rounded-xl border-2 p-8">
      <h1 className="font-bold">{title}</h1>
      <p className="mt-4">{bodyText}</p>
      <div
        className="border-blue-500 bg-blue-500 text-theme-body hover:bg-[#1e1e1e] hover:text-theme-highlight mt-8 flex w-full items-center justify-center rounded-md border-2 px-8 py-2 text-center transition duration-100"
        onClick={handleAcknowledge}
      >
        {acknowledgeText ?? "Okay"}
      </div>
    </div>
  );
};

export const ModalContainer = () => {
  const { modal } = useModals();

  return (
    <div
      className={`fixed inset-0 z-50 transition duration-200 ${modal ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <div className="bg-[#1e1e1e] absolute inset-0 opacity-75" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">{modal}</div>
    </div>
  );
};
