import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface LegalPerson{
    id: number;
    name: string;
    cnpj: string;
    createdAt: string;
}

type LegalPersonInput = Omit<LegalPerson, 'id' | 'createdAt'>; //dá para fazer com pick(mas ele é ao contrário, você adiciona os campos que você quer)

interface LegalPeopleProviderProps{
    children: ReactNode;
}

interface LegalPersonContextData {
    legalPerson: LegalPerson[];
    createLegalPerson: (LegalPerson: LegalPersonInput) => Promise<void>;
}

const LegalPersonContext = createContext<LegalPersonContextData>(
    {} as LegalPersonContextData
);

export function LegalPersonProvider({children} : LegalPeopleProviderProps) {
    const[legalPerson, setLegalPerson] = useState<LegalPerson[]>([]);
    
    useEffect(()=>{
        api.get('mudarRotaPessoaJuridica')
        .then(response => setLegalPerson(response.data.pessoasjuridicas))
    }, []);

    async function createLegalPerson(legalPersonInput: LegalPersonInput){
        const response = await api.post('/mudarPessoaJuridica', {
            ...legalPersonInput,
            createdAt: new Date(),
        });
        const {person} = response.data;

        setLegalPerson([
            ...legalPerson,
            person,
        ]);
    }

    return(
        <LegalPersonContext.Provider value={{legalPerson, createLegalPerson}}>
            {children}
        </LegalPersonContext.Provider>
    );
}

export function useLegalPerson(){
    const context = useContext(LegalPersonContext);

    return context;
}