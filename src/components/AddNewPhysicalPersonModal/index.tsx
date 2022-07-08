interface NewPhysicalPersonModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewPhysicalPersonModal({isOpen, onRequestClose}: NewPhysicalPersonModalProps){

    return(
        <div>
            <p>
            modal pessoa fisica
            </p>
        </div>
    )
}