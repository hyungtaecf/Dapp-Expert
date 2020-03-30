document.addEventListener('DOMContentLoaded', () => {

    const mobileHeaderOpen = document.querySelector('.mobile-header-open');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeMobileNav = document.querySelector('.close-mobile-nav');
    const mobileOverley = document.querySelector('.mobile-overley');
    const body = document.querySelector('body')

    const blockchainsSectionlist = document.querySelectorAll('.blockchains__section-list');
    const blockchainsTableImg = document.querySelectorAll('.blockchains-table__img')

    const blockchainsSubItem = document.querySelectorAll('.blockchains__sub-item')

    const smartContract = document.querySelector('.smart-contract');
    const modaSmartContract = document.querySelector('.modal-smart-contract');
    const modalSmartContractBtn  = document.querySelector('.modal-smart-contract-btn ');
    const userVoiceButton = document.querySelector('.user-voice__button');
    const modalUserVoice = document.querySelector('.modal-user-voice');
    const modalUserVoiceBtn = document.querySelector('.modal-user-voice-btn');

    const blockchainsButton = document.querySelectorAll('.blockchains-button')
    const blockchainsButtonAll = document.querySelector('.blockchains-button-all');
    const blockchainsButtonEth = document.querySelector('.blockchains-button-eth');

    const blockchainsTableButton = document.querySelectorAll('.blockchains-table__button')
    const blockchainsTableButton24h = document.querySelector('.blockchains-table__button-24h');
    const blockchainsTableButton7d = document.querySelector('.blockchains-table__button-7d');

    const dragImg = document.querySelectorAll('.drag-img');
    const modalDrugImgBtn = document.querySelector('.modal-drug-img-btn');

    const blockchainsScheduleCheckButton = document.querySelectorAll('.blockchains-schedule_check-button');

    const blockchainsTableContant = document.querySelectorAll('.blockchains-table-contant');
    const blockchainsTableContantDisable = document.querySelector('.blockchains-table-contant-disable')

    const socMediaBtn = document.querySelector('.soc-media-btn');
    const socMediaList = document.querySelector('.soc-media-list');

    const seeMoreUserVoice = document.querySelector('.see-more-user-voice');
    const userVoiceItem = document.querySelectorAll('.user-voice__item')

    const scrinBtn = document.querySelector('.scrin-btn')
   

    // if (typeof WOW !== "undefined" && WOW !== null) {
    //     new WOW().init()
    // }

    //стилизация option

    if ( $('.dapp__select') !== "undefined" && $('.dapp__select') !== null) {

        $('.dapp__select').select2({
            placeholder: 'Select an Industry',
            allowClear: false,
            tags: true,
            maximumSelectionLength: 5
        });
    }   

    // добавление нового поля ввода social media
    if ( socMediaBtn !== "undefined" && socMediaBtn !== null) {
    
        socMediaBtn.addEventListener('click', function() {
            let newInputSocMedia = document.createElement('input');
        newInputSocMedia.type = 'text';
        newInputSocMedia.className='dapp__input';
            socMediaList.append(newInputSocMedia)
        })
    }

    // добавление нового поля с картинкой
    if ( scrinBtn !== "undefined" && scrinBtn !== null) {

        scrinBtn.addEventListener('click', function() {
            let newImgInput = document.createElement('div');
                newImgInput.className = 'dapp_drug soc-media-btn scrin-btn drag-img';
            let newSvgBtn = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
                newSvgBtn.setAttribute('width',23);
                newSvgBtn.setAttribute('height',23);
                newSvgBtn.setAttribute('viewBox',"0 0 23 23");
                newSvgBtn.setAttribute('fill',"none");
                newSvgBtn.setAttribute('xmlns',"http://www.w3.org/2000/svg");
            let newSvgPart = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                newSvgPart.setAttribute('d',"M22.5 12L1 12");
                newSvgPart.setAttribute('stroke',"black");
                newSvgPart.setAttribute('stroke-linecap',"round");
                newSvgPart.setAttribute('stroke-linejoin',"round");
            let newSvgPart2 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
                newSvgPart2.setAttribute('d',"M12 1V22.5");
                newSvgPart2.setAttribute('stroke',"black");
                newSvgPart2.setAttribute('stroke-linecap',"round");
                newSvgPart2.setAttribute('stroke-linejoin',"round");    
            let newInputImg = document.createElement('img');
                newInputImg.src="images/drag-img.jpg";
                console.log(newInputImg )
        
            document.querySelector('.scrin-wrapper').append(newImgInput)//добавление кнопки
            newImgInput.append(newSvgBtn);//добавление svg в кнопку
            newSvgBtn.append(newSvgPart);
            newSvgBtn.append(newSvgPart2);
            newImgInput.addEventListener('click',function() {
                console.log(newImgInput.innerHTML)
                newSvgBtn.remove();
                newImgInput.append(newInputImg);
                if ( dragImg !== "undefined" && dragImg !== null) {

                    dragImg.forEach(function(e) {
                        e.addEventListener('click', function() {
                            document.querySelector('.modal-drug-img').classList.add('modal-drug-img-active');
                            mobileOverley.classList.add('mobile-overley-active')
                            body.classList.add('body-overlay')
                        })
                    })
                   
                }
            })
        })
}

    if ( seeMoreUserVoice !== "undefined" && seeMoreUserVoice !== null) {
        seeMoreUserVoice.addEventListener('click', function() {
            userVoiceItem.forEach(function(e) {
                if(e.classList.contains('user-voice__item-disable')){
                    e.classList.remove('user-voice__item-disable')
                }
                else {
                    e.classList.add('user-voice__item-disable')
                }
            })
        })
    }
    
    if ( blockchainsSubItem !== "undefined" && blockchainsSubItem !== null) {

        blockchainsSubItem.forEach(function(e){
        
            e.addEventListener('click', function() {
                blockchainsSubItem.forEach(function(e){ 
                    e.classList.remove('blockchains__sub-item-active')
                });
                e.classList.add('blockchains__sub-item-active')
            })
        })
    }

    if ( blockchainsScheduleCheckButton !== "undefined" && blockchainsScheduleCheckButton !== null) {
        blockchainsScheduleCheckButton.forEach(function(e) {
            
            e.addEventListener('click', function(){  
                blockchainsScheduleCheckButton.forEach(function(e) {
                    e.classList.remove('blockchains-schedule_check-button-active')
                })
                e.classList.add('blockchains-schedule_check-button-active')

                
            } )
        })
    }

    if ( mobileHeaderOpen !== "undefined" && mobileHeaderOpen !== null) {
        mobileHeaderOpen.addEventListener('click', function() {
            mobileNav.classList.add('mobile-nav-active')
            mobileOverley.classList.add('mobile-overley-active')
            body.classList.add('body-overlay')

        })
    }

    if ( closeMobileNav !== "undefined" && closeMobileNav !== null) {

        closeMobileNav.addEventListener('click', function() {
            mobileNav.classList.remove('mobile-nav-active')
            mobileOverley.classList.remove('mobile-overley-active')
            body.classList.remove('body-overlay')
        })
    }


    if ( blockchainsSectionlist !== "undefined" && blockchainsSectionlist !== null) {
        blockchainsSectionlist.forEach(function(e) {
            e.addEventListener('click', function() {
                e.classList.toggle('blockchains__section-list-active')
            })
        })
    }

   

    // if(document.documentElement.clientWidth <= 900) {
    //     blockchainsTableImg.forEach(function(e) {
    //         e.addEventListener('click', function() {
    //            e.closest('.blockchains-table__img').children[1].classList.toggle('mobile-blockchains-table-active');
    //            e.closest('.blockchains-table__header-wrapper').querySelectorAll('.blockchains-table__item').forEach(function(e) {
    //             e.classList.toggle('blockchains-table__item-disable')
    //            })
    //            e.closest('.blockchains-table__header-wrapper').querySelector('.blockchains-table__game-name').classList.toggle('blockchains-table__item-disable')
    //         e.classList.toggle('blockchains-table__img-h-auto')
               
    //         })
    //     })
    // }
    if ( smartContract !== "undefined" && smartContract !== null) {

        smartContract.addEventListener('click', function(e) {
            mobileOverley.classList.add('mobile-overley-active')
            body.classList.add('body-overlay')
            modaSmartContract.classList.add('modal-smart-contract-active')
        })
    }

    if ( modalSmartContractBtn !== "undefined" && modalSmartContractBtn !== null) {

        modalSmartContractBtn.addEventListener('click', function() {
            mobileOverley.classList.remove('mobile-overley-active')
            body.classList.remove('body-overlay')
            modaSmartContract.classList.remove('modal-smart-contract-active')
        })
    }


    if ( userVoiceButton !== "undefined" && userVoiceButton !== null) {
        userVoiceButton.addEventListener('click', function() {
            mobileOverley.classList.add('mobile-overley-active')
            body.classList.add('body-overlay')
            modalUserVoice.classList.add('modal-user-voice-active');
            document.querySelector('.user-voice').classList.add('user-voice-z-index');
        })
    }

    if ( modalUserVoiceBtn !== "undefined" && modalUserVoiceBtn !== null) {

        modalUserVoiceBtn.addEventListener('click', function() {
            mobileOverley.classList.remove('mobile-overley-active')
            body.classList.remove('body-overlay')
            modalUserVoice.classList.remove('modal-user-voice-active');
            document.querySelector('.user-voice').classList.remove('user-voice-z-index');
        })
    }

    if ( dragImg !== "undefined" && dragImg !== null) {

        dragImg.forEach(function(e) {
            e.addEventListener('click', function() {
                document.querySelector('.modal-drug-img').classList.add('modal-drug-img-active');
                mobileOverley.classList.add('mobile-overley-active')
                body.classList.add('body-overlay')
            })
        })
       
    }

    if ( modalDrugImgBtn !== "undefined" && modalDrugImgBtn !== null) {

        modalDrugImgBtn.addEventListener('click', function() {
            document.querySelector('.modal-drug-img').classList.remove('modal-drug-img-active');
            mobileOverley.classList.remove('mobile-overley-active')
            body.classList.remove('body-overlay')
        })
    }



    // blockchainsButton.forEach(function(e) {
    //     e.addEventListener('click', function() {
    //         e.classList.add('blockchains-button-active');
    //     }) 
       
    // })

    if ( blockchainsButtonAll !== "undefined" && blockchainsButtonAll !== null) {

        blockchainsButtonAll.addEventListener('click', function(){
            blockchainsButtonAll.classList.add('blockchains-button-all-active');
            blockchainsButtonEth.classList.remove('blockchains-button-active');
        })
    }

    if ( blockchainsButtonEth !== "undefined" && blockchainsButtonEth !== null) {

        blockchainsButtonEth.addEventListener('click', function(){
            blockchainsButtonEth.classList.add('blockchains-button-active');
            blockchainsButtonAll.classList.remove('blockchains-button-all-active');
        })
    }
    if ( blockchainsTableButton !== "undefined" && blockchainsTableButton !== null) {
        blockchainsTableButton.forEach(function(e) {
            e.addEventListener('click', function(){
                blockchainsTableContant.forEach(function(e){
                    if(e.classList.contains('blockchains-table-contant-disable')){
                        e.classList.remove('blockchains-table-contant-disable')
                    }
                    else {
                        e.classList.add('blockchains-table-contant-disable')
                    }
                })
            })
        })
    }

    if ( blockchainsTableButton24h !== "undefined" && blockchainsTableButton24h !== null) {
        blockchainsTableButton24h.addEventListener('click', function() {
            blockchainsTableButton24h.classList.add('blockchains-table__button-24h-active');
            blockchainsTableButton7d.classList.remove('blockchains-table__button-active');
        })
    }
    if ( blockchainsTableButton7d !== "undefined" && blockchainsTableButton7d !== null) {
        blockchainsTableButton7d.addEventListener('click', function(){
            blockchainsTableButton7d.classList.add('blockchains-table__button-active');
            blockchainsTableButton24h.classList.remove('blockchains-table__button-24h-active')
        })
    }


    // slider
    if ( $('.wink-slide_list') !== "undefined" && $('.wink-slide_list') !== null) {

        $('.wink-slide_list').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots: true,
            responsive: [
                {
                breakpoint: 900,
                settings: {
                    dots: false,
                    // centerMode:true,
                } 
                }
            ]
        });   
    }

});