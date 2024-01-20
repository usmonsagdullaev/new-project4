import React from "react";
import chevron_left from "../src/img/chevron-left.png"
import logo2 from "../src/img/logo2.png"
import logo from "../src/img/logo.png"
import img from "../src/img/img.png"
import tort1 from "../src/img/tort1.png"
import tort2 from "../src/img/tort2.png"
import tort3 from "../src/img/tort3.png"
import tort4 from "../src/img/tort4.png"
import tort5 from "../src/img/tort5.png"
import tort6 from "../src/img/tort6.png"
import tort7 from "../src/img/tort7.png"
import tort8 from "../src/img/tort8.png"
import tort9 from "../src/img/tort9.png"
import tort10 from "../src/img/tort10.png"
import tort11 from "../src/img/tort11.png"
import tort12 from "../src/img/tort12.png"
import tort13 from "../src/img/tort13.png"
import tort14 from "../src/img/tort14.png"
import tort15 from "../src/img/tort15.png"
import tort16 from "../src/img/tort16.png"
import tort17 from "../src/img/tort17.png"
import tort18 from "../src/img/tort18.png"
import tort19 from "../src/img/tort19.png"
import tort20 from "../src/img/tort20.png"
import tort21 from "../src/img/tort21.png"
import tort22 from "../src/img/tort22.png"
import tort23 from "../src/img/tort23.png"
import tort24 from "../src/img/tort24.png"
import tort25 from "../src/img/tort25.png"
import tort26 from "../src/img/tort26.png"
import tort27 from "../src/img/tort27.png"
import tort28 from "../src/img/tort28.png"
import tort29 from "../src/img/tort29.png"
import tort30 from "../src/img/tort30.png"
import tort31 from "../src/img/tort31.png"
import tort32 from "../src/img/tort32.png"
import map from "../src/img/Mapsicle Map.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from "react";

