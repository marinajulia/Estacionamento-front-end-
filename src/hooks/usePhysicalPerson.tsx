import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface PhysicalPerson{
    id: number;
    name: string;
    rg: string;
    cpf: string;
    createdAt: string;
}

type PhysicalPersonInput = Omit<PhysicalPerson, 'id' | 'createdAt'>; //dá para fazer com pick(mas ele é ao contrário, você adiciona os campos que você quer)

interface PhysisicalPeopleProviderProps{
    children: ReactNode;
}

interface PhysicalPersonContextData {
    physicalPerson: PhysicalPerson[];
    createPhysicalPerson: (PhysicalPerson: PhysicalPersonInput) => Promise<void>;
}

const PhysicalPersonContext = createContext<PhysicalPersonContextData>(
    {} as PhysicalPersonContextData
);

export function PhysicalPersonProvider({children} : PhysisicalPeopleProviderProps) {
    const[physicalPerson, setPhysicalPerson] = useState<PhysicalPerson[]>([]);
    
    useEffect(()=>{
        api.get('mudarRotaPessoaFisica')
        .then(response => setPhysicalPerson(response.data.pessoasFisicas))
    }, []);

    async function createPhysicalPerson(physicalPersonInput: PhysicalPersonInput){
        const response = await api.post('/mudarPessoaFisica', {
            ...physicalPersonInput,
            createdAt: new Date(),
        });
        const {person} = response.data;

        setPhysicalPerson([
            ...physicalPerson,
            person,
        ]);
    }

    return(
        <PhysicalPersonContext.Provider value={{physicalPerson, createPhysicalPerson}}>
            {children}
        </PhysicalPersonContext.Provider>
    );
}

export function usePhysicalPerson(){
    const context = useContext(PhysicalPersonContext);

    return context;
}