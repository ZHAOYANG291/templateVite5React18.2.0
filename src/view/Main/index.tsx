// import React from "react"

import { useState } from "react";
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import styles from './index.module.scss'
import AsideMenu from '@/components/Public/AsideMenu';

const Main: React.FC = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>这是main组件</div>
                <div className={styles.contentContainer}>
                <div className={styles.AsideLeft}>
                <AsideMenu/> 
                </div>
                <div className={styles.content}>
                <Outlet />
                </div>
                </div>
            
                         
            </div>
        </>
    )
}

export default Main