function Vanilla() {
    const styles = {
        color: "#f8b5ab;"
    }

    const style_icon={
        color: "#74C0FC"
    }

    const style_icon2={
        color: "#63E6BE"
    }

    const [count, setCount] = useState(1)

    function kamayuvchi() {
        setCount(count => count - 1)
        if (count == 1) {
            setCount(count - 0)
        }
    }
    function kopayuvchi() {
        setCount(count => count + 1)
        if (count == 10) {
            setCount(count - 0)
        }
    }

    // 



    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };



    return (
        <>
            <div class="container-fluid ">
                <div class="container ps-2 pt-4 p-xl-5">
                    <div class="row d-flex align-items-center position-relative">
                        <div class="col-xl-3 d-none d-xl-flex logo-img"><img src={logo2} alt="" /></div>
                        <div class="col-6 d-none d-xl-none"> <a class="link-dark" href="#"><i class="fs-3 fa-solid fa-bars"></i></a> </div>
                        <div className="col-10 d-flex d-xl-none flex-column">
                            <div class="collapse" id="navbarToggleExternalContent">
                                <div class="  d-flex  justify-content-start border  ">
                                    {/* <h5 class=" h4">Collapsed content</h5> */}
                                    <span class="text-muted w-100">
                                        <ul className="d-flex p-0 m-2 justify-content-between ">
                                            <a className="link-dark" href="#"><li>О нас</li></a>
                                            <a className="link-dark" href="#"><li>Меню</li></a>
                                            <a className="link-dark" href="#"><li>Филиалы</li></a>
                                            <a className="link-dark" href="#"><li>Контакты</li></a>
                                            <a className="link-dark" href="#"><li>Главная</li></a>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                            <nav class="navbar navbar-dark bg-transparent">
                                <div class="container-fluid p-0 m-0 ">
                                    <button class="navbar-toggler rounded p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon bg-dark rounded p-2"></span>
                                    </button>
                                </div>
                            </nav>
                        </div>
                        <div class="col-2 p-0 d-flex  d-xl-none justify-content-end"> <a class="link-dark" href="#"></a><i class="fa-solid fa-phone position-absolute top-0 mt-3 me-2 fs-3 d-flex align-self-start"></i></div>
                        <div class=" col-xl-6 align-items-xl-center">
                            <div class="d-none  d-xl-flex justify-content-xl-between ul-li-text">
                                <p>О нас</p>
                                <p>Главная</p>
                                <p>Меню</p>
                                <p>Филиалы</p>
                                <p>Контакты</p>
                            </div>
                        </div>
                        <div class="col-xl-3 header-icon d-none d-xl-flex justify-content-end">
                            <a class="link-dark" href="#"><i class="fa-solid fa-magnifying-glass fs-4"></i></a>
                            <a class="link-dark  ms-3 me-3" href="#"><i class="fa-solid fa-cart-shopping fs-4"></i></a>
                            <a class="link-dark" href="#"><i class="fa-regular fa-heart fs-4"></i></a>
                        </div>
                    </div>
                </div>
                {/* <!-- secction 1 start --> */}
                <div class="container pt-xl-3 pb-xl-5 section-1 pt-3   position-relative p-xl-5">
                    <div class="row ">
                        <div class="col-6 col-xl-6 pt-5 pe-0">
                            <img class="section1-img d-flex justify-content-end " src={logo} alt="" />
                            <p class="section1-text pt-3 pt-xl-4">Кондитерский дом</p>
                            <div class="section1-btn col-12 col-xl-6  pt-5 ps-3"><button>Заказать</button></div>
                        </div>
                        <div class="col-6 col-xl-6 pb-3 d-flex justify-content-xl-end justify-content-start"><img class="section1-left-img" src={img} alt="" /></div>
                    </div>
                </div>
                {/* <!-- section 2 start --> */}
                <div class="container p-xl-5 position-relative ">
                    <div class="row d-flex justify-content-xl-between justify-content-evenly">
                        <p class="s2-h1 text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Новинки</p>
                        <Carousel className="pb-1" responsive={responsive}>
                            <div>
                                <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative " >
                                    <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                    <div class="s2-img-card "><img src={tort1} alt="" /></div>
                                    <div class="s2-text-card ">
                                        <p class="s2-card-p">Чизкейк Сан-Себастьян</p>
                                        <p class="s2-card-price ">28 000 UZS</p>
                                        <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                            <button class="s2-card-btn ">В корзину</button>
                                            <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                                <button onClick={kamayuvchi} class="minus">-</button>
                                                <p class="mt-3 counts" >{count}</p>
                                                <button onClick={kopayuvchi} class="plus">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                    <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                    <div class="s2-img-card"><img class="mt-1 " src={tort2} alt="" /></div>
                                    <div class="s2-text-card ">
                                        <p class="s2-card-p">Торт Эстерхази</p>
                                        <p class="s2-card-price">230 000 UZS</p>
                                        <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                            <button class="s2-card-btn ">В корзину</button>
                                            <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                                <button onClick={kamayuvchi} class="minus">-</button>
                                                <p class="mt-3 counts" >{count}</p>
                                                <button onClick={kopayuvchi} class="plus">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                    <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                    <div class="s2-img-card"><img src={tort3} alt="" /></div>
                                    <div class="s2-text-card">
                                        <p class="s2-card-p">Круассан-Сэндвич</p>
                                        <p class="s2-card-price">25 000 UZS</p>
                                        <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                            <button class="s2-card-btn ">В корзину</button>
                                            <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                                <button onClick={kamayuvchi} class="minus">-</button>
                                                <p class="mt-3 counts" >{count}</p>
                                                <button onClick={kopayuvchi} class="plus">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3  position-relative">
                                    <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                    <div class="s2-img-card"><img src={tort4} alt="" /></div>
                                    <div class="s2-text-card">
                                        <p class="s2-card-p">Торт Рафаэлло</p>
                                        <p class="s2-card-price">324 000 UZS</p>
                                        <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                            <button class="s2-card-btn ">В корзину</button>
                                            <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                                <button onClick={kamayuvchi} class="minus">-</button>
                                                <p class="mt-3 counts" >{count}</p>
                                                <button onClick={kopayuvchi} class="plus">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative " >
                                    <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                    <div class="s2-img-card "><img src={tort1} alt="" /></div>
                                    <div class="s2-text-card">
                                        <p class="s2-card-p">Чизкейк Сан-Себастьян</p>
                                        <p class="s2-card-price">28 000 UZS</p>
                                        <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                            <button class="s2-card-btn ">В корзину</button>
                                            <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                                <button onClick={kamayuvchi} class="minus">-</button>
                                                <p class="mt-3 counts" >{count}</p>
                                                <button onClick={kopayuvchi} class="plus">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                    <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                    <div class="s2-img-card"><img class="mt-1 h-80" src={tort2} alt="" /></div>
                                    <div class="s2-text-card ">
                                        <p class="s2-card-p">Торт Эстерхази</p>
                                        <p class="s2-card-price">230 000 UZS</p>
                                        <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                            <button class="s2-card-btn ">В корзину</button>
                                            <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                                <button onClick={kamayuvchi} class="minus">-</button>
                                                <p class="mt-3 counts" >{count}</p>
                                                <button onClick={kopayuvchi} class="plus">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                    <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                    <div class="s2-img-card"><img src={tort3} alt="" /></div>
                                    <div class="s2-text-card">
                                        <p class="s2-card-p">Круассан-Сэндвич</p>
                                        <p class="s2-card-price">25 000 UZS</p>
                                        <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                            <button class="s2-card-btn ">В корзину</button>
                                            <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                                <button onClick={kamayuvchi} class="minus">-</button>
                                                <p class="mt-3 count" >{count}</p>
                                                <button onClick={kopayuvchi} class="plus">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3  position-relative">
                                    <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                    <div class="s2-img-card"><img src={tort4} alt="" /></div>
                                    <div class="s2-text-card">
                                        <p class="s2-card-p">Торт Рафаэлло</p>
                                        <p class="s2-card-price">324 000 UZS</p>
                                        <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                            <button class="s2-card-btn ">В корзину</button>
                                            <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                                <button onClick={kamayuvchi} class="minus">-</button>
                                                <p class="mt-3 count" >{count}</p>
                                                <button onClick={kopayuvchi} class="plus">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    <div class="row p-3 p-xl-4 d-none" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <div class="col-6   ms-xl-0  text-start text-xl-end"><button class="page-btn"><img src={chevron_left} alt="" /></button> </div>
                        <div class="col-6   text-end text-xl-start"><button class="page-btn"><img src="/img/chevron-right.png" alt="" /></button> </div>
                    </div>
                </div>
                {/* <!-- section 3 start --> */}
                <div class="container p-xl-5 mt-4">
                    <div class="row d-flex justify-content-xl-between justify-content-evenly">
                        <p class="s2-h1 text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Топ продаж</p>
                        <Carousel className="pb-1" responsive={responsive}>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort5} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Чизкейк Орео</p>
                                    <p class="s2-card-price">24 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img class="mt-1 h-80" src={tort6} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Тарталетка Клубничная</p>
                                    <p class="s2-card-price">340 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort7} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Торт Фисташковый</p>
                                    <p class="s2-card-price">18 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort8} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Круассан Шоколадный</p>
                                    <p class="s2-card-price">324 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort5} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Чизкейк Орео</p>
                                    <p class="s2-card-price">24 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img class="mt-1 h-80" src={tort6} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Тарталетка Клубничная</p>
                                    <p class="s2-card-price">340 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort7} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Торт Фисташковый</p>
                                    <p class="s2-card-price">18 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort8} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Круассан Шоколадный</p>
                                    <p class="s2-card-price">324 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    {/* <div class="row p-3 p-xl-4" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <div class="col-6   ms-xl-0  text-start text-xl-end"><button class="page-btn"> <img src={chevron_left} alt="" /> </button> </div>
                    <div class="col-6   text-end text-xl-start"><button class="page-btn"><img src="/img/chevron-right.png" alt="" /></button> </div>
                </div> */}
                </div>
                {/* <!-- section 4 start --> */}
                <div class="container p-xl-5 mt-4">
                    <div class="row d-flex justify-content-xl-between justify-content-evenly">
                        <p class="s2-h1 text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Торты</p>
                        <Carousel className="pb-1" responsive={responsive}>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort9} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Торт Шоколадный</p>
                                    <p class="s2-card-price">287 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img class="mt-1 h-80" src={tort10} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Торт Молочная Девочка</p>
                                    <p class="s2-card-price">220 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort11} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Торт Черный Принц</p>
                                    <p class="s2-card-price">285 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort12} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Торт Три Шоколада</p>
                                    <p class="s2-card-price">290 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort9} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Торт Шоколадный</p>
                                    <p class="s2-card-price">287 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img class="mt-1 h-80" src={tort10} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Торт Молочная Девочка</p>
                                    <p class="s2-card-price">220 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort11} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Торт Черный Принц</p>
                                    <p class="s2-card-price">285 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort12} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Торт Три Шоколада</p>
                                    <p class="s2-card-price">290 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    {/* <div class="row p-3 p-xl-4" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <div class="col-6   ms-xl-0  text-start text-xl-end"><button class="page-btn"> <img src={chevron_left} alt="" /> </button> </div>
                    <div class="col-6   text-end text-xl-start"><button class="page-btn"><img src="/img/chevron-right.png" alt="" /></button> </div>
                </div> */}
                </div>
                {/* <!-- section/ 5 start --> */}
                <div class="container p-xl-5 mt-4">
                    <div class="row d-flex justify-content-xl-between justify-content-evenly">
                        <p class="s2-h1 text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Пирожные</p>
                        <Carousel className="pb-1" responsive={responsive}>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort13} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Пирожное Вишневое</p>
                                    <p class="s2-card-price">24 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img class="mt-1 h-80" src={tort14} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Пирожное Ванильное</p>
                                    <p class="s2-card-price">26 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort15} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Пирожное Ягодное</p>
                                    <p class="s2-card-price">24 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort16} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Пирожное Медовик</p>
                                    <p class="s2-card-price">25 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort13} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Пирожное Вишневое</p>
                                    <p class="s2-card-price">24 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img class="mt-1 h-80" src={tort14} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Пирожное Ванильное</p>
                                    <p class="s2-card-price">26 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort15} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Пирожное Ягодное</p>
                                    <p class="s2-card-price">24 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort16} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Пирожное Медовик</p>
                                    <p class="s2-card-price">25 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    {/* <div class="row p-3 p-xl-4" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <div class="col-6   ms-xl-0  text-start text-xl-end"><button class="page-btn"> <img src={chevron_left} alt="" /> </button> </div>
                        <div class="col-6   text-end text-xl-start"><button class="page-btn"><img src="/img/chevron-right.png" alt="" /></button> </div>
                    </div> */}
                </div>
                {/* <!-- section 6 start --> */}
                <div class="container p-xl-5 mt-4">
                    <div class="row d-flex justify-content-xl-between justify-content-evenly">
                        <p class="s2-h1 text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Печенье</p>
                        <Carousel className="pb-1" responsive={responsive}>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort17} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Печенье Шрек</p>
                                    <div class="col-12 d-flex justify-content-between align-items-center ">
                                        <p class="s2-card-price">23 000 UZS</p> <p class="gramm-p">0.3 КГ</p>
                                    </div>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img class="mt-1 h-80" src={tort18} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Печенье Шоколадное</p>
                                    <div class="col-12 d-flex justify-content-between align-items-center ">
                                        <p class="s2-card-price">23 000 UZS</p> <p class="gramm-p">0.3 КГ</p>
                                    </div>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort19} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Печенье Овсяное</p>
                                    <div class="col-12 d-flex justify-content-between align-items-center ">
                                        <p class="s2-card-price">23 000 UZS</p> <p class="gramm-p">0.3 КГ</p>
                                    </div>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort20} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Печенье с Фундуком</p>
                                    <div class="col-12 d-flex justify-content-between align-items-center ">
                                        <p class="s2-card-price">23 000 UZS</p> <p class="gramm-p">0.3 КГ</p>
                                    </div>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort17} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Печенье Шрек</p>
                                    <div class="col-12 d-flex justify-content-between align-items-center ">
                                        <p class="s2-card-price">23 000 UZS</p> <p class="gramm-p">0.3 КГ</p>
                                    </div>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img class="mt-1 h-80" src={tort18} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Печенье Шоколадное</p>
                                    <div class="col-12 d-flex justify-content-between align-items-center ">
                                        <p class="s2-card-price">23 000 UZS</p> <p class="gramm-p">0.3 КГ</p>
                                    </div>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort19} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Печенье Овсяное</p>
                                    <div class="col-12 d-flex justify-content-between align-items-center ">
                                        <p class="s2-card-price">23 000 UZS</p> <p class="gramm-p">0.3 КГ</p>
                                    </div>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort20} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Печенье с Фундуком</p>
                                    <div class="col-12 d-flex justify-content-between align-items-center ">
                                        <p class="s2-card-price">23 000 UZS</p> <p class="gramm-p">0.3 КГ</p>
                                    </div>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    {/* <div class="row p-3 p-xl-4" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <div class="col-6   ms-xl-0  text-start text-xl-end"><button class="page-btn"> <img src={chevron_left} alt="" /> </button> </div>
                        <div class="col-6   text-end text-xl-start"><button class="page-btn"><img src="/img/chevron-right.png" alt="" /></button> </div>
                    </div> */}
                </div>
                {/* <!-- secti/on 7 start --> */}
                <div class="container p-xl-5 mt-4 ">
                    <div class="row d-flex justify-content-xl-between justify-content-evenly">
                        <p class="s2-h1 text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Выпечка</p>
                        <Carousel className="pb-1" responsive={responsive}>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort21} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Булочка с Маком</p>
                                    <p class="s2-card-price">7 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative" >
                                <div class="card-icon-full position-absolute fs-3 "><i class="fa-solid fa-heart" style={styles}></i></div>
                                <div class="s2-img-card"><img class="mt-1 h-80" src={tort22} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Слойка с Яблоком</p>
                                    <p class="s2-card-price">5 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort23} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Булочка с Арахисом</p>
                                    <p class="s2-card-price">5 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort24} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Круассан Классический</p>
                                    <p class="s2-card-price">15 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center" >
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort21} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Булочка с Маком</p>
                                    <p class="s2-card-price">7 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative" >
                                <div class="card-icon-full position-absolute fs-3 "><i class="fa-solid fa-heart" style={styles}></i></div>
                                <div class="s2-img-card"><img class="mt-1 h-80" src={tort22} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Слойка с Яблоком</p>
                                    <p class="s2-card-price">5 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort23} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Булочка с Арахисом</p>
                                    <p class="s2-card-price">5 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort24} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Круассан Классический</p>
                                    <p class="s2-card-price">15 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center" >
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    {/* <div class="row p-3 p-xl-4" data-aos="fade-up" data-aos-anchor-placement="center-bottom" >
                        <div class="col-6   ms-xl-0  text-start text-xl-end"><button class="page-btn"> <img src={chevron_left} alt="" /> </button> </div>
                        <div class="col-6   text-end text-xl-start"><button class="page-btn"><img src="/img/chevron-right.png" alt="" /></button> </div>
                    </div> */}
                </div>
                {/* <!-- section 8 start --> */}
                <div class="container p-xl-5 mt-4">
                    <div class="row d-flex justify-content-xl-between justify-content-evenly">
                        <p class="s2-h1 text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Хлеб</p>
                        <Carousel className="pb-1" responsive={responsive}>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort25} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Хлеб Бородинский</p>
                                    <p class="s2-card-price">15 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img class="mt-1 h-80" src={tort26} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Полба</p>
                                    <p class="s2-card-price">27 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort27} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Багет Классический</p>
                                    <p class="s2-card-price">10 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort28} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Чиабатта</p>
                                    <p class="s2-card-price">25 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort25} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Хлеб Бородинский</p>
                                    <p class="s2-card-price">15 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img class="mt-1 h-80" src={tort26} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Полба</p>
                                    <p class="s2-card-price">27 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort27} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Багет Классический</p>
                                    <p class="s2-card-price">10 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort28} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Чиабатта</p>
                                    <p class="s2-card-price">25 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    {/* <div class="row p-3 p-xl-4" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <div class="col-6   ms-xl-0  text-start text-xl-end"><button class="page-btn"> <img src={chevron_left} alt="" /> </button> </div>
                        <div class="col-6   text-end text-xl-start"><button class="page-btn"><img src="/img/chevron-right.png" alt="" /></button> </div>
                    </div> */}
                </div>
                {/* <!-- section 9 start --> */}
                <div class="container p-xl-5 mt-4">
                    <div class="row d-flex justify-content-xl-between justify-content-evenly">
                        <p class="s2-h1 text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Бар</p>
                        <Carousel className="pb-1 position-relative" responsive={responsive}>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative "  >
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card "><img src={tort29} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Капучино Айс</p>
                                    <p class="s2-card-price">15 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img class="mt-1 h-80" src={tort30} alt="" /></div>
                                <div class="s2-text-card ">
                                    <p class="s2-card-p">Латте Айс</p>
                                    <p class="s2-card-price">19 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative" >
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort31} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Американо</p>
                                    <p class="s2-card-price">15 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3  position-relative" >
                                <div class="card-icon-full position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort32} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Смузи из Ананаса</p>
                                    <p class="s2-card-price">28 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative "  >
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card "><img src={tort29} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Капучино Айс</p>
                                    <p class="s2-card-price">15 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative">
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img class="mt-1 h-80" src={tort30} alt="" /></div>
                                <div class="s2-text-card ">
                                    <p class="s2-card-p">Латте Айс</p>
                                    <p class="s2-card-price">19 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative" >
                                <div class="card-icon position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort31} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Американо</p>
                                    <p class="s2-card-price">15 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3  position-relative" >
                                <div class="card-icon-full position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                                <div class="s2-img-card"><img src={tort32} alt="" /></div>
                                <div class="s2-text-card">
                                    <p class="s2-card-p">Смузи из Ананаса</p>
                                    <p class="s2-card-price">28 000 UZS</p>
                                    <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                        <button class="s2-card-btn ">В корзину</button>
                                        <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                            <button onClick={kamayuvchi} class="minus">-</button>
                                            <p class="mt-3 counts" >{count}</p>
                                            <button onClick={kopayuvchi} class="plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    {/* <div class="row p-3 p-xl-4" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <div class="col-6   ms-xl-0  text-start text-xl-end"><button class="page-btn"> <img src={chevron_left} alt="" /> </button> </div>
                        <div class="col-6   text-end text-xl-start"><button class="page-btn"><img src="/img/chevron-right.png" alt="" /></button> </div>
                    </div> */}
                </div>
                {/* <!-- section 10 start --> */}
                <div class="container p-0 p-xl-5 mt-4">
                    <div class="row">
                        <p class="map-h1 text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Филиалы</p>
                        <div class="col-xl-6 col-12 mt-3 d-flex justify-content-between flex-column ">
                            <div class="row ms-3 ms-xl-0">
                                <div class="col-12 up p-0">
                                    <p class="s10-h1-up">ТРЦ NEXT</p>
                                    <p class="s10-text-up">Яккасарайский район, улица Бабура, 6, 2 этаж.</p>
                                    <div class="col-10 col-xl-11 d-flex justify-content-between ">
                                        <div class="col-6 col-xl-3 "><span class="text-secondary">Режим работы:</span> <br /> с 10:00 до 23:00</div>
                                        <div class="col-6 col-xl-3 me-5"> <span class="text-secondary">Номер телефона:</span> +998 71 231 20 10</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row ms-3 ms-xl-0">
                                <div class="col-12 down mt-5 mt-xl-0">
                                    <p class="s10-h1-down">ТРЦ COMPASS</p>
                                    <p class="s10-text-down">17 Toshkent Xalqa Avtomobil Yo'li, 3 этаж.</p>
                                    <div class="col-10 col-xl-11    d-flex justify-content-between">
                                        <div class="col-6 col-xl-3"><span class="text-secondary">Режим работы:</span> <br /> с 10:00 до 22:00</div>
                                        <div class="col-6 col-xl-3 me-5"> <span class="text-secondary">Номер телефона:</span> +998 71 205 05 03</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-12 mt-3 d-flex justify-content-xl-end justify-content-center  p-0">
                            {/* <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43027.048387966024!2d69.2404675706978!3d41.3217316890201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b16e2d5969b%3A0x324d8d78bd8ad2ab!2z0KbQtdC90YLRgNCw0LvRjNC90YvQuSDRgdGC0LDQtNC40L7QvSDCq9Cf0LDRhdGC0LDQutC-0YDCuw!5e0!3m2!1sru!2s!4v1705596214993!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> */}
                            <a href=""><img class=" mt-3 mt-xl-0 map-img" src={map} alt="" /></a>
                            {/* </iframe> */}
                        </div>
                    </div>
                </div>
                <div class="container d-xl-none d-flex mt-4 ">
                    <div class="row   d-flex justify-content-evenly">
                        <p class="mobile-h1">Избранное</p>
                        <div class="  col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3  position-relative" >
                            <div class="card-icon-full position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                            <div class="s2-img-card"><img src={tort32} alt="" /></div>
                            <div class="s2-text-card">
                                <p class="s2-card-p">Смузи из Ананаса</p>
                                <p class="s2-card-price">28 000 UZS</p>
                                <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                    <button class="s2-card-btn ">В корзину</button>
                                    <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                        <button onClick={kamayuvchi} class="minus">-</button>
                                        <p class="mt-3 counts" >{count}</p>
                                        <button onClick={kopayuvchi} class="plus">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class=" col-6 card-s2 d-flex justify-content-between flex-column align-items-center mt-3 p-2 p-xl-3 position-relative" >
                            <div class="card-icon-full position-absolute fs-3 "><i class="fa-solid fa-heart"></i></div>
                            <div class="s2-img-card"><img class="mt-1 h-80" src={tort22} alt="" /></div>
                            <div class="s2-text-card">
                                <p class="s2-card-p">Слойка с Яблоком</p>
                                <p class="s2-card-price">5 000 UZS</p>
                                <div class="col-12 d-flex justify-content-xl-between justify-content-between pt-xl-4">
                                    <button class="s2-card-btn ">В корзину</button>
                                    <div class="counter ps-2 pe-2 d-flex justify-content-between align-items-center">
                                        <button onClick={kamayuvchi} class="minus">-</button>
                                        <p class="mt-3 counts" >{count}</p>
                                        <button onClick={kopayuvchi} class="plus">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- footer start --> */}
            <div class="container-fluid footer mt-4 mt-xl-0">
                <div class="container p-4 p-xl-5">
                    <div class="row pt-xl-5 pb-xl-5 d-flex justify-content-between">
                        <div class="col-xl-4 col-12">
                            <img class="footer-logo" src={logo} alt="" />
                            <p class="text-white mt-4 name-text">Кондитерский дом </p>
                        </div>
                        <div class="col-xl-2 col-3 mt-5 mt-xl-0">
                            <ul class="ul-li p-0">
                                <li><a class="" href="#"><strong>Меню</strong></a></li>
                                <li><a href="#" class=" mt-5">Главная</a></li>
                                <li><a href="#" class="">О нас</a></li>
                                <li><a href="#" class="">Меню</a></li>
                                <li><a href="#" class="">Филиалы</a></li>
                                <li><a href="#" class="">Контакты</a></li>
                            </ul>
                        </div>
                        <div class="col-3 col-xl-3 ul-li  mt-5 mt-xl-0 ps-xl-5">
                            <li><a class="" href="#"><strong>Каталог</strong></a></li>
                            <li><a href="#" class="">Торты</a></li>
                            <li><a href="#" class="">Пирожные</a></li>
                            <li><a href="#" class="">Печенье</a></li>
                            <li><a href="#" class="">Выпечка</a></li>
                            <li><a href="#" class="">Хлеб</a></li>
                            <li><a href="#" class="">Бар</a></li>
                        </div>
                        <div class="col-xl-3 col-6 mt-5 mt-xl-0">
                            <p class="text-white contact">Контакты</p>
                            <div className="col-12  d-flex align-items-center">
                                <i class="fa-solid fa-phone me-2 fs-6 d-none d-xl-flex phone-icon" style={style_icon2}></i>
                                <p class="text-white phone-number m-0">+998 90 123 45 67</p>
                            </div>
                            <div class="col-12 mt-3">
                                <a href="https://web.telegram.org/a/"><i class="fa-brands fa-telegram me-2 fs-3 fs-xl-4" style={style_icon}></i></a>
                                <a href="https://www.instagram.com/" class=""><i class="fa-brands fa-instagram fs-3 fs-xl-4"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vanilla;