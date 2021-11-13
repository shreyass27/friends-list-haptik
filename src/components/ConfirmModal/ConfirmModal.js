import classes from './ConfirmModal.module.css';

const ConfirmModal = function ({
    show,
    onConfirm, onCancel,
    title = 'Confirm you action',
    closeTitle = 'Close',
    confirmTitle = 'Confirm',
}) {
    return show ? <>
        <div className={classes.container}>
            <div className={classes.confirmationText}>{title}</div>
            <div className={classes.buttonContainer}>
                <div>
                    {(typeof onConfirm === 'function') &&
                        <button className={classes.confirmationButton}
                            onClick={onConfirm}>
                            {confirmTitle}
                        </button>}
                </div>
                <div>
                    <button className={classes.cancelButton}
                        onClick={onCancel}>
                        {closeTitle}
                    </button>
                </div>
            </div>
        </div>
        <div className={classes.confirmModal}
            onClick={onCancel} />
    </> : null;
};

export default ConfirmModal;