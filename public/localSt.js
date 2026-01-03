let getMessageId = () => {
    let storedMesIdStr = localStorage.getItem('messageIds');
    if(storedMesIdStr) {
        let storedMesId = JSON.parse(storedMesIdStr);
        return storedMesId;
    }
    return[];
}

let setMessageId = (messageIds) => {
    let messageIdsStr = JSON.stringify(messageIds);
    localStorage.setItem('messageIds',messageIdsStr);
}
let addMessageId = id => {
    let messageIds = getMessageId();
    messageIds.push(id);
    setMessageId(messageIds)
}

export {getMessageId,addMessageId}
