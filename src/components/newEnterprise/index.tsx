import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Header from "../Header";
import ButtonFooter from "../buttonFooter";
import { ContextDados } from '../../Context/DadosContext';
import {
    InformationBox, BoxInformation
} from "./styles";
import { SelectChangeEvent, FormControl, InputLabel, MenuItem, Select, TextField, Box } from "@material-ui/core";

export default function NewEnterprise() {

    const {
        setPage, editDados, setEditDados, PostDados
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
                <BoxInformation>
                    <span>Informações</span>
                    <div>
                        <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Lançamento</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={editDados.lancamento ? editDados.lancamento : ""}
                                name="lancamento"
                                onChange={ValueInput}
                                label="Selection"
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
                            <TextField id="standard-basic" label="nomeEmpreendimento" variant="standard" name="nomeEmpreendimento" onChange={ValueInput} />
                        </Box>
                    </div>
                    <div>
                        <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Residencial</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={editDados.residencial ? editDados.residencial : ""}
                                name="residencial"
                                onChange={ValueInput}
                                label="Residencial"
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
                            <TextField id="standard-basic" label="CEP" variant="standard" name="cep" onChange={ValueInput} onBlur={CEP} />
                        </Box>
                    </div>
                    <div>
                        <p style={{ marginTop: 22 }}>{editDados.rua}</p>
                        <p>{editDados.bairro}</p>
                        <p>{editDados.cidade}</p>
                        <p>{editDados.estado}</p>

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
                            <TextField id="standard-basic" label="Número" variant="standard" name="numero" onChange={ValueInput} />
                        </Box>
                    </div>
                </BoxInformation>
                <ButtonFooter description={"Cadastrar"} pushClick={PostDados}/>
            </InformationBox>
        </>
    )
}