import { useContext } from "react";
import Head from "next/head";
import BodyHome from "../components/bodyHome";
import NewEnterprise from "../components/newEnterprise";
import EditEnterprise from "../components/editEnterprise";
import { ContextDados } from '../Context/DadosContext';
import { DadosProvider } from '../Context/DadosContext';

const Home: React.FC = () => {   

    const {
        page
    } = useContext<any>(ContextDados);

    return (
        <>
            <Head>
                <title>ChallengJob</title>
            </Head>

            <main>
                {page === "home" && <BodyHome/>}
                {page === "newEnterprise" && <NewEnterprise/>}
                {page === "editEnterprise" && <EditEnterprise/>}
            </main>
        </>
    )
}

const HomeWithDadosProvider: React.FC = () => {
    return (
        <DadosProvider>
            <Home />
        </DadosProvider>
    );
}

export default HomeWithDadosProvider;
