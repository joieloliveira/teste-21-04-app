import React, { createContext, useState, useEffect } from 'react';

import api from '../config/configApi';

interface DadosProviderProps {
    children: React.ReactNode;
}

interface DadosContextType {
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    page: string,
    setPage: React.Dispatch<React.SetStateAction<string>>,
    editDados: object,
    setEditDados: React.Dispatch<React.SetStateAction<object>>,
    loadDados: object,
    setLoadDados: React.Dispatch<React.SetStateAction<object>>,
    PostDados: any,
    DeleteDados: any,
    PutDados: any,
    editDadosId: string,
    setEditDadosId: React.Dispatch<React.SetStateAction<string>>,
}

const ContextDados = createContext<DadosContextType | undefined>(undefined);

function DadosProvider({ children }: DadosProviderProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<string>('home');
    const [editDados, setEditDados] = useState<object>([]);
    const [loadDados, setLoadDados] = useState<object>([]);
    const [editDadosId, setEditDadosId] = useState<string>('');

    const PostDados = async () => {
        const response = await api.post("enterprise/", editDados)
        //console.log(response);
        if (response.data.error) {
            //console.log(response.data.error);
        } else {
            GetDados();
            setEditDados([])
        }
    }

    const PutDados = async (dado: any) => {
        const response = await api.put("enterprise/" + editDadosId, editDados)
        if (response.data.error) {
            //console.log(response.data.error);
        } else {
            GetDados();
            setEditDados([])
        }
    }

    const DeleteDados = async (dado: any) => {
        const response = await api.delete("enterprise/" + dado)
        if (response.data.error) {
            //console.log(response.data.error);
        } else {
            GetDados();
        }
    }

    const GetDados = async () => {
        setLoading(true)
        const response = await api.get("enterprise")
        if (response.data.error) {
            //console.log(response.data.error);
        } else {
            setLoadDados(response.data)
        }
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }

    useEffect(() => {
        GetDados()
    }, []);

    const contextValue: DadosContextType = {
        loading,
        setLoading,
        page,
        setPage,
        editDados,
        setEditDados,
        loadDados,
        setLoadDados,
        PostDados,
        DeleteDados,
        PutDados,
        editDadosId, 
        setEditDadosId,
    };

    if (loading) {
        return (<p>LOADING...</p>)
    }

    // Retorne o provedor de contexto com o valor fornecido
    return (
        <ContextDados.Provider value={contextValue}>
            {children}
        </ContextDados.Provider>
    );
}

export { ContextDados, DadosProvider };