import axios from "axios";

axios.get('https://api.spacexdata.com/v4/crew')
.then((response) => {
console.log(response);
})
.catch((err) => {
    console.log(err);
});


const ComponentTwo =()=> {
    return (
        <p>This is Component Component Two</p>
    )
}
export default ComponentTwo;