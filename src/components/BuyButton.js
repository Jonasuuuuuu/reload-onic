import React,{useState} from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
function BuyButton(props) {
    const [userid, setUserid] = useState("27845(22001)")
    const [agentid, setAgentid] = useState("12345")
    const [paychannel, setPaychannel] = useState("ceb_online")
    let price = "9.5"
    let onicreferenceno="diamond_cebphp_10"
        //const signature = CryptoJS.HmacSHA256(agentid+price+userid,'d29LbTZhc0EzbUFuQjdjazQ5Vm4wRkxrMEZVa000RmFuTFkyckpReEtlTT0=').toString()
             
    const dec2hex =(dec)=>{
        return dec.toString(16).padStart(2, "0")
    }
    const generateId=(len) =>{
        var arr = new Uint8Array((len || 40) / 2)
        window.crypto.getRandomValues(arr)
        return Array.from(arr, dec2hex).join('')
    }
    
    const GetToken =(prodprice,productid)=>{
        price=prodprice
        onicreferenceno="onc-rld-"+ generateId(20)
        const signature = CryptoJS.HmacSHA256(userid+prodprice+agentid,'TUVWamdZdHhSY2JTV3JzNVdIaGZaSDMwczQyRlBzV2pYdktkanhhb1Mvbz0=').toString()
        axios.post('http://182.253.10.203:8005/dev/query', {
        'userid':userid,
        'price':prodprice,
        'agentid':agentid,
        'productid':productid,
        'subpaychannel':paychannel,
        'signature':signature,}).then((response)=>{ 
            if(response.data.code === 1){
                console.log(price)
                console.log(onicreferenceno)
                payment(response.data.message.token)
             }
            else{console.log("fail")}
        }).catch((error)=>{console.log(error)})
    }

    const payment=(token)=>{
        const signature = CryptoJS.HmacSHA256(userid+onicreferenceno+token,'TUVWamdZdHhSY2JTV3JzNVdIaGZaSDMwczQyRlBzV2pYdktkanhhb1Mvbz0=').toString()
        axios.post('http://182.253.10.203:8005/dev/payment', {
        'userid':userid,
        'price':price,
        'agentid':agentid,
        'referencenumber':onicreferenceno,
        'token':token,
        'subpaychannel':paychannel,
        'signature':signature,}).then((response)=>{ 
            if(response.date.code=='1'){
               console.log("pass")
             }
            else{console.log("fail")}
        }).catch((error)=>{console.log("error")})
    }
    return (
        <div>
            <button className="buy-button" onClick={()=>GetToken("9.5","diamond_cebphp_10")}>test</button>
        </div>
    )
}

export default BuyButton
