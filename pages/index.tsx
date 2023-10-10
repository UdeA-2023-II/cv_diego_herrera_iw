import 'tailwindcss/tailwind.css';

import React from 'react';
import { FaCoffee, FaHome } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import {AiOutlineCalendar } from 'react-icons/ai';
import { MdSyncProblem } from 'react-icons/md';
import { RiBearSmileLine } from 'react-icons/ri';
import { SlOrganization } from 'react-icons/sl';
import { TbBrandSuperhuman } from 'react-icons/tb';
import { MdDeveloperMode } from 'react-icons/md';
import { DiScrum } from 'react-icons/di';
import { PiUserFocus } from 'react-icons/pi';
import { BsGraphUpArrow } from 'react-icons/bs';
import { GiMicroscope } from 'react-icons/gi';
import { MdOutlineLiquor } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';



import { BarPorcentaje } from '@/components/BarPorcentaje';
import { IconosLink } from '@/components/IconosLink';
import { Separador } from '@/components/Separador';
import { InfoPersonal } from '@/components/InfPersonal';
import { Skill } from '@/components/Skill';
import { Descripcion } from '@/components/Descripcion';
import { Educacion } from '@/components/Educacion';
import VentanaModal from '@/components/VentanaModal';
import {Portafolio} from '@/components/Portafolio';



