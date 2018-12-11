import React from 'react';


const saveSubscription = async (deviceId,witness) =>{
    try {
        await fetch("http://api.esteem.ws:8080/api/wdevices", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                deviceid: deviceId,
                witness: witness,
            }),
        }).then((response)=>response.json())
            .catch((error)=>alert("error on subscription",error));
    } catch (e) {
        alert(e)
    }
    //return $http.post("http://api.esteem.ws:8080/api/wdevices",{deviceid:deviceid,witness:witness})
} ;
function getSubscription(deviceId){
    return fetch("http://api.esteem.ws:8080/api/wdevices/"+deviceId)
        .then((response)=> response.json())
        .then((responseJson) => {
            let i;
            let subscribedWitnesses = [];
            for (i = 0; i < responseJson.length; i++) {
                subscribedWitnesses[i] = responseJson[i].witness;
            }
            return subscribedWitnesses;
        })
        .catch((error)=> {
            alert(error);
        })
    //return $http.get("http://api.esteem.ws:8080/api/wdevices/"+deviceid)
}
const updateSubscription=(deviceId,witness,del)=>{
    if(!del){
        return $http.put("http://api.esteem.ws:8080/api/wdevices",{deviceid:deviceId,witness:witness})
    }else {
        return $http.put("http://api.esteem.ws:8080/api/wdevices",{deviceid:deviceId,witness:witness,delete:true})
    }
};
const updateParticipation = async (deviceId,status)=>{
    try {
        await fetch("http://api.esteem.ws:8080/api/wdevicesp", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                deviceid: deviceId,
                participation: status,
            }),
        }).then((response)=>response.json())
            .catch((error)=>alert("Error on updating participation",error));
    } catch (e) {
        alert('Error on updating participation',e)
    }

    //return $http.post("http://api.esteem.ws:8080/api/wdevicesp",{deviceid:deviceId,participation:status})
};
const getParticipation = async (deviceId)=>{
    let response = await fetch("http://api.esteem.ws:8080/api/wdevicesp/"+deviceId);
   // return $http.get("http://api.esteem.ws:8080/api/wdevicesp/"+deviceId)
};
const deleteSubscription = async (deviceId,witness)=>{
    try {
        await fetch("http://api.esteem.ws:8080/api/wdevices/"+deviceId+"/"+witness, {
            method: 'DELETE',
    }).then((response)=>response.json())
        .catch((error)=>alert("error on delete subscription",error));
} catch (e) {
    alert(e)
}
    //return $http.delete("http://api.esteem.ws:8080/api/wdevices/"+deviceId+"/"+witness)
};

export {saveSubscription,getSubscription,updateParticipation,updateSubscription,getParticipation,deleteSubscription} ;