import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../components/Templates/Layout";
import WaveList from "../components/Waves/WavePage/WaveList";
import Wave from "../components/Waves/WavePage/Wave";
import Toolbar from "../components/Toolbar/Toolbar";
import styles from '../styles/list.module.css';
import { connect } from "react-redux";

const Waves = ({isAdmin, userID}) => {
    const {url_id} = useParams();
    const [id, setID] = useState(url_id);
    const [waves, setWaves] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    document.title = "Waves | OurApp";

    useEffect(() => {
        fetch("/api/waves", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            
            const data_filtered = isAdmin ? data : (data.filter(wave => wave.id_employee === userID))
            
            if(!data_filtered.filter(wave => wave.wave_id === url_id).length > 0){
                setID(data_filtered[0]["wave_id"]);
                if(isAdmin === "true"){
                    console.log("admin");
                    history.push("/waves/" + data[0]["wave_id"]);
                }
                else
                    history.push("/wave/" + data[0]["wave_id"]);
                    console.log("nao admin");
            }

            setWaves(data_filtered);
            setIsLoading(false);
        })
        .catch(console.log);
    },[]);



    return (isLoading ? <Layout></Layout> :
        waves.length > 0  ?( 
        <Layout 
        list={<WaveList wave={waves} setID={setID} />} 
        activeItem={<Wave wave={waves.find(waves => waves.wave_id === id)} />} 
        />) : (
            <div>
                <Toolbar />
                <h1 className={styles.empty}>There are no waves</h1>
            </div>
        )
    )
}

export default connect(({ user }) => ({ isAdmin: user.role, userID: user.id }))(Waves);