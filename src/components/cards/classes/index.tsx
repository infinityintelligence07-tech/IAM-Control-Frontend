import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';


export const Frame6:NextPage = () => {
  	return (
    		<div className={styles.groupParent}>
      			<div className={styles.frameWrapper}>
        				<div className={styles.frameParent}>
          					<div className={styles.frameGroup}>
            						<div className={styles.frameContainer}>
              							<div className={styles.wrapper}>
                								<div className={styles.div}>05 à 07/09/2025</div>
              							</div>
            						</div>
            						<div className={styles.frameDiv}>
              							<div className={styles.balnerioCamboriScWrapper}>
                								<div className={styles.balnerioCambori}>Balneário Camboriú | SC</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.pnl17Parent}>
            						<div className={styles.pnl17}>PNL - 17</div>
            						<div className={styles.programaoNeurolingusticaWrapper}>
              							<div className={styles.programaoNeurolingustica}>Programação Neurolinguística</div>
            						</div>
          					</div>
          					<div className={styles.frameParent1}>
            						<div className={styles.frameWrapper1}>
              							<div className={styles.statusParent}>
                								<div className={styles.programaoNeurolingustica}>Status</div>
                								<div className={styles.inscriesAbertas}>Inscrições abertas</div>
              							</div>
            						</div>
            						<div className={styles.frameWrapper2}>
              							<div className={styles.capacidadeParent}>
                								<div className={styles.programaoNeurolingustica}>Capacidade</div>
                								<div className={styles.inscriesAbertas}>300</div>
              							</div>
            						</div>
            						<div className={styles.rectangleParent}>
              							<div className={styles.groupChild} />
              							<div className={styles.groupItem} />
              							<div className={styles.groupInner} />
              							<div className={styles.frameWrapper3}>
                								<div className={styles.frameParent2}>
                  									<div className={styles.confirmadosParent}>
                    										<div className={styles.confirmados}>Confirmados</div>
                    										<div className={styles.div2}>120</div>
                  									</div>
                  									<div className={styles.inscritosParent}>
                    										<div className={styles.inscritos}>Inscritos</div>
                    										<div className={styles.div3}>160</div>
                  									</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.frameWrapper4}>
              							<div className={styles.bitcoinIconsconfirmations6Parent}>
                								<Image className={styles.bitcoinIconsconfirmations6} width={19.3} height={19.3} sizes="100vw" alt="" src="bitcoin-icons:confirmations-6-filled.svg" />
                								<div className={styles.expectativaReal}>Expectativa real</div>
                								<div className={styles.div}>84</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Frame6;
