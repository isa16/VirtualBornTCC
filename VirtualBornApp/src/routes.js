import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';
import MainProf from './pages/mainProf';
import ListFeed from './pages/listFeed';
import Cadastro from './pages/cadastro';
import Cozinha from './pages/cozinha';
import Feedback from './pages/feedback';
import Informa from './pages/informa';
import ListRela from './pages/listRela';
import Recuperar from './pages/recuperar';
import Relatorio from './pages/relatorio';
import Prevencao from './pages/prevencao';
import Alarme from './pages/alarme';

export default createStackNavigator({
    Main,
    Cadastro,   
    MainProf,
    ListFeed,
    Cozinha,
    Feedback,
    Informa,
    ListRela,
    Recuperar,
    Relatorio,
    Prevencao,
    Alarme,
    

}, {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,

        },
    });