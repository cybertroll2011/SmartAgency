let body = document.querySelector("body");

// header

let headerNav = document.querySelector(".header__nav");
let nav = document.querySelector(".nav");
let navBtn = document.querySelector(".nav-btn");
let navLink = document.querySelectorAll(".nav__link");
let container = document.querySelectorAll(".container");

navBtn.onclick = function(e){
	e.preventDefault();
	this.classList.toggle("nav-btn-active");
	nav.classList.toggle("nav-active");
	headerNav.classList.toggle("header__nav-active");
	if(body.offsetWidth<793){
		body.classList.toggle("body-no-scroll");
	}
}

let introH = document.querySelector(".intro").offsetHeight
window.onscroll = function(e){
	if(window.pageYOffset>introH){
		document.querySelector(".header").classList.add("header-fixed");
	}
	else if(window.pageYOffset<introH){
		document.querySelector(".header").classList.remove("header-fixed");
	}
}

for(let i=0; i<navLink.length; i++){
	navLink[i].onclick = moveToBlock;
}
function moveToBlock(e){
	e.preventDefault();
	let linkAttr = this.getAttribute("data-link");
	for(let k=0; k<container.length; k++){
		let blockAttr = container[k].getAttribute("data-link");
		if(linkAttr==blockAttr){
			let offset = container[k].offsetTop;
			window.scrollTo({
				top: offset - document.querySelector(".header").offsetHeight,
				behavior: "smooth"
			})
			navBtn.classList.remove("nav-btn-active");
			nav.classList.remove("nav-active");
			headerNav.classList.remove("header__nav-active");
			if(body.offsetWidth<793){
				body.classList.remove("body-no-scroll");
			}
		}
	}
}


// intro

let introSubmit = document.querySelector(".intro__form-btn");
introSubmit.onmousedown = function(e){
	this.style.filter = "contrast(200%)";
}
introSubmit.onmouseup = function(e){
	this.style.filter = "contrast(100%);";
}

// work

let workBtn = document.querySelectorAll(".work__item-btn");
let workModal = document.querySelectorAll(".work__modal-inner");

for(let i=0; i<workBtn.length; i++){
	workBtn[i].onclick = openWorkModal;
}
document.querySelector(".modal-window").onclick = closeWorkModal;

function openWorkModal(e){
	body.classList.add("body-no-scroll");
	document.querySelector(".work__modal-window").classList.add("modal-window-show");
	document.querySelector(".work__modal").classList.add("modal-show");
	let workBtnAttr = this.getAttribute("data-modal");
	for(let k=0; k<workModal.length; k++){
		let workModalAttr = workModal[k].getAttribute("data-modal");
		let cur = k;
		if(workModalAttr==workBtnAttr){
			workModal[k].classList.add("modal-inner-show");
			document.querySelector(".work__modal-prev").onclick = function(e){
				if(cur>0){
					workModal[cur].classList.remove("modal-inner-show");
					cur--;
					workModal[cur].classList.add("modal-inner-show");
					}
				}
			document.querySelector(".work__modal-next").onclick = function(e){
				if(cur<workModal.length-1){
					workModal[cur].classList.remove("modal-inner-show");
					cur++;
					workModal[cur].classList.add("modal-inner-show");
				}
			}
		}
	}
}

function closeWorkModal(e){
	if(e.target==document.querySelector(".modal-window")||e.target==document.querySelector(".work__modal-close")||e.target==document.querySelector(".work__modal-close-span")){
		body.classList.remove("body-no-scroll");
		document.querySelector(".modal-window").classList.remove("modal-window-show");
		document.querySelector(".modal").classList.remove("modal-show");
		for(let i=0; i<workModal.length; i++){
			workModal[i].classList.remove("modal-inner-show");
		}
	}
}

// portfolio

let portItem = document.querySelectorAll(".portfolio__item");
let portModal = document.querySelectorAll(".portfolio__modal-inner");

for(let i=0; i<portItem.length; i++){
	portItem[i].onclick = openPortfolioModal;
}
document.querySelector(".portfolio__modal-window").onclick = closePortModal;

