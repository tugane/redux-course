import configureStore from "./store/configureStore";
import { 
    bugAdded,
    bugResolved,
    getUnresolvedBugs,
    bugAssignedToUser, 
    getBugsByUser 
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
const store = configureStore();

store.subscribe(()=>{
    console.log("Projects store changed");
})

store.dispatch(bugAdded({description: "Bug 1"}));
store.dispatch(bugAdded({description: "Bug 2"}));
store.dispatch(bugAdded({description: "Bug 3"}));
store.dispatch(bugResolved({id:1}));

store.dispatch(userAdded({ name: "Tugane" }))
store.dispatch(userAdded({ name: "Ganza" }))
store.dispatch(userAdded({ name: "Gervais" }))

store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }))

const x = getUnresolvedBugs(store.getState())
const y = getUnresolvedBugs(store.getState())
const bugs = getBugsByUser(2)(store.getState())
console.log(bugs);

store.dispatch(projectAdded({ name: "project name" }))
