import { usePhysicalPerson } from "../../hooks/usePhysicalPerson";

interface NewPhysicalPersonModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewPhysicalPersonModal({isOpen, onRequestClose}: NewPhysicalPersonModalProps){
    const {createPhysicalPerson} = usePhysicalPerson();

    return(
        <div>
            <p>
            modal pessoa fisica
            </p>
        </div>
    )
}