function openPortfolioModal(e){
	if(e.target!=this.querySelector("a")){
		body.classList.add("body-no-scroll");
		document.querySelector(".portfolio__modal-window").classList.add("modal-window-show");
		document.querySelector(".portfolio__modal").classList.add("modal-show");
		let portItemAttr = this.getAttribute("data-modal");
		for(let k=0; k<portModal.length; k++){
			let portModalAttr = portModal[k].getAttribute("data-modal");
			let cur = k;
			if(portModalAttr==portItemAttr){
				portModal[k].classList.add("modal-inner-show");
				document.querySelector(".portfolio__modal-prev").onclick = function(e){
					if(cur>0){
						portModal[cur].classList.remove("modal-inner-show");
						cur--;
						portModal[cur].classList.add("modal-inner-show");
						}
					}
				document.querySelector(".portfolio__modal-next").onclick = function(e){
					if(cur<portModal.length-1){
						portModal[cur].classList.remove("modal-inner-show");
						cur++;
						portModal[cur].classList.add("modal-inner-show");
					}
				}
			}
		}
	}
}

function closePortModal(e){
	if(e.target==document.querySelector(".portfolio__modal-window")||e.target==document.querySelector(".portfolio__modal-close")||e.target==document.querySelector(".portfolio__modal-close-span")){
		body.classList.remove("body-no-scroll");
		document.querySelector(".portfolio__modal-window").classList.remove("modal-window-show");
		document.querySelector(".portfolio__modal").classList.remove("modal-show");
		for(let i=0; i<portModal.length; i++){
			portModal[i].classList.remove("modal-inner-show");
		}
	}
}


// services

let servicesBtn = document.querySelectorAll(".services-btn");
let servicesItem = document.querySelectorAll(".services__item");

for(let i=0; i<servicesBtn.length; i++){
	servicesBtn[i].onclick = function(e){
		servicesBtnAttr = this.getAttribute("data-services");
		for(let l=0; l<servicesBtn.length; l++){
			servicesBtn[l].classList.remove("services-btn-active");
		}
		this.classList.add("services-btn-active");
		for(let k=0; k<servicesItem.length; k++){
			servicesItemAttr = servicesItem[k].getAttribute("data-services");
			if(servicesItemAttr==servicesBtnAttr){
				for(let j=0; j<servicesItem.length; j++){
					servicesItem[j].classList.remove("services__item-active");
				}
				servicesItem[k].classList.add("services__item-active");
			}
		}
	}
}

let servicesItemBtn = document.querySelectorAll(".services__item-btn");
let servicesItemTitle = document.querySelectorAll(".services__item-title");
let servicesModal = document.querySelectorAll(".services__modal-inner");

for(let i=0; i<servicesItemBtn.length; i++){
	servicesItemBtn[i].onclick = openServicesModal;
	servicesItemBtn[i].onmousemove = function(e){
		for(let k=0; k<servicesItemTitle.length; k++){
			servicesItemTitle[k].classList.add("services__item-title-long");
		}
	}
	servicesItemBtn[i].onmouseleave = function(e){
		for(let k=0; k<servicesItemTitle.length; k++){
			servicesItemTitle[k].classList.remove("services__item-title-long");
		}
	}
}
document.querySelector(".services__modal-window").onclick = closeServicesModal;

function openServicesModal(e){
	body.classList.add("body-no-scroll");
	document.querySelector(".services__modal-window").classList.add("modal-window-show");
	document.querySelector(".services__modal").classList.add("modal-show");
	let servicesItemBtnAttr = this.getAttribute("data-modal");
	for(let k=0; k<servicesModal.length; k++){
		let servicesModalAttr = servicesModal[k].getAttribute("data-modal");
		let cur = k;
		if(servicesModalAttr==servicesItemBtnAttr){
			servicesModal[k].classList.add("modal-inner-show");
			document.querySelector(".services__modal-prev").onclick = function(e){
					if(cur>0){
						servicesModal[cur].classList.remove("modal-inner-show");
						cur--;
						servicesModal[cur].classList.add("modal-inner-show");
						}
					}
				document.querySelector(".services__modal-next").onclick = function(e){
					if(cur<servicesModal.length-1){
						servicesModal[cur].classList.remove("modal-inner-show");
						cur++;
						servicesModal[cur].classList.add("modal-inner-show");
					}
				}
		}
	}
}

