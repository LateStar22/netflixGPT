import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import myimage from "../images/header-image.png"
import feature_1 from "../images/feature-1.png"
import feature_2 from "../images/feature-2.png"
import feature_3 from "../images/feature-3.png"
import feature_4 from "../images/feature-4.png"

const Landingpage = () => {
    return (
        <>
            <div className='bg-cover bg-center' style={{ backgroundImage: `url(${require("../images/header-image.png")})` }}>
                <div className='bg-black bg-opacity-60'>
                    <Header />
                    <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white">
                        <h1 className='text-6xl font-bold mb-3'>Unlimited movies, TV shows and more</h1>
                        <h1 className='text-3xl font-medium mb-3'>Watch Anymore, Cancel Anytime</h1>
                        <h1 className='text-2xl'>Ready to watch? Enter your email to create or restart your membership</h1>
                        <div className='mt-4 flex flex-row justify-center items-center h-12 text-black'>
                            <input className="mr-3 h-full border-2 border-green-500 outline-none w-96 rounded-sm bg-transparent text-white" type="email" placeholder='email address' />
                            <Link to="/login" className='h-full'>
                                <button className="px-8 py-2 h-full bg-red-500 text-white rounded hover:bg-red-600" type="submit">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between text-white bg-black h-[400px] items-center pr-[150px] pl-[150px] border-b-8 border-gray-600'>
                <div className='max-w-[50%]'>
                    <h2 className='text-5xl mb-3 font-bold'>Enjoy on your TV.</h2>
                    <p className='text-2xl'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className='p-4 ml-2 max-w-[50%]'>
                    <img className="h-[300px] w-[100%]" src={feature_1} alt="" />
                </div>
            </div>
            <div className='flex flex-row justify-between text-white bg-black h-[400px] items-center pr-[150px] pl-[150px] border-b-8 border-gray-600'>
                <div>
                    <img className="h-[300px] w-[100%]" src={feature_2} alt="" />
                </div>
                <div className='max-w-[50%]'>
                    <h2 className='text-5xl mb-3 font-bold'>Download your shows to watch offline.</h2>
                    <p className='text-2xl'>Save your favourites easily and always have something to watch.</p>
                </div>
            </div>
            <div className='flex flex-row justify-between text-white bg-black h-[400px] items-center pr-[150px] pl-[150px] border-b-8 border-gray-600'>
                <div className='max-w-[50%]'>
                    <h2 className='text-5xl mb-3 font-bold'>Watch everywhere.</h2>
                    <p className='text-2xl'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className='p-4 ml-2 max-w-[50%]'>
                    <img className="h-[300px] w-[100%]" src={feature_3} alt="" />
                </div>
            </div>
            <div className='flex flex-row justify-between text-white bg-black h-[400px] items-center pr-[150px] pl-[150px] border-b-8 border-gray-600'>
                <div className='p-4 ml-2 max-w-[50%]'>
                    <img className="h-[300px] w-[100%]" src={feature_4} alt="" />
                </div>
                <div className='max-w-[50%]'>
                    <h2 className='text-5xl mb-3 font-bold'>Create profiles for children.</h2>
                    <p className='text-2xl'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
            </div>
            <div className='flex flex-col items-center bg-black text-white'>
                <h1 className='text-5xl font-black mb-7 mt-14'>Frequently Asked Questions</h1>
                <ul className='w-4/5'>
                    <li className='bg-gray-500 mb-4 px-6 min-h-20 cursor-pointer'>
                        <input className="appearance-none peer" type="radio" name="accordion" id="first" />
                        <label for="first" className='text-3xl before:content-["+"] before:relative before:cursor-pointer before:right-3 peer-checked:before:transform  peer-checked:before:rotate-45'>What is Netflix?</label>
                        <div className="h-0 overflow-hidden transition-all ease-in-out duration-1000  peer-checked:h-28">
                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br></br>
                                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                        </div>
                    </li>
                    <li className='bg-gray-500 mb-4 px-6 min-h-20 cursor-pointer'>
                        <input className="flex appearance-none peer" type="radio" name="accordion" id="second" />
                        <label for="second" className='text-3xl before:content-["+"] before:relative before:cursor-pointer before:right-3 peer-checked:before:transform  peer-checked:before:rotate-45'>How much does Netflix cost?</label>
                        <div className="h-0 overflow-hidden transition-all ease-in-out duration-1000  peer-checked:h-28">
                            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
                        </div>
                    </li>
                    <li className='bg-gray-500 mb-4 px-6 min-h-20 cursor-pointer'>
                        <input className="flex appearance-none peer" type="radio" name="accordion" id="third" />
                        <label for="third" className='text-3xl before:content-["+"] before:relative before:cursor-pointer before:right-3 peer-checked:before:transform  peer-checked:before:rotate-45'>Where can I watch?</label>
                        <div className="h-0 overflow-hidden transition-all ease-in-out duration-1000  peer-checked:h-28">
                            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br></br>
                                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                        </div>
                    </li>
                    <li className='bg-gray-500 mb-4 px-6 min-h-20 cursor-pointer'>
                        <input className="flex appearance-none peer" type="radio" name="accordion" id="fourth" />
                        <label for="fourth" className='text-3xl before:content-["+"] before:relative before:cursor-pointer before:right-3 peer-checked:before:transform  peer-checked:before:rotate-45'>How do I cancel?</label>
                        <div className="h-0 overflow-hidden transition-all ease-in-out duration-1000  peer-checked:h-28">
                            <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                        </div>
                    </li>
                    <li className='bg-gray-500 mb-4 px-6 min-h-20 cursor-pointer'>
                        <input className="flex appearance-none peer" type="radio" name="accordion" id="fifth" />
                        <label for="fifth" className='text-3xl before:content-["+"] before:relative before:cursor-pointer before:right-3 peer-checked:before:transform  peer-checked:before:rotate-45'>What can I watch on Netflix?</label>
                        <div className="h-0 overflow-hidden transition-all ease-in-out duration-1000  peer-checked:h-28">
                            <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                        </div>
                    </li>
                    <li className='bg-gray-500 mb-4 px-6 min-h-20 cursor-pointer'>
                        <input className="flex appearance-none peer" type="radio" name="accordion" id="sixth" />
                        <label for="sixth" className='text-3xl before:content-["+"] before:relative before:cursor-pointer before:right-3 peer-checked:before:transform  peer-checked:before:rotate-45'>Is Netflix good for Kids?</label>
                        <div className="h-0 overflow-hidden transition-all ease-in-out duration-1000  peer-checked:h-28">
                            <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br></br>
                                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center text-white bg-black pt-11 border-b-8 border-gray-600 pb-24">
                <h1 className='text-2xl'>Ready to watch? Enter your email to create or restart your membership</h1>
                <div className='mt-4 flex flex-row justify-center items-center h-12 text-black'>
                    <input className="mr-3 h-full border-2 border-green-500 outline-none w-96 rounded-sm bg-transparent text-white" type="email" placeholder='email address' />
                    <Link to="/login" className='h-full'>
                        <button className="px-8 py-2 h-full bg-red-500 text-white rounded hover:bg-red-600" type="submit">Get Started</button>
                    </Link>
                </div>
            </div>
            <div className='text-white bg-black px-[108px]'>
                <h2>Questions? Call 000-000-000-0000</h2>
                <div className='flex flex-row'>
                    <div className='basis-1/4 grow mt-6 min-h-fit'>
                        <a className='block'>FAQ</a>
                        <a className='block'>Investor Relations</a>
                        <a className='block'>Privacy</a>
                        <a className='block'>Speed Test</a>
                    </div>
                    <div className='basis-1/4 grow  mt-6 min-h-fit'>
                        <a className='block'>Help Centre</a>
                        <a className='block'>Jobs</a>
                        <a className='block'>Cookie Preferences</a>
                        <a className='block'>Legal Notices</a>
                    </div>
                    <div className='basis-1/4 grow  mt-6 min-h-fit'>
                        <a className='block'>Account</a>
                        <a className='block'>Ways to Watch</a>
                        <a className='block'>Corporate Information</a>
                        <a className='block'>Only on Netflix</a>
                    </div>
                    <div className='basis-1/4 grow  mt-6 min-h-fit'>
                        <a className='block'>Media Centre</a>
                        <a className='block'>Terms of Use</a>
                        <a className='block'>Contact Us</a>
                    </div>
                </div>
                <button type='submit' className='bg-transparent w-32 mt-3 mr-3 h-[50px] border-solid border-white border-2 mb-5'> English</button>
                <p class="copyright-text">Netflix India</p>
            </div>
        </>
    )
}

export default Landingpage;