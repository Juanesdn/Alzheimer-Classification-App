import { Dialog as MUIDialog, DialogContent } from '@mui/material';
import moment from 'moment';

import { MRIResponse } from '@/types';

import styles from './Dialog.module.css';

type IMainProps = {
  mri?: MRIResponse | null;
  setOpen: (open: boolean) => void;
  open: boolean;
};

const Dialog = ({ mri, setOpen, open }: IMainProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  const getClassification = (classification: string) => {
    switch (classification) {
      case 'MildDemented':
        return 'Demencia leve';
      case 'ModerateDemented':
        return 'NonDemented';
      case 'VeryMildDemented':
        return 'Demencia muy leve';
      case 'NonDemented':
        return 'No hay demencia';
      default:
        return 'No identificado';
    }
  };

  return (
    <MUIDialog open={open} onClose={handleClose}>
      {mri && (
        <>
          <DialogContent>
            <div className={styles.dialog}>
              <div className={styles.dialog__info}>
                <div className={styles.dialog__info__title}>
                  Clasificación:
                  <span>{getClassification(mri.mri!.classification)}</span>
                </div>
                <hr className="mb-3 mr-48 border-slate-400" />
                <div className={styles.dialog__info__date}>
                  {moment(mri.createdAt).format('DD/MM/YYYY')}
                </div>
                <div className={styles.dialog__info__descripcion}>
                  Edad: <span>{mri.mri!.age} años</span>
                </div>
                <div className={styles.dialog__info__descripcion}>
                  Género: <span>{mri.mri!.genre}</span>
                </div>
                <div className={styles.dialog__info__descripcion}>
                  Observaciones: <span>{mri.mri!.observations}</span>
                </div>
              </div>
              <img
                className={styles.dialog__image}
                src={mri.mri!.image}
                alt=""
              />
            </div>
          </DialogContent>
        </>
      )}
    </MUIDialog>
  );
};

export default Dialog;
