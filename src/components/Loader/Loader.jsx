import {ThreeDots } from 'react-loader-spinner';
import {
    LoaderContainer,
} from './Loader.styled';
function Loader( ) {
    return (
        <LoaderContainer>
            <ThreeDots
                color='#2c786c'
                height="50"
                width="50"
                radius="6"
            />            
        </LoaderContainer>         
    )
}

export default Loader;