const Hojadevida: React.FC = () => {
  return (
    
    <div className="grid grid-cols-[20%,50%,10%] gap-0 w-full font-sans bg-gray-10">

            <section className="col-start-1 col-span-2">
                <div className='flex flex-wrap gap-10 my-4'>
                    <div className="w-full bg-white border border-solid border-gray-300 mb-0 p-4 rounded-lg shadow-md">
                        <div className="relative inline-block">
                            <img className="w-40 h-40 rounded-full" src='/Diego_Herrera_Face.jpeg' alt="Diego Herrera" />
                            <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 right-0"></div>
                        </div>
                        <div className="text-2xl font-semibold text-gray-700">Diego Alonso Herrera Ramírez</div>
                        <div className="text-base font-normal text-gray-600">Ingeniera de Sistemas</div>
                    </div>
                </div>
                <div className="w-full bg-white border border-solid border-gray-300 mb-0 p-4 rounded-lg shadow-md">
                    <div>
                        <InfoPersonal clave='Edad:' valor='41'/>
                        <InfoPersonal clave='Telefono:' valor='300 265 6316'/>
                        <InfoPersonal clave='Correo:' valor='daherre0@gmail.com'/>
                        <InfoPersonal clave='Dirección:' valor='Marinilla, Antioquia'/>
                        <div className="box-content">
                            <div className="box-title">Estado:</div>
                            <div className="box-value available">Disponible</div>
                        </div>
                        
                    </div>
                </div>    
                <div className="w-full bg-white border border-solid border-gray-300 mb-0 p-4 rounded-lg shadow-md">
                    <div className="box-title">Idiomas</div>
                    <div>
                        <BarPorcentaje clave='Español' valor={90} porcentaje={90} />
                    </div>
                        <BarPorcentaje clave='Ingles' valor={80} porcentaje={80} />
                </div>

                <div className="w-full bg-white border border-solid border-gray-300 mb-0 p-4 rounded-lg shadow-md">
                    <div className="box-title">Lenguajes de programación</div>
                    <div>
                        <BarPorcentaje clave='Python' valor={70} porcentaje={70} />
                        <BarPorcentaje clave='JavaScript' valor={60} porcentaje={60} />
                        <BarPorcentaje clave='TypeScript' valor={60} porcentaje={60} />
                        <BarPorcentaje clave='PHP' valor={40} porcentaje={40} />
                    </div>                    
                </div>
                <div className="w-full bg-white border border-solid border-gray-300 mb-20 p-4 rounded-lg shadow-md">
                    <div className="box-title">Habilidades Extra</div>
                    <Skill icon={TbBrandSuperhuman}  valor='Liderazgo' />
                    <Skill icon={MdSyncProblem}  valor='Resolución de problemas' />
                    <Skill icon={RiBearSmileLine}  valor='Capacidad de escucha' />
                    <Skill icon={AiOutlineCalendar}  valor='Planeación' />
                    <Skill icon={SlOrganization}  valor='Organización' />
                    <Skill icon={BsPeopleFill}  valor='Naturalidad al interactuar con el público' />
                </div>
            </section>
            <section className="col-start-3 col-span-3">
                <div id="centro">
                        <div id="contenedor">
                        <div id="presentacion">
                            <div className="contenido">
                            <div className="texto">
                                <div className="contenedor_titulo ">
                                <div className="nombre">Diego Herrera </div>
                                <span className="titulo">Ingeniería </span>
                                <span className="nombre"> de Sistemas</span>
                                </div >
                        
                                    <Descripcion valor='Soy Ingeniero físico, actualmente cursando octavo nivel de Ingeniería de Sistemas. 
                                                        En este momento me desempeño como desarrollador Full-Stack. Dos años de experiencia con tecnologías como ReactJS, NextJS + VercelJS, FastAPI, Django, PostgreSQL, MongoDB, AWS, Azure, Google Cloud, Linux con distribuciones basadas en Arch y Debian.'/>
                            </div>
                            <div className="botonContratar">
                            <VentanaModal nombre='HIRE ME' valor='Llámame, no te arrepentirás!!!' titulo='APROVECHA!!!' />                               
                            </div>
                            </div>
                            <img src='/Diego_Herrera.jpeg' alt="Diego Herrera" id="imagen" />
                        </div>
                        </div>
                    </div>
                    <div className="centrar">
                        <div className="contenedor_titulo">
                        <div><h3>Mi Conocimiento</h3></div>
                        </div>
                        <div className="contenedor-texto">
                        <Descripcion valor="El conocimiento es la acumulación de información, habilidades y comprensión adquirida a través de la experiencia y la educación. Es la brújula que guía nuestras decisiones, alimenta nuestra curiosidad y nos permite crecer y evolucionar como individuos y sociedad."/>
                        </div>
                    </div>

                    <div id="conocimientos">
                        <div className="grid-container">
                        <Portafolio 
                            icon={MdDeveloperMode}
                            titulo='Desarrollo de software' 
                            valor='Desarrollo Fullstack '
                            type='con' /> 
                         
                            <Portafolio 
                            icon={GiMicroscope}
                            titulo='Investigador' 
                            valor='Desarrollar sistemas, hardware y software, de reconstrucción de objetos tridimensionales.'
                            type='con' /> 

                            
                    </div>
                    <div className="centrar">
                        <div className="contenedor_titulo">
                        <div><h3>Educación</h3></div>
                        </div>
                        <div className="contenedor-texto">
                        <Descripcion valor="La educación debe ayudar a asumir una actitud justa frente a un sufrimiento ineluctable. - Víctor Frankl"/>
                        </div>
                        
                    </div>
                    <div className=" p-20 flex-1 flex flex-col justify-center items-center text-center">
                        <div className="w-full h-1/2 bg-white p-0 m-0  items-center">
                            <Educacion centroEducativo=' Universidad Nacional de Colombia, Sede Medellín' 
                                    rolEducativo='Estudiante' 
                                    fechaEducativa='2001 - 2008' 
                                    titulo='Ingenieria Física' 
                                    valor="Ingeniero Físico con especialización en Óptica Física y experiencia en sistemas de reconstrucción 
                                    tridimensional digital. Ha contribuido al avance en tecnologías ópticas de vanguardia. Como docente universitario, 
                                    he compartido mi experiencia y fomentado la investigación en futuras generaciones."/>
                            <Separador/>
                            <Educacion centroEducativo=' Universidad de Antioquia' 
                                    rolEducativo='Estudiante' 
                                    fechaEducativa='Jun 2018 - Actualmente' 
                                    titulo='Ingenieria de Sistemas' 
                                    valor="Estudiante de Ingeniería de Sistemas con sólidos conocimientos en programación y diseño de soluciones tecnológicas. 
                                    Apasionado por la innovación y en constante búsqueda de nuevos retos y aprendizajes en el campo de la tecnología de la información."/>
                            <Separador/>

                        </div>
                        
                        
                    </div>
                    <div className="centrar">
                        <div className="contenedor_titulo">
                        <div><h3>Experiencia Laboral</h3></div>
                        </div>
                        <div className="contenedor-texto">
                        <Descripcion valor="La experiencia no es lo que te sucede, sino lo que haces con lo que te sucede. — Aldous Huxley"/>
                        </div>
                    </div>
                    <div id="conocimientos">
                        <div className="grid-container">
                        <Portafolio 
                        link='https://github.com/ProyectoIntegradorUdeA-2023-I/angular-tour-of-heroes' 
                        descripcionImagen="Tomada de GitHub" 
                        titulo='Tour Of Heroes' 
                        url='/angular2-tour-of-heroes.jpeg' 
                        valor='CRUD (Crear, Leer, Actualizar, Eliminar)'
                        type='port' /> 
                        

                        <Portafolio 
                        link='https://github.com/ICard-App/icard-front.git' 
                        descripcionImagen="Tomada de GitHub" 
                        titulo='Icard-Front' 
                        url='/icard.jpeg' 
                        valor='Aplicación para la gestión los pedidos de un restaurante '
                        type='port' /> 

                        <Portafolio 
                        link='https://github.com/ICard-App/icard-back.git' 
                        descripcionImagen="Tomada de GitHub" 
                        titulo='Icard-Back' 
                        url='/icard.jpeg' 
                        valor='Aplicación para la gestión los pedidos de un restaurante '
                        type='port' /> 

                        </div>
                    </div>    
                    
                    </div>
            </section>
        <section className="col-start-6 col-span-1">
                <div className="w-full h-full pt-73 pb-131 bg-white flex flex-col justify-start items-center gap-19 inline-flex">
                    <div className="text-2b2b2b text-lg font-inter justify-center font-semibold capitalize leading-22.25 break-words">Links</div>
                    <IconosLink icon={BsFacebook} url='https://www.facebook.com/' />
                    <IconosLink icon={AiFillInstagram} url='https://www.instagram.com/' />
                    <IconosLink icon={AiFillTwitterCircle} url='https://twitter.com/' />
                    <IconosLink icon={AiFillLinkedin} url='https://www.linkedin.com/in/diego-herrera-is-and-if/' />
                    <IconosLink icon={AiFillYoutube} url='https://www.youtube.com/' />
                </div>
        </section>
        </div>
  );
};

export default Hojadevida;