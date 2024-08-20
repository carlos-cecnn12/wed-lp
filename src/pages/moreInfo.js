import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

//Components
import ScrollForMore from "../components/scrollForMore";
//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const MoreInfo = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
              <div className='location'>
                <span>Yucatán, Mérida</span>
              </div>
              <div className='mua'>Febrero 9, 2025</div>
            </motion.div>
            
            <motion.div className='model'>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>C</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>R</motion.span>
                <motion.span variants={letter}>L</motion.span>
                <motion.span variants={letter}>O</motion.span>
                <motion.span variants={letter}>S</motion.span>
              </motion.span>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>&</motion.span>
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}>M</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>R</motion.span>
                <motion.span variants={letter}>I</motion.span>
                <motion.span variants={letter}>A</motion.span>
                <motion.span variants={letter}>N</motion.span>
                <motion.span variants={letter}>A</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: window.innerWidth > 600 ? 0 : 40,
                  width: "100%",
                  height: window.innerWidth > 600 ? 500 : 300,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={require("../img/org.jpeg")}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 900 ? -165 : -15,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
        </div>
        <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              ¡Queremos invitarte!
            </h2>
            <p>
            Con el corazón lleno de gratitud y alegría, queremos invitarte a ser parte de nuestra aventura. 
            Nuestro objetivo es tener una pequeña boda privada rodeados de nuestros seres más queridos, ¡esperamos nos puedas acomapañar!
            </p>
          </div>
        </div>
      </div>
      <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: window.innerWidth > 600 ? 0 : 0,
                  width: "100%",
                  height: window.innerWidth > 600 ? 500 : 300,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={require("../img/Merida.jpeg")}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 900 ? -165 : 70,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
          <p style={{width:window.innerWidth > 900 ? 800 : 200}}>
            Celebraremos nuestra boda en la <a href="https://maps.app.goo.gl/k4d2zSkNkoS1Vz9g9">Hacienda Ya-axká</a> el día <b>9 de febrero del 2025</b>, compartiremos más detalles de la logística más cerca al evento. El día <b>9 de enero de 2025</b> es la fecha límite para confirmar tu asistencia.
            </p>
            <h2 className='title2' >
              Lugar <br></br>y <br></br>Hora
            </h2>
            
          </div>
        </div>
      </div>
      <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: window.innerWidth > 600 ? 0 : 40,
                  width: "100%",
                  height: window.innerWidth > 600 ? 500 : 300,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={require("../img/brooklyn.JPG")}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 900 ? -250 : -15,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className='detailed-information2'>
        <div className='container2'>
          <div className='row'>
            <h2 className='title'>
            Nos gustaría<br></br> festejar<br></br> contigo
            </h2>
            <p>
            Estamos conscientes que el acompañarnos en este día ya representará un gasto para ustedes por lo que contar con su presencia es lo que más felices nos haría. No obstante, si deseas hacernos un detalle adicional, 
            una contribución para nuestra luna de miel sería muy apreciada y además puede ser <b>deducible de impuestos para ti</b>. Estaremos encantados de emitir una factura por honorarios médicos si así lo prefieres. Más abajo adjuntamos la información de la cuenta:
            <div className='cuenta'><br></br>BBVA Empresas<br></br>Mariana Saldivar Perea<br></br>Cuenta: 0485300010<br></br>Clabe: 012180004853000103</div>
            </p>
          </div>
        </div>
      </div>
      <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: window.innerWidth > 600 ? 0 : 40,
                  width: "100%",
                  height: window.innerWidth > 600 ? 500 : 300,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={require("../img/IMAG0170.jpeg")}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 900 ? -165 : -15,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <p>
              A lo largo de nuestras visitas a Mérida hemos conocido lugares que nos han encantado y nos gustaría compartirlos contigo. Si tienes la oportunidad de quedarte un poco más o buscas opciones de hospedaje, aquí encontrarás una lista con <a href="https://docs.google.com/document/d/1GZaWNwW-O5vnV50RZq1IWgr23FR7cp5cz6gPkpa-Vvk/edit?usp=sharing">nuestras recomendaciones</a>
            </p>
            <h2 className='title2' >
              Algunos<br></br> lugares que<br></br> hemos visitado
            </h2>
          </div>
        </div>
      </div>
      <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: window.innerWidth > 600 ? 0 : 40,
                  width: "100%",
                  height: window.innerWidth > 600 ? 500 : 300,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={require("../img/DSC00060.JPG")}
                    alt='an image'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 900 ? -235 : -15,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className='detailed-information2'>
        <div className='container2'>
          <div className='row'>
          
            <h2 className='title' >
              FAQ
            </h2>
            <ul>
            <li><b>¿Puedo pedir más boletos?</b><br></br>No, como lo mencionamos anteriormente nuestro mayor interés es compartir este día unicamente con nuestros seres más queridos y cercanos.</li>
            <li><b>¿Puedo transferir mi boleto a otra persona?</b><br></br>No, nos encantaría que nos acompañarás pero en caso de no poder ese lugar se perderá.</li>
            <li><b>¿Tengo que llevar algo/mi propio alcohol?</b><br></br>No, nosotros pondremos botellas de Gin, Tequila y Rum. Eres bienvenido de llevar alguna otra botella que sea de tu antojo.</li>
            <li><b>¿Habrá niños?</b><br></br>No, todos nuestros invitados son adultos por lo que agradecemos tu cooperación para mantenerlo así, esto también aplica para los "perrhijos".</li>
            <li><b>¿Habrá estacionamiento?</b><br></br>Sí, la hacienda cuenta con su propio estacionamiento en caso que quieras llevar carro.</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      
      
    </motion.div>
  );
};

export default MoreInfo;