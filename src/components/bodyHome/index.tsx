import { useEffect, useState, useContext } from "react";
import Header from "../Header";
import ButtonFooter from "../buttonFooter";
import { ContextDados } from '../../Context/DadosContext';
import { IconButton, Input, InputAdornment, Alert, Button, Dialog } from "@material-ui/core";
import {
    BoxNameEnterprise,
    ContainerHome,
    ContentHome,
    ContentStatus,
    ContainertLupa,
    ContentLupa,
    Status
} from "./styles";


export default function BodyHome() {
    const [enterprises, setEnterprises] = useState<any[]>([]);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const [enterprisesNumber, setEnterprisesNumber] = useState<number>(0)
    const [search, setSearch] = useState<string>("")
    const [deleteEnterprise, setDeleteEnterprise] = useState<string>()
    const [openModalDelete, setOpenModalDelete] = useState(false);

    const {
        setPage, loadDados, DeleteDados, setEditDadosId
    } = useContext<any>(ContextDados);

    function numberEnterprises() {
        setEnterprisesNumber(enterprises.length)
    }

    useEffect(() => {
        numberEnterprises()
    })

    function handleHereNewEnterprise() {
        setPage('newEnterprise');
    }

    function handleHereEditEnterprise() {
        setPage('editEnterprise');
    }

    function handleHome() {
        setPage(true);
    }

    const handleSearch = loadDados.enterprises?.filter((body: any) => {
        return body.nomeEmpreendimento
            .toLowerCase()
            .includes(search.toLocaleLowerCase())
    })

    return (
        <>
            <Header
                title="Empreendimentos"
                button={true}
                IconReturn={false}
                PushButton={handleHereNewEnterprise}
                PushButtonReturn={handleHome}
            />
            <ContainertLupa>
                <ContentLupa>
                    <div>
                        <Input
                            fullWidth
                            id="standard-adornment-password"
                            onChange={(e: any) => {
                                setSearch(e.target.value)
                            }}
                            startAdornment={
                                <InputAdornment position="start" >
                                    <IconButton type="submit" aria-label="search">
                                        <img src="/images/Vector (1).svg" alt="Icone Lupa" />
                                        Buscar
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </div>
                </ContentLupa>
            </ContainertLupa>
            {handleSearch && handleSearch.slice(0, rowsPerPage).map((data: any) => {
                return (
                    <ContainerHome key={data._id}>
                        <ContentHome>
                            {openModalDelete && deleteEnterprise == data._id &&
                                <Alert
                                    severity="error"
                                    action={
                                        <div>
                                            <Button onClick={() => { setOpenModalDelete(false); setDeleteEnterprise("") }} color="inherit" size="small">
                                                Cancelar
                                            </Button>
                                            <Button onClick={() => { DeleteDados(data._id); setOpenModalDelete(false); setDeleteEnterprise("") }} color="inherit" size="small">
                                                Confirmar
                                            </Button>
                                        </div>
                                    }
                                >
                                    Confirma a exclusão do Empreendimento?
                                </Alert>
                            }

                            {deleteEnterprise != data._id &&
                                <div>
                                    <BoxNameEnterprise>
                                        <span>{data.nomeEmpreendimento}</span>

                                    </BoxNameEnterprise>
                                    <p>{data.rua}, {data.numero} - {data.bairro}, {data.estado}</p>
                                </div>
                            }
                            <ContentStatus openModalDelete={openModalDelete}>
                                <div>
                                    <Status>{data.lancamento}</Status>
                                    <Status>{data.residencial}</Status>
                                </div>
                                <div>
                                    <img
                                        src="/images/Vector.svg"
                                        alt="Icone de Lapis"
                                        onClick={() => {
                                            handleHereEditEnterprise();
                                            setEditDadosId(data?._id);
                                        }}
                                    />
                                    <img
                                        onClick={() => {
                                            setOpenModalDelete(true);
                                            setDeleteEnterprise(data?._id)
                                        }}
                                        src="/images/Vector-1.svg"
                                        alt="Icone de Lixeira"
                                    />
                                </div>
                            </ContentStatus>
                        </ContentHome>
                    </ContainerHome>
                )
            })}
            {(enterprisesNumber >= rowsPerPage) && <ButtonFooter description={"Carregar mais"} pushClick={() => setRowsPerPage(rowsPerPage + 5)} />}
        </>
    )
}