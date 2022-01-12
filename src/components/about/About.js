import React, {useState} from 'react';

import vatcheImg from '../../assets/images/vatche.png';
import armenImg from '../../assets/images/armen.png';
import victorImg from '../../assets/images/victor.png';
import lilitImg from '../../assets/images/lilit.png';
import TeamMember from './TeamMember';

const About = () => {
    document.title = "About | Digitec Media | Digitec Innovations | Digitec Intl";
    document.body.className = 'body-about';

    const [memberText, setMemberText] = useState('');

    let arr = [
        {
            id: 1,
            name: 'Vatche Kavlakian',
            position: 'Chairman',
            image: vatcheImg,
            text: `With over 25 years of experience, computer-engineering background, 
            and as a Yale Business School alumnus, the drive towards growth and 
            innovation flows in Vatche Kavlakian’s very being. As the Chairman, 
            he believes that all stakeholders — clients, employees, and management — 
            play an essential role in the business’s success. He strives to make global 
            growth trends and a revolutionary approach to software development the main 
            focus of Digitec, bringing success to all the parties involved.`
        },
        {
            id: 2,
            name: 'Armen Edoyan',
            position: 'General Manager',
            image: armenImg,
            text: `Being a proactive, attentive, and results-oriented manager, Armen is 
            the person you would want to work with. As the General Manager of Digitec, 
            Armen Edoyan strives to make decisions in the best interest of both clients 
            and the company’s employees. He believes that excellent solutions are the 
            ones that radiate simplicity, functionality, and sophistication. Armen’s Ph.D. 
            background in Arts, years of managerial experience, and devotion to excellence 
            have been the driving force behind Digitec’s vision and professionalism since the beginning.`
        },
        {
            id: 3,
            name: 'Victor Danielyan',
            position: 'Head of Software Development Department',
            image: victorImg,
            text: `The brain behind all the innovative and creative solutions developed by the engineering 
            team at Digitec, Victor knows the ins and outs of the modern software development market. 
            With a Ph.D. in Information Technologies from the State Engineering University and many years 
            of experience in the IT sector, he brings his knowledge and expertise to the table, making 
            sure the team works in a coherent union. Always on a look for the best solution, he helps the 
            company to stay on top of the trends, inspiring the team to push boundaries in developing 
            cutting-edge technologies.`
        },
        {
            id: 4,
            name: 'Lilit Solomonyan',
            position: 'Accounting Manager',
            image: lilitImg,
            text: `Holding a Master’s degree in Money and Finance from the Yerevan State University and 
            multiple accounting qualifications, Lilit is a highly skilled and devoted professional. She 
            has been with Digitec since the start, playing an integral role in the companies founding 
            and development. Constantly striving for self-improvement, she has helped the company to 
            enhance its operations and make better financial decisions. Since the beginning, she has seen 
            a great potential in the Digitec's pursuit of innovation and worked hard to make sure it can realize it.`
        },
    ]

    const itemHover = props => {
        setMemberText(arr.find(item => item.id === props).text)
    }
    return (
        <div className='page-about'>
            <div className='page-about-wrapper'>
                <h1>About us</h1>
                <div className='article-container'>
                    <div className='article article-innovations'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202.14 12">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path
    d="M35.74,5.88a.23.23,0,0,0-.21-.21,44.62,44.62,0,0,0-5,0,.11.11,0,0,0-.11.1c0,.85.1,1.77.11,2.61a.13.13,0,0,1-.13.13h-.47c-.84,0-1.53-.24-1.53-2.49s.57-2.48,1.38-2.48H35a.15.15,0,0,0,.13-.1L35.69.74a.13.13,0,0,0-.12-.15A51.77,51.77,0,0,0,30.34.28c-5.07,0-8.25,1.35-8.25,5.78,0,4.71,3.15,5.7,8.19,5.7,1,0,1.72,0,2.45-.08.94,0,1.87-.12,2.82-.22a.22.22,0,0,0,.2-.2A50.82,50.82,0,0,0,35.74,5.88Z"/>
                                    <path
    d="M78.45.27a22.09,22.09,0,0,1,3.36.3.1.1,0,0,1,.08.11l-.61,2.79a.08.08,0,0,1-.1.07l-2.72-.11c-1.11,0-2,.38-2,2.63s.78,2.68,2,2.63l2.72-.11a.1.1,0,0,1,.1.07l.58,2.81a.1.1,0,0,1-.08.12,29.25,29.25,0,0,1-3.39.19c-5.1,0-8.29-1-8.29-5.71C70.1,1.62,73.32.27,78.45.27Z"/>
                                    <path
    d="M42.4,11.72a48.82,48.82,0,0,1-5.41,0,.33.33,0,0,1-.3-.3,92.65,92.65,0,0,1,0-10.8.32.32,0,0,1,.3-.3,48.82,48.82,0,0,1,5.41,0,.33.33,0,0,1,.31.3,92.65,92.65,0,0,1,0,10.8A.34.34,0,0,1,42.4,11.72Z"/>
                                    <path
    d="M20.87,11.71a48.64,48.64,0,0,1-5.4,0,.34.34,0,0,1-.31-.3,92.31,92.31,0,0,1,0-10.78.33.33,0,0,1,.31-.3,48.64,48.64,0,0,1,5.4,0,.32.32,0,0,1,.3.3,92.31,92.31,0,0,1,0,10.78A.33.33,0,0,1,20.87,11.71Z"/>
                                    <path
                                        d="M6,.28C4.6.28,2.88.37,1.19.51Q.82.53.44.57A.3.3,0,0,0,.15.86a89.86,89.86,0,0,0,0,10.38.28.28,0,0,0,.25.29H.51c2.05.11,3.91.22,5.54.22,5,0,8.2-1,8.2-5.7C14.25,1.63,11.06.28,6,.28Zm.6,8.27H6.21a.13.13,0,0,1-.14-.13C6,7.68,6,6.93,6,6.07s0-1.63.05-2.37a.15.15,0,0,1,.14-.13h.38C7.4,3.57,8,3.82,8,6.06S7.4,8.55,6.59,8.55Z"></path>
                                    <path
                                        d="M57.06.7a.26.26,0,0,0-.23-.24,107.77,107.77,0,0,0-13,0,.28.28,0,0,0-.24.24q-.06,1.34,0,2.67a.27.27,0,0,0,.24.24c1.12.07,2.23.12,3.35.15q-.11,3.81.12,7.64a.32.32,0,0,0,.3.29,44.55,44.55,0,0,0,5.42,0,.33.33,0,0,0,.3-.29q.22-3.83.12-7.64c1.11,0,2.23-.08,3.35-.15a.25.25,0,0,0,.23-.24A23.78,23.78,0,0,0,57.06.7Z"></path>
                                    <path
                                        d="M69.92,9.18a.28.28,0,0,0-.27-.27c-1.82-.06-3.63-.08-5.44-.07,0,0-.09,0-.08-.08,0-.36,0-.83,0-1.19a.08.08,0,0,1,.08-.08c1.24,0,2.49,0,3.74-.06a.28.28,0,0,0,.27-.26c0-.72,0-1.37,0-2.09A.28.28,0,0,0,68,4.82c-1.25,0-2.49-.06-3.74-.06a.09.09,0,0,1-.08-.08c0-.52,0-.87,0-1.32a.08.08,0,0,1,.08-.09c1.81,0,3.62,0,5.44-.07a.28.28,0,0,0,.27-.27,22.44,22.44,0,0,0,0-2.32.29.29,0,0,0-.27-.28c-2.37-.07-4.74-.08-7.1,0-1.42-.05-2.83,0-4.25,0a.31.31,0,0,0-.3.3,93.33,93.33,0,0,0,0,10.71.41.41,0,0,0,.38.37c1.4.08,2.79.1,4.18,0q3.54,0,7.1-.06a.28.28,0,0,0,.27-.27A21.11,21.11,0,0,0,69.92,9.18Z"></path>
                                    <path d="M86.75.29H88.1V11.71H86.75Z"/>
                                    <path
                                        d="M91.71.29h1.71L100,9.77h0V.29h1.35V11.71H99.71L93.1,2.23h0v9.48H91.71Z"></path>
                                    <path
                                        d="M105,.29h1.71l6.62,9.48h0V.29h1.35V11.71H113l-6.61-9.48h0v9.48H105Z"></path>
                                    <path
                                        d="M123.69,12a6.17,6.17,0,0,1-2.39-.45,5.72,5.72,0,0,1-1.89-1.25,5.59,5.59,0,0,1-1.24-1.9,6.33,6.33,0,0,1-.45-2.4,6.33,6.33,0,0,1,.45-2.4,5.59,5.59,0,0,1,1.24-1.9A5.72,5.72,0,0,1,121.3.45,6.17,6.17,0,0,1,123.69,0a6.25,6.25,0,0,1,2.4.45A5.78,5.78,0,0,1,128,1.7a5.61,5.61,0,0,1,1.25,1.9,6.52,6.52,0,0,1,.44,2.4,6.52,6.52,0,0,1-.44,2.4A5.61,5.61,0,0,1,128,10.3a5.78,5.78,0,0,1-1.88,1.25A6.25,6.25,0,0,1,123.69,12Zm0-1.26A4.34,4.34,0,0,0,127,9.35a4.62,4.62,0,0,0,.93-1.5A5.15,5.15,0,0,0,128.21,6a5.15,5.15,0,0,0-.33-1.85,4.62,4.62,0,0,0-.93-1.5,4.58,4.58,0,0,0-5.09-1,4.45,4.45,0,0,0-1.43,1,4.77,4.77,0,0,0-.92,1.5,5.2,5.2,0,0,0,0,3.7,4.77,4.77,0,0,0,.92,1.5,4.45,4.45,0,0,0,1.43,1A4.37,4.37,0,0,0,123.69,10.74Z"></path>
                                    <path d="M130.74.29h1.53l3.52,9.39h0L139.45.29h1.44l-4.47,11.42h-1.31Z"></path>
                                    <path
                                        d="M145.79.29h1.28l4.85,11.42h-1.58L149.18,8.9h-5.71l-1.18,2.81h-1.53ZM146.41,2h0L144,7.65h4.66Z"></path>
                                    <path d="M160.55,1.55h-3.78V11.71h-1.35V1.55h-3.78V.29h8.91Z"></path>
                                    <path d="M162.86.29h1.35V11.71h-1.35Z"></path>
                                    <path
                                        d="M173.17,12a6.25,6.25,0,0,1-2.4-.45,5.78,5.78,0,0,1-1.88-1.25,5.61,5.61,0,0,1-1.25-1.9A6.52,6.52,0,0,1,167.2,6a6.52,6.52,0,0,1,.44-2.4,5.61,5.61,0,0,1,1.25-1.9A5.78,5.78,0,0,1,170.77.45a6.25,6.25,0,0,1,2.4-.45,6.17,6.17,0,0,1,2.39.45,5.72,5.72,0,0,1,1.89,1.25,5.59,5.59,0,0,1,1.24,1.9,6.33,6.33,0,0,1,.45,2.4,6.33,6.33,0,0,1-.45,2.4,5.59,5.59,0,0,1-1.24,1.9,5.72,5.72,0,0,1-1.89,1.25A6.17,6.17,0,0,1,173.17,12Zm0-1.26a4.34,4.34,0,0,0,3.26-1.39,4.77,4.77,0,0,0,.92-1.5A5.15,5.15,0,0,0,177.68,6a5.15,5.15,0,0,0-.33-1.85,4.77,4.77,0,0,0-.92-1.5,4.34,4.34,0,0,0-3.26-1.39,4.34,4.34,0,0,0-3.26,1.39,4.62,4.62,0,0,0-.93,1.5A5.15,5.15,0,0,0,168.65,6,5.15,5.15,0,0,0,169,7.85a4.62,4.62,0,0,0,.93,1.5,4.34,4.34,0,0,0,3.26,1.39Z"></path>
                                    <path
                                        d="M182.11.29h1.71l6.61,9.48h0V.29h1.36V11.71h-1.71l-6.62-9.48h0v9.48h-1.35Z"></path>
                                    <path
                                        d="M200.84,2.31a2,2,0,0,0-.91-.8,2.8,2.8,0,0,0-1.17-.25,3.74,3.74,0,0,0-.89.11,2.75,2.75,0,0,0-.78.34,1.62,1.62,0,0,0-.56.6,1.7,1.7,0,0,0-.21.87,1.79,1.79,0,0,0,.12.68,1.36,1.36,0,0,0,.4.54,3,3,0,0,0,.74.46c.31.13.69.27,1.14.41s.87.29,1.29.46a4.1,4.1,0,0,1,1.09.61,2.76,2.76,0,0,1,.76.93,3,3,0,0,1,.28,1.39,3,3,0,0,1-.34,1.48,3.12,3.12,0,0,1-.89,1,4.1,4.1,0,0,1-1.28.61,5.83,5.83,0,0,1-1.5.2,5.55,5.55,0,0,1-1-.09,4.84,4.84,0,0,1-1-.27,4.14,4.14,0,0,1-.87-.49,3,3,0,0,1-.69-.73l1.16-.95a2.42,2.42,0,0,0,1,.95,3.24,3.24,0,0,0,1.41.32,3,3,0,0,0,.88-.13,2.41,2.41,0,0,0,.79-.38,2.06,2.06,0,0,0,.59-.62,1.58,1.58,0,0,0,.22-.85,1.77,1.77,0,0,0-.18-.86,1.45,1.45,0,0,0-.55-.58,4.06,4.06,0,0,0-.93-.43l-1.32-.45A7.82,7.82,0,0,1,196.58,6a3.4,3.4,0,0,1-.9-.61,2.53,2.53,0,0,1-.59-.87,3,3,0,0,1-.22-1.22,3.12,3.12,0,0,1,.32-1.44,3.28,3.28,0,0,1,.87-1A4.12,4.12,0,0,1,197.3.21,5.05,5.05,0,0,1,198.76,0a5,5,0,0,1,1.76.3,3.44,3.44,0,0,1,1.43,1Z"></path>
                                </g>
                            </g>
                        </svg>
                        <p>
                            Digitec Innovations provides a full spectrum of custom-tailored
                            technological and creative solutions for corporations and startups
                            meeting diverse user needs.
                            <br/>
                            Our team of dedicated professionals is committed to delivering high-quality
                            customer-centered software solutions. Covering all stages of the software
                            development lifecycle: from prototyping to development, quality assurance,
                            and post-project maintenance, we build cost-effective solutions for any business problems.
                        </p>
                    </div>
                    <div className='article article-media'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145.36 12">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" data-name="Layer 1">
                                    <path
                                        d="M37.12,5.85a.23.23,0,0,0-.21-.21,45.8,45.8,0,0,0-5.24,0c-.05,0-.11,0-.11.11,0,.88.1,1.84.11,2.72a.13.13,0,0,1-.14.13h-.48c-.87,0-1.59-.25-1.59-2.59s.59-2.58,1.43-2.58h5.45a.13.13,0,0,0,.13-.1l.6-2.84A.13.13,0,0,0,37,.36,53,53,0,0,0,31.52,0c-5.27,0-8.58,1.4-8.58,6,0,4.9,3.28,5.92,8.52,5.92,1,0,1.79,0,2.54-.07,1-.05,2-.13,2.93-.24a.23.23,0,0,0,.21-.21A52.13,52.13,0,0,0,37.12,5.85Z"></path>
                                    <path
                                        d="M81.49,0A22.42,22.42,0,0,1,85,.34a.1.1,0,0,1,.08.12l-.63,2.9a.1.1,0,0,1-.1.07L81.5,3.31c-1.15,0-2.09.4-2.09,2.73s.81,2.79,2.09,2.74l2.83-.12a.1.1,0,0,1,.1.08l.6,2.92a.09.09,0,0,1-.08.11,29.43,29.43,0,0,1-3.52.21c-5.3,0-8.61-1-8.61-5.94C72.82,1.43,76.16,0,81.49,0Z"></path>
                                    <path
                                        d="M44.05,11.92a48.07,48.07,0,0,1-5.63,0,.34.34,0,0,1-.31-.31,95.45,95.45,0,0,1,0-11.22.34.34,0,0,1,.31-.31,48.07,48.07,0,0,1,5.63,0,.34.34,0,0,1,.31.31,95.45,95.45,0,0,1,0,11.22A.34.34,0,0,1,44.05,11.92Z"></path>
                                    <path
                                        d="M21.68,11.91a47.9,47.9,0,0,1-5.62,0,.34.34,0,0,1-.31-.31,95.11,95.11,0,0,1,0-11.2.34.34,0,0,1,.31-.31,47.9,47.9,0,0,1,5.62,0A.34.34,0,0,1,22,.4a95.11,95.11,0,0,1,0,11.2A.34.34,0,0,1,21.68,11.91Z"></path>
                                    <path
                                        d="M6.22,0C4.78,0,3,.13,1.24.27L.46.34a.31.31,0,0,0-.3.3,92.31,92.31,0,0,0,0,10.78.3.3,0,0,0,.26.31H.53c2.12.12,4.06.23,5.76.23,5.23,0,8.51-1,8.51-5.92C14.8,1.44,11.49,0,6.22,0Zm.62,8.59H6.45a.15.15,0,0,1-.15-.14c0-.76,0-1.54,0-2.44s0-1.69.06-2.45a.14.14,0,0,1,.14-.14h.39c.85,0,1.44.26,1.44,2.58S7.69,8.63,6.84,8.63Z"></path>
                                    <path
                                        d="M59.28.48A.28.28,0,0,0,59,.23a111.94,111.94,0,0,0-13.46,0,.28.28,0,0,0-.25.25c0,.92,0,1.85,0,2.77a.28.28,0,0,0,.25.25q1.74.1,3.48.15c-.07,2.65,0,5.29.13,7.94a.31.31,0,0,0,.31.3,47.9,47.9,0,0,0,5.62,0,.33.33,0,0,0,.32-.3c.15-2.65.19-5.29.12-7.94q1.74,0,3.48-.15a.28.28,0,0,0,.25-.25C59.32,2.33,59.32,1.4,59.28.48Z"></path>
                                    <path
                                        d="M72.63,9.28A.29.29,0,0,0,72.35,9c-1.89-.06-3.77-.08-5.66-.07a.09.09,0,0,1-.08-.09c0-.37,0-.85,0-1.23a.08.08,0,0,1,.08-.08c1.29,0,2.59,0,3.89-.06a.3.3,0,0,0,.27-.27,19.82,19.82,0,0,0,0-2.18.3.3,0,0,0-.27-.27c-1.3,0-2.59,0-3.89-.06a.09.09,0,0,1-.08-.08c0-.54,0-.91,0-1.37a.09.09,0,0,1,.08-.09c1.89,0,3.77,0,5.66-.07a.3.3,0,0,0,.28-.29c0-.8,0-1.61,0-2.41A.29.29,0,0,0,72.35.1C69.88,0,67.43,0,65,0,63.5,0,62,0,60.56.09a.35.35,0,0,0-.32.31,98.39,98.39,0,0,0,0,11.13.43.43,0,0,0,.39.39c1.45.08,2.9.09,4.34,0,2.46,0,4.91,0,7.38-.06a.29.29,0,0,0,.28-.28A22.83,22.83,0,0,0,72.63,9.28Z"></path>
                                    <path
                                        d="M90.11.05H92.2l4,9.3h0l4-9.3h2V11.91H101V2h0l-4.26,10h-.85L91.55,2h0v10H90.11Z"></path>
                                    <path d="M106.12.05h7.45V1.36h-6V5.08h5.64v1.3h-5.64V10.6h6.35v1.31h-7.76Z"/>
                                    <path
                                        d="M116.52.05h4.56a6.16,6.16,0,0,1,1.24.13,6.6,6.6,0,0,1,1.3.43,6.46,6.46,0,0,1,1.24.76,5.36,5.36,0,0,1,1,1.13A5.27,5.27,0,0,1,126.62,4a6.52,6.52,0,0,1,.27,2,6.47,6.47,0,0,1-.27,1.95,5.33,5.33,0,0,1-1.76,2.66,6.14,6.14,0,0,1-2.54,1.19,6.16,6.16,0,0,1-1.24.13h-4.56Zm1.41,10.55h2.68a6.35,6.35,0,0,0,1.89-.26A4.11,4.11,0,0,0,124,9.51a4.06,4.06,0,0,0,1-1.43,5.52,5.52,0,0,0,.36-2.1A5.47,5.47,0,0,0,125,3.89a4.1,4.1,0,0,0-1-1.44,4.11,4.11,0,0,0-1.51-.83,6.69,6.69,0,0,0-1.89-.26h-2.68Z"></path>
                                    <path d="M130,.05h1.41V11.91H130Z"></path>
                                    <path
                                        d="M139,.05h1.33l5,11.86h-1.64L142.51,9h-5.93l-1.22,2.91h-1.6Zm.64,1.81h0l-2.47,5.83H142Z"></path>
                                </g>
                            </g>
                        </svg>
                        <p>
                            The creative team of Digitec Media develops content for all kinds of online
                            and offline activities. We produce visual solutions with high attention to details.
                            <br/>
                            Moreover, we will plan and implement your digital marketing strategy, covering every
                            stage of inbound and outbound activities, with constant reporting and growth.
                            And, we provide premedia, prepress support solutions for your offline media,
                            such as design adaptation and color management. Find all media solutions in one company.
                        </p>
                    </div>
                </div>
                <div className='team-container'>
                    <div className='team-image-box'>
                        {
                            arr.map((item, key) => {
                                return (
                                    <TeamMember
                                        key={key}
                                        onMouseOver={itemHover}
                                        data={item}
                                    />
                                )
                            })
                        }
                    </div>

                    <div className='team-text-box'>
                        <p className='member-text'>
                            {memberText}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
