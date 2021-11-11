import React,{useState} from 'react'
import '../SectionII.css';
import Gcashlogo from '../images/GcashLogo.png';
import PaymayaLogo from '../images/PayMayaLogo.png';
import DebitLogo from '../images/DebitcardLogo.png';

function SectionIIB() {
    const [step, setStep] = useState(1)
    const [userId, setUserId] = useState("")
    const [zoneId, setZoneId] = useState("")
    const [email, setEmail] = useState("")
    const [payChannel, setPayChannel] = useState("")
    const [productId, setProductId] = useState("")
    const [grandTotal, setGrandTotal] = useState(0.0)
    const [total, setTotal] = useState(0.0)
    const [payMethod, setPayMethod] = useState("")
    

    const setPaymentChannel=(channel)=>{
        if(payChannel === ""){
            document.getElementById(channel).classList.remove('inactive')
            document.getElementById(channel).classList.add('active')
            setPayChannel(channel)
            setGrandTotal(0.0)
            setTotal(0.0)
            if(productId !== ""){
                document.getElementById(productId).classList.remove('active')
                document.getElementById(productId).classList.add('inactive')
                setProductId("")
            }
        }else{
            document.getElementById(payChannel).classList.remove('active')
            document.getElementById(payChannel).classList.add('inactive')
            document.getElementById(channel).classList.remove('inactive')
            document.getElementById(channel).classList.add('active')
            setPayChannel(channel)
            setGrandTotal(0.0)
            setTotal(0.0)
            if(productId !== ""){
                document.getElementById(productId).classList.remove('active')
                document.getElementById(productId).classList.add('inactive')
                setProductId("")
            }
        }
        

    }  
    const setAmmount=(prodId,offAmount,onAmount)=>{
        if(payChannel === "ceb_online"){
            setGrandTotal(onAmount)
            setTotal(onAmount)
        }else if(payChannel === "ceb_offline"){
            setGrandTotal(offAmount)
            setTotal(offAmount)
        }
        else{
            setGrandTotal(offAmount)
            setTotal(offAmount)
        }
        if(productId === ""){
            document.getElementById(prodId).classList.remove('inactive')
            document.getElementById(prodId).classList.add('active')
            setProductId(prodId)
        }
        else{
            document.getElementById(productId).classList.add('inactive')
            document.getElementById(productId).classList.remove('active')
            document.getElementById(prodId).classList.remove('inactive')
            document.getElementById(prodId).classList.add('active')
            setProductId(prodId)
        }
    }   
    return (
        <div className="main">
            <div className="step-container">
                <div className="step-divider">
                    <p className="step-number">1</p><p className="step-title">User Information</p>
                </div>
                <div className="step-body">
                    <div className="user-info-section">
                        <p className="section-title">Enter User Information</p>
                        <div className="uid-section">
                            <input id="GameUserID" onChange={(e)=>{setUserId(e.target.value)}} className="input-text-box" placeholder="User ID" type="text"/>
                            <p className="warning-text">User ID Invalid</p>
                        </div>
                        <div className="zid-section">
                            <input id="GameZoneID" onChange={(e)=>{setZoneId(e.target.value)}} className="input-text-box" placeholder="Zone ID" type="text"/>
                            <p className="warning-text">Zone ID Invalid</p>
                        </div>
                    </div>
                    <div className="contact-info-section">
                        <p className="section-title">Enter Email Address</p>
                        <p className="section-subtext">A reciept will be sent to your email upon successful purchase</p>
                        <input id="Email" className="input-text-box" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email Address"  type="text"/>
                    </div>
                </div>
                
            </div>
            <div className="step-container">
                <div className="step-divider">
                    <p className="step-number">2</p><p className="step-title">Select Pay Channel</p>
                </div>
                <div className="step-body">
                    <button id="ceb_online" className="channel-button inactive" onClick={()=>setPaymentChannel("ceb_online")}>ceb online</button>
                    <button id="ceb_offline" className="channel-button inactive" onClick={()=>setPaymentChannel("ceb_offline")}>ceb offline</button>
                </div>
            </div>
            
            <div className="step-container">
                <div className="step-divider">
                    <p className="step-number">3</p><p className="step-title">Select Amount(1)</p>
                </div>
                <div className="step-body">
                    <button id="diamond_cebphp_10" className="ammount-button inactive" onClick={()=>setAmmount("diamond_cebphp_10",10,9.5)}>11 Diamonds</button>
                    <button id="diamond_cebphp_20" className="ammount-button inactive" onClick={()=>setAmmount("diamond_cebphp_20",20,19)}>22 Diamonds</button>
                    <button id="diamond_cebphp_50" className="ammount-button inactive" onClick={()=>setAmmount("diamond_cebphp_50",50,47.5)}>56 Diamonds</button>
                    <button id="diamond_cebphp_100" className="ammount-button inactive" onClick={()=>setAmmount("diamond_cebphp_100",100,95)}>112 Diamonds</button>
                    <button id="diamond_cebphp_200" className="ammount-button inactive" onClick={()=>setAmmount("diamond_cebphp_200",200,190)}>223 Diamonds</button>
                    <button id="diamond_cebphp_300" className="ammount-button inactive" onClick={()=>setAmmount("diamond_cebphp_300",300,285)}>336 Diamonds</button>
                    <button id="diamond_cebphp_500" className="ammount-button inactive" onClick={()=>setAmmount("diamond_cebphp_500",500,475)}>570 Diamonds</button>
                    <button id="diamond_cebphp_1000" className="ammount-button inactive" onClick={()=>setAmmount("diamond_cebphp_1000",1000,950)}>1163 Diamonds</button>
                    <button id="diamond_cebphp_2000" className="ammount-button inactive" onClick={()=>setAmmount("diamond_cebphp_2000",2000,1900)}>2398 Diamonds</button>
                    <button id="diamond_cebphp_5000" className="ammount-button inactive" onClick={()=>setAmmount("diamond_cebphp_5000",5000,4750)}>6042 Diamonds</button>
                </div>
            </div>
            <div className="step-container">
                <div className="step-divider">
                    <p className="step-number">4</p><p className="step-title">Select Payment Method</p>
                </div>
                <div className="step-body">
                    <button className="payment-button inactive"><img src={Gcashlogo} alt="pay-logo"/></button>
                    <button className="payment-button inactive"><img src={PaymayaLogo} alt="pay-logo"/></button>
                    <button className="payment-button inactive"><img src={DebitLogo} alt="pay-logo"/></button>
                </div>
            </div>
            <div className="step-container">
                <div className="step-divider">
                    <p className="step-number">5</p><p className="step-title">Pay</p>
                </div>
                <div className="step-body center-j">
                    <input id="PromoCode" className="input-text-box" placeholder="Enter Coupon Code" type="text"/>
                    <button className="onic-button fix-200px">Apply</button>
                </div>
                <div>
                    <div>
                        <p className="section-price-title">Total</p>   
                        <p className="section-price">PHP {total}</p>
                    </div>
                    <button className="onic-button f-width">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default SectionIIB