function closeServicesModal(e){
	if(e.target==document.querySelector(".services__modal-window")||e.target==document.querySelector(".services__modal-close")||e.target==document.querySelector(".services__modal-close-span")){
		body.classList.remove("body-no-scroll");
		document.querySelector(".services__modal-window").classList.remove("modal-window-show");
		document.querySelector(".services__modal").classList.remove("modal-show");
		for(let i=0; i<servicesModal.length; i++){
			servicesModal[i].classList.remove("modal-inner-show");
		}
	}
}

// testimonials

let testimContainer = document.querySelector(".testimonials__container");
let testimonialWidth = document.querySelector(".testimonial__wrapper").offsetWidth;
let testimWidthNext = 0;
let testimWidthPrev = 0;
let testimCount = 1;
let testimBarPressItem = document.querySelectorAll(".testim__slider-bar-unactive");
let testimBarItem = document.querySelector(".testim__slider-bar-active");
let testimBarItemNext = 0;
let testimBarItemPrev = 0;

window.addEventListener('resize', function(){
	testimonialWidth = document.querySelector(".testimonial__wrapper").offsetWidth;
})

document.querySelector(".testimonial-prev").onclick = testimonalPrev;
document.querySelector(".testimonial-next").onclick = testimonialNext;

function testimonialNext(e){
	if(testimCount<3){
		testimWidthNext+=testimonialWidth;
		testimWidthPrev-=testimonialWidth;
		testimContainer.style.left = -testimWidthNext+"px";
		testimCount++;
		testimBarItemNext+=26;
		testimBarItemPrev-=26;
		testimBarItem.style.left = testimBarItemNext+"px";
	}
	if(testimCount==3){
		document.querySelector(".testimonial-next").classList.remove("testim-next-active");
	}
	if(testimCount>1){
		document.querySelector(".testimonial-prev").classList.add("testim-prev-active");
	}
}
function testimonalPrev(e){
	if(testimCount>1){
		testimWidthPrev+=testimonialWidth;
		testimWidthNext-=testimonialWidth;
		testimContainer.style.left = testimWidthPrev+"px";
		testimCount--;
		testimBarItemPrev+=26;
		testimBarItemNext-=26;
		testimBarItem.style.left = -testimBarItemPrev+"px";
	}
	if(testimCount==1){
		document.querySelector(".testimonial-prev").classList.remove("testim-prev-active");
	}
	if(testimCount<3){
		document.querySelector(".testimonial-next").classList.add("testim-next-active");
	}
}

document.querySelector(".testimonials__slider").onmousedown = sliderMouseDown;
document.querySelector(".testimonials__slider").onmouseup = sliderMouseUp;

function sliderMouseDown(e){
	testimonialsLeft = testimContainer.style.left;
	beginOffset = e.screenX;
	this.style.cursor = "grab";
}
function sliderMouseUp(e){
	endOffset = e.screenX;
	if(beginOffset>endOffset){
		testimonialNext();
	}
	if(endOffset>beginOffset){
		testimonalPrev();
	}
	this.style.cursor = "auto";
}

for(let i=0; i<testimBarPressItem.length; i++){
	let cur = 0;
	testimBarPressItem[i].onclick = function(e){
		console.log(i);
		if(i>cur){
			for(let c=cur; c<i; c++){
				testimonialNext();
				cur++;
				console.log("next: "+cur);
			}
		}
	}
}

let testimCur = 0;

for(let i=0; i<testimBarPressItem.length; i++){
	testimBarPressItem[i].onclick = function(e){
		if(i>testimCur){
			for(let c=testimCur; c<i; c++){
				testimonialNext();
				testimCur++;
			}
		}
		if(i<testimCur){
			for(let b=testimCur; b>i; b--){
				testimonalPrev();
				testimCur--;
			}
		}
	}
}

// footer

document.querySelector(".footer__contact-us").onclick = function(e){
	body.classList.add("body-no-scroll");
	document.querySelector(".footer__modal-window").classList.add("modal-window-show");
	document.querySelector(".footer__modal").classList.add("modal-show");
	e.preventDefault();
}
document.querySelector(".footer__modal-window").onclick = function(e){
	if(e.target==document.querySelector(".footer__modal-window")||e.target==document.querySelector(".footer__modal-close")||e.target==document.querySelector(".footer__modal-close-span")){
		body.classList.remove("body-no-scroll");
		document.querySelector(".footer__modal-window").classList.remove("modal-window-show");
		document.querySelector(".footer__modal").classList.remove("modal-show");
		e.preventDefault();
	}
}