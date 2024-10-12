import {
    SeparateButtons,
    StyledButton,
    StyledHeaderButtons,
    StyledHeaderWrapper,
    StyledRegisterButton,
    StyledSelect,
    StyledTitle
} from "./styled";
import {useHistory, useLocation} from 'react-router-dom';
import {useState} from "react";

const Name = () => {
    return null
}


type ModalChoiceT = {
    isOpen?: boolean
}


const ModalChoice = ({isOpen}: ModalChoiceT, isSelected: boolean) => {     //todo "Модели" пропадает при выборе модели

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const model = queryParams.get('model');

    const [selectedOption, setSelectedOption] = useState(model ? {value: model, label: model} : null);
    const history = useHistory();
    const {pathname} = useLocation()
    const handleChange = (selectedOption: any) => {
        history?.push(`/models?model=${selectedOption.value}`);
        setSelectedOption(selectedOption);
    };
    const customStyles = {
        option: (provided: any, state: { isFocused: any; }) => ({
            ...provided,
            backgroundColor: 'transparent', // Set background color when focused
            color: state.isFocused ? 'inherit' : 'inherit', // Set text color when focused
        })
    };


    const options = [
        {value: 'HWESS', label: 'HWESS'},
        {value: 'GARCH', label: 'GARCH'}
    ]

    return <StyledSelect isSelected={pathname === '/models'} isSearchable={false} value={selectedOption}
                         onChange={handleChange} className="react-select-container"
                         classNamePrefix="react-select" styles={customStyles} options={options} placeholder={'Модели'}/>
}


export const Header = () => {
    const history = useHistory();
    const {pathname} = useLocation()
    const moveTo = (to: string) => {
        history?.push(to);
        if (pathname !== to) {
            window.location.reload();
        }
    };

    const onScrollToBottom = () => {
        if (pathname !== '/') {
            moveTo('/#links')
        }

        setTimeout(() => {
            const elem = document.getElementById('links')
            elem?.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
        }, 100)
    }

    return <StyledHeaderWrapper>
        <StyledTitle onClick={() => moveTo('/')}>AEPHILE</StyledTitle>
        <StyledHeaderButtons>
            <StyledButton
                isSelected={pathname === '/'}
                onClick={() => moveTo('/')}
            >О нас</StyledButton>
            <ModalChoice/>
            <StyledButton onClick={onScrollToBottom}>Контакты</StyledButton>
            <SeparateButtons>
            </SeparateButtons>
        </StyledHeaderButtons>
    </StyledHeaderWrapper>
}
//            <StyledButton isSelected={pathname === '/models'}
//                           onClick={() => handleClick('/models')}>Модели</StyledButton>
//             <ModalChoice/>