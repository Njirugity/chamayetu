
const name = 'Brian';
function Message(){
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello user</h1>
}

export default Message;