import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Header from "../Header";
import ButtonFooter from "../buttonFooter";
import { ContextDados } from '../../Context/DadosContext';
import {
    InformationBox, BoxInformation
} from "./styles";
import { SelectChangeEvent, FormControl, InputLabel, MenuItem, Select, TextField, Box } from "@material-ui/core";

export default function EditEnterprise() {

    const {
        setPage, editDados, setEditDados, PutDados, editDadosId, loadDados
    } = useContext<any>(ContextDados);

    const [cepEndereco, setCepEndereco] = useState<object>([]);

    const CEP = async () => {
        try {
            await axios.get(`https://viacep.com.br/ws/${editDados?.cep}/json/`).then((response) => {
                if (response.data.erro) {
                    //console.log(response.data)
                } else {
                    setEditDados({
                        ...editDados,
                        bairro: response.data?.bairro,
                        cep: response.data?.cep,
                        cidade: response.data?.localidade,
                        rua: response.data?.logradouro,
                        estado: response.data?.uf,
                    })
                }
            });
        } catch (error) {
            //console.log(error);
        }

    }

    function handleHome() {
        setPage("home");
    }

    const ValueInput = (e: any) => setEditDados({ ...editDados, [e.target.name]: e.target.value });

    function handleHereNewEnterprise() {
        setPage('newEnterprise');
    }

    return (
        <>
            <Header
                title="Cadastro de empreendimento"
                button={false}
                IconReturn={true}
                PushButton={handleHereNewEnterprise}
                PushButtonReturn={handleHome}
            />
            <InformationBox>
                {loadDados?.enterprises && loadDados.enterprises?.map((data: any) => (
                    editDadosId === data._id && 
                    <BoxInformation key={data._id}>
                        <span>Informações</span>
                        <div>
                            <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Lançamento</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={editDados?.lancamento}
                                    name="lancamento"
                                    onChange={ValueInput}
                                    label={data?.lancamento ? data?.lancamento : editDados?.lancamento}
                                >
                                    <MenuItem value="">
                                        <em></em>
                                    </MenuItem>
                                    <MenuItem value={"lancamento"}>Lançamento</MenuItem>
                                    <MenuItem value={"Em breve"}>Breve lançamento</MenuItem>
                                    <MenuItem value={"Em obras"}>Em obras</MenuItem>
                                    <MenuItem value={"pronto"}>Pronto pra morar</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" variant="standard" name="nomeEmpreendimento" onChange={ValueInput}
                                    label={editDados?.nomeEmpreendimento ? editDados?.nomeEmpreendimento : data?.nomeEmpreendimento} />
                            </Box>
                        </div>
                        <div>
                            <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Residencial</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={editDados?.residencial}
                                    name="residencial"
                                    onChange={ValueInput}
                                    label={editDados?.residencial ? editDados?.residencial : data.residencial}
                                >
                                    <MenuItem value="">
                                        <em></em>
                                    </MenuItem>
                                    <MenuItem value={"residencial"}>Residencial</MenuItem>
                                    <MenuItem value={"comercial"}>Comercial</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" variant="standard" name="cep" onChange={ValueInput} onBlur={CEP}
                                    label={editDados?.cep ? editDados?.cep : data?.cep} />
                            </Box>
                        </div>
                        <div>
                            <p style={{ marginTop: 22 }}>{editDados?.rua ? editDados?.rua : data?.rua}</p>
                            <p>{editDados?.bairro ? editDados?.bairro : data?.bairro}</p>
                            <p>{editDados?.cidade ? editDados?.cidade : data?.cidade}</p>
                            <p>{editDados?.estado ? editDados?.estado : data?.estado}</p>

                        </div>
                        <div>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField id="standard-basic" variant="standard" name="numero" onChange={ValueInput}
                                    label={editDados?.numero ? editDados?.numero : data?.numero} />
                            </Box>
                        </div>
                    </BoxInformation>
                ))}
                <ButtonFooter description={"Editar"} pushClick={PutDados} />
            </InformationBox>
        </>
    )
}