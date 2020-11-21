import react from 'react';
import initailFirebase from './InitialFirebase';
import CRUD from './CRUD'
function App (){
    initailFirebase();
    return (
<div>
    <CRUD/>
</div>

    );
}
export default App;