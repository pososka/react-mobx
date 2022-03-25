import React, { useState } from 'react';
import { Button } from '@ff/ui-kit';

import styles from './Modal.module.scss';

type PostItemCardProps = {
  title: string;
  buttonText?: string;
};

const Modal: React.FC<PostItemCardProps> = ({
  title,
  buttonText = 'Открыть',
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)} type="primary">
        {buttonText}
      </Button>

      {isOpen && (
        <>
          <div role="dialog" className={styles.component}>
            <div className={styles.modalContent}>
              <h4>{title}</h4>
              {children}
            </div>
            <div className={styles.modalFooter}>
              <Button onClick={() => setIsOpen(false)} type="primary">
                Закрыть
              </Button>
            </div>
          </div>

          <div className={styles.modalOverlay} />
        </>
      )}
    </>
  );
};

export default Modal;
