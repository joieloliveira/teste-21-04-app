import {
    BoxRetur,
    HeaderContainerAll,
    BoxAdd
} from "./styleHeader";

interface HeaderProps {
    title: string,
    button: Boolean,
    IconReturn: Boolean,
    PushButton: () => void,
    PushButtonReturn: () => void
}


const Header: React.FC<HeaderProps> = ({
    title,
    button,
    IconReturn,
    PushButton,
    PushButtonReturn
}) => {

    return (
        <HeaderContainerAll>
            {IconReturn &&
                <BoxRetur>
                    <img onClick={PushButtonReturn} src="/images/Return.svg" alt="Icone Retornar" />
                </BoxRetur>
            }
            <BoxAdd return={false}>
                <h5>{title}</h5>
                {button && <button onClick={PushButton}>Adicionar +</button>}
            </BoxAdd>
        </HeaderContainerAll >
    )
}
export default Header;