import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';
import MainApp from './pages/mainApp';
import MainProf from './pages/mainProf';
import Rendimento from './pages/rendimento';
// import ListProfs from './pages/listProfs';
import Cadastro from './pages/cadastro';
import Cozinha from './pages/cozinha';
import Quarto from './pages/quarto';
import Banheiro from './pages/banheiro';
import Feedback from './pages/feedback';
import Informa from './pages/informa';
// import Listagem from './pages/listagem';
import Recuperar from './pages/recuperar';
import Relatorio from './pages/relatorio';
import Prevencao from './pages/prevencao';
import Teste from './pages/teste';

export default createStackNavigator({
    Main,
    Cadastro,
    MainApp,    
    MainProf,
    // ListProfs,
    Rendimento,
    Cozinha,
    Quarto,
    Banheiro,
    Feedback,
    Informa,
    // Listagem,
    Recuperar,
    Relatorio,
    Prevencao,
    Teste

}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,

        },
    });