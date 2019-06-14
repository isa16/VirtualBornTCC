import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';
import MainApp from './pages/mainApp';
import MainProf from './pages/mainProf';
import Rendimento from './pages/rendimento';
import ListFeed from './pages/listFeed';
import Cadastro from './pages/cadastro';
import Cozinha from './pages/cozinha';
import Feedback from './pages/feedback';
import Informa from './pages/informa';
import ListRela from './pages/listRela';
import Recuperar from './pages/recuperar';
import Relatorio from './pages/relatorio';
import Prevencao from './pages/prevencao';
import Teste from './pages/teste';
import Alarme from './pages/alarme'

export default createStackNavigator({
    Main,
    Cadastro,
    MainApp,    
    MainProf,
    ListFeed,
    Rendimento,
    Cozinha,
    Feedback,
    Informa,
    ListRela,
    Recuperar,
    Relatorio,
    Prevencao,
    Teste,
    Alarme,

}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,

        },
    });