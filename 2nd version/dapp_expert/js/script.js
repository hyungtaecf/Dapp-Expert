//general use functions
function removeHash() {
    history.pushState("", document.title, window.location.pathname +
        window.location.search);
}

function addActiveSelectorEvent(commonParent, commonElement) {
    $(commonParent).find(commonElement).click(function() {
        $(commonParent).find(commonElement).removeClass("active")
        $(this).addClass("active")
    })
}

function hideClickingOff(element) {
    $(document).mouseup(function(e) {
        container = $(element);

        // If the target of the click isn't the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
    });
}

function dropdownInit(dropdown) {
    $(dropdown + " .field").click(function(e) {
        e.preventDefault();
        var $field = $(this)

        $field.closest(dropdown)
            .find(".option").stop().slideDown(150);
        $field.css({
            'border-bottom': 'none',
            'border-bottom-left-radius': '0',
            'border-bottom-right-radius': '0'
        })
    });

    $(dropdown + ' .option li').click(function(e) {
        e.preventDefault();
        $li = $(this)
        var option_value = $li.find('a').text();
        $li.closest(dropdown).find('.field .dropdown-current').text(option_value);
        $('.option').slideUp(150,
            function() {
                $li.closest(dropdown)
                    .find(".field").css({
                        'border': '1.5px solid #7BC143',
                        'border-radius': '34px',
                        'font-style': 'normal'
                    })
            }
        )
    });

    $(document).mouseup(function(e) {
        container = $(dropdown + " .option");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.closest(dropdown)
                .find(".field").css({
                    'border': '1.5px solid #7BC143',
                    'border-radius': '34px'
                })
            container.hide()
        }
    });
}

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
    const modalSmartContractBtn = document.querySelector('.modal-smart-contract-btn ');
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

    //стилизация option

    // if ($('.dapp__select') !== "undefined" && $('.dapp__select') !== null) {

    //     $('.dapp__select').select2({
    //         // placeholder: 'Select an Industry',
    //         allowClear: false,
    //         // tags: true,
    //         // maximumSelectionLength: 0
    //     });
    // }

    // добавление нового поля ввода social media
    if (socMediaBtn !== "undefined" && socMediaBtn !== null) {

        socMediaBtn.addEventListener('click', function() {
            let newInputSocMedia = document.createElement('input');
            newInputSocMedia.type = 'text';
            newInputSocMedia.className = 'dapp__input';
            socMediaList.append(newInputSocMedia)
        })
    }

    // добавление нового поля с картинкой
    if (scrinBtn !== "undefined" && scrinBtn !== null) {

        scrinBtn.addEventListener('click', function() {
            let newImgInput = document.createElement('div');
            newImgInput.className = 'dapp_drug soc-media-btn scrin-btn drag-img';
            let newSvgBtn = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
            newSvgBtn.setAttribute('width', 23);
            newSvgBtn.setAttribute('height', 23);
            newSvgBtn.setAttribute('viewBox', "0 0 23 23");
            newSvgBtn.setAttribute('fill', "none");
            newSvgBtn.setAttribute('xmlns', "http://www.w3.org/2000/svg");
            let newSvgPart = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            newSvgPart.setAttribute('d', "M22.5 12L1 12");
            newSvgPart.setAttribute('stroke', "black");
            newSvgPart.setAttribute('stroke-linecap', "round");
            newSvgPart.setAttribute('stroke-linejoin', "round");
            let newSvgPart2 = document.createElementNS('http://www.w3.org/2000/svg', 'path')
            newSvgPart2.setAttribute('d', "M12 1V22.5");
            newSvgPart2.setAttribute('stroke', "black");
            newSvgPart2.setAttribute('stroke-linecap', "round");
            newSvgPart2.setAttribute('stroke-linejoin', "round");
            let newInputImg = document.createElement('img');
            newInputImg.src = "images/drag-img.jpg";
            console.log(newInputImg)

            document.querySelector('.scrin-wrapper').append(newImgInput) //добавление кнопки
            newImgInput.append(newSvgBtn); //добавление svg в кнопку
            newSvgBtn.append(newSvgPart);
            newSvgBtn.append(newSvgPart2);
            newImgInput.addEventListener('click', function() {
                console.log(newImgInput.innerHTML)
                newSvgBtn.remove();
                newImgInput.append(newInputImg);
                if (dragImg !== "undefined" && dragImg !== null) {

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

    if (seeMoreUserVoice !== "undefined" && seeMoreUserVoice !== null) {
        seeMoreUserVoice.addEventListener('click', function() {
            userVoiceItem.forEach(function(e) {
                if (e.classList.contains('user-voice__item-disable')) {
                    e.classList.remove('user-voice__item-disable')
                } else {
                    e.classList.add('user-voice__item-disable')
                }
            })
        })
    }

    if (blockchainsSubItem !== "undefined" && blockchainsSubItem !== null) {

        blockchainsSubItem.forEach(function(e) {

            e.addEventListener('click', function() {
                blockchainsSubItem.forEach(function(e) {
                    e.classList.remove('blockchains__sub-item-active')
                });
                e.classList.add('blockchains__sub-item-active')
            })
        })
    }

    if (blockchainsScheduleCheckButton !== "undefined" && blockchainsScheduleCheckButton !== null) {
        blockchainsScheduleCheckButton.forEach(function(e) {

            e.addEventListener('click', function() {
                blockchainsScheduleCheckButton.forEach(function(e) {
                    e.classList.remove('blockchains-schedule_check-button-active')
                })
                e.classList.add('blockchains-schedule_check-button-active')


            })
        })
    }

    if (mobileHeaderOpen !== "undefined" && mobileHeaderOpen !== null) {
        mobileHeaderOpen.addEventListener('click', function() {
            mobileNav.classList.add('mobile-nav-active')
            mobileOverley.classList.add('mobile-overley-active')
            body.classList.add('body-overlay')

        })
    }

    if (closeMobileNav !== "undefined" && closeMobileNav !== null) {

        closeMobileNav.addEventListener('click', function() {
            mobileNav.classList.remove('mobile-nav-active')
            mobileOverley.classList.remove('mobile-overley-active')
            body.classList.remove('body-overlay')
        })
    }


    if (blockchainsSectionlist !== "undefined" && blockchainsSectionlist !== null) {
        blockchainsSectionlist.forEach(function(e) {
            e.addEventListener('click', function() {
                e.classList.toggle('blockchains__section-list-active')
            })
        })
    }

    if (smartContract !== "undefined" && smartContract !== null) {

        smartContract.addEventListener('click', function(e) {
            mobileOverley.classList.add('mobile-overley-active')
            body.classList.add('body-overlay')
            modaSmartContract.classList.add('modal-smart-contract-active')
        })
    }

    if (modalSmartContractBtn !== "undefined" && modalSmartContractBtn !== null) {

        modalSmartContractBtn.addEventListener('click', function() {
            mobileOverley.classList.remove('mobile-overley-active')
            body.classList.remove('body-overlay')
            modaSmartContract.classList.remove('modal-smart-contract-active')
        })
    }


    if (userVoiceButton !== "undefined" && userVoiceButton !== null) {
        userVoiceButton.addEventListener('click', function() {
            mobileOverley.classList.add('mobile-overley-active')
            body.classList.add('body-overlay')
            modalUserVoice.classList.add('modal-user-voice-active');
            document.querySelector('.user-voice').classList.add('user-voice-z-index');
        })
    }

    if (modalUserVoiceBtn !== "undefined" && modalUserVoiceBtn !== null) {

        modalUserVoiceBtn.addEventListener('click', function() {
            mobileOverley.classList.remove('mobile-overley-active')
            body.classList.remove('body-overlay')
            modalUserVoice.classList.remove('modal-user-voice-active');
            document.querySelector('.user-voice').classList.remove('user-voice-z-index');
        })
    }

    if (dragImg !== "undefined" && dragImg !== null) {

        dragImg.forEach(function(e) {
            e.addEventListener('click', function() {
                document.querySelector('.modal-drug-img').classList.add('modal-drug-img-active');
                mobileOverley.classList.add('mobile-overley-active')
                body.classList.add('body-overlay')
            })
        })

    }

    if (modalDrugImgBtn !== "undefined" && modalDrugImgBtn !== null) {

        modalDrugImgBtn.addEventListener('click', function() {
            document.querySelector('.modal-drug-img').classList.remove('modal-drug-img-active');
            mobileOverley.classList.remove('mobile-overley-active')
            body.classList.remove('body-overlay')
        })
    }
    if (blockchainsButtonAll !== "undefined" && blockchainsButtonAll !== null) {

        blockchainsButtonAll.addEventListener('click', function() {
            blockchainsButtonAll.classList.add('blockchains-button-all-active');
            blockchainsButtonEth.classList.remove('blockchains-button-active');
        })
    }

    if (blockchainsButtonEth !== "undefined" && blockchainsButtonEth !== null) {

        blockchainsButtonEth.addEventListener('click', function() {
            blockchainsButtonEth.classList.add('blockchains-button-active');
            blockchainsButtonAll.classList.remove('blockchains-button-all-active');
        })
    }
    if (blockchainsTableButton !== "undefined" && blockchainsTableButton !== null) {
        blockchainsTableButton.forEach(function(e) {
            e.addEventListener('click', function() {
                blockchainsTableContant.forEach(function(e) {
                    if (e.classList.contains('blockchains-table-contant-disable')) {
                        e.classList.remove('blockchains-table-contant-disable')
                    } else {
                        e.classList.add('blockchains-table-contant-disable')
                    }
                })
            })
        })
    }

    if (blockchainsTableButton24h !== "undefined" && blockchainsTableButton24h !== null) {
        blockchainsTableButton24h.addEventListener('click', function() {
            blockchainsTableButton24h.classList.add('blockchains-table__button-24h-active');
            blockchainsTableButton7d.classList.remove('blockchains-table__button-active');
        })
    }
    if (blockchainsTableButton7d !== "undefined" && blockchainsTableButton7d !== null) {
        blockchainsTableButton7d.addEventListener('click', function() {
            blockchainsTableButton7d.classList.add('blockchains-table__button-active');
            blockchainsTableButton24h.classList.remove('blockchains-table__button-24h-active')
        })
    }


    // slider
    if ($('.wink-slide_list') !== "undefined" && $('.wink-slide_list') !== null) {

        $('.wink-slide_list').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [{
                breakpoint: 900,
                settings: {
                    dots: false,
                    // centerMode:true,
                }
            }]
        });
    }

    // wow
    new WOW().init()


    //////////////////
    // LEGAL POLICY //
    //////////////////

    // On click select
    $(".legal_policy_select").on("click", function() {
        var btnId = $(this).find("button").attr("id")

        //clearing hash
        removeHash()

        //activate clicked button and deactivate others
        $("#legal-policy__list").find(".toggle").each(function() {
            $(this).removeClass("active")
            if ($(this).attr("id") === btnId) $(this).addClass("active")
        })

        //store state in the local storage
        localStorage.setItem("legal-policy-section", btnId)

        //hide-show
        if (btnId === "cookie-policy-btn") {
            $("#cookie-policy-title").show();
            $("#cookie-policy").show();
        } else {
            $("#cookie-policy-title").hide();
            $("#cookie-policy").hide();
        }
        if (btnId === "privacy-policy-btn") {
            $("#privacy-policy-title").show();
            $("#privacy-policy").show();
        } else {
            $("#privacy-policy-title").hide();
            $("#privacy-policy").hide();
        }
        if (btnId === "terms-of-use-btn") {
            $("#terms-of-use-title").show();
            $("#terms-of-use").show();
        } else {
            $("#terms-of-use-title").hide();
            $("#terms-of-use").hide();
        }
    })

    // On click footer links
    switch (window.location.hash.substr(1)) {
        case "cookie":
            $("#cookie-policy-btn").click()
            break;
        case "privacy":
            $("#privacy-policy-btn").click()
            break;
        case "terms":
            $("#terms-of-use-btn").click()
            break;
        default:
            $("#cookie-policy-btn").click()
            break;
    }

    //init
    switch (localStorage.getItem("legal-policy-section")) {
        case "cookie-policy-btn":
            $("#cookie-policy-btn").click()
            break;
        case "privacy-policy-btn":
            $("#privacy-policy-btn").click()
            break;
        case "terms-of-use-btn":
            $("#terms-of-use-btn").click()
            break;
        default:
            $("#cookie-policy-btn").click()
            break;
    }

    ///////////////////
    // RANKING TABLE //
    ///////////////////


    //BUTTONS
    addActiveSelectorEvent("#period-select", "button")
    addActiveSelectorEvent("#blockchain-select", "button")

    //INFO MESSAGE
    $(function() {
        $('[data-toggle="tooltip"]').tooltip({
            position: {
                my: "center bottom-20",
                at: "center top",
                using: function(position, feedback) {
                    $(this).css(position);
                    $("<div>")
                        .addClass("arrow")
                        .addClass(feedback.vertical)
                        .addClass(feedback.horizontal)
                        .appendTo(this);
                }
            }
        });
        $(".ui-helper-hidden-accessible").hide();
    });

    //CLICKABLE ROW
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });

    // Table Sticky top
    // var tableOffset = $("#ranking-table").offset().top;
    // var $header = $("#ranking-table > thead").clone();
    // var $fixedHeader = $("#header-fixed").append($header);
    // $(window).bind("scroll", function() {
    //     var offset = $(this).scrollTop();

    //     if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
    //         $fixedHeader.show();
    //     } else if (offset < tableOffset) {
    //         $fixedHeader.hide();
    //     }
    // });

    /////////////
    // NAVBAR  //
    /////////////

    // Language Button

    //hide-show toggle on click
    $("#language-btn").click(function() {
        $("#dropdown-language").toggle(function() { $(this).css({ display: "none" }) }, function() {})
    })
    $("#mobile-language-btn").click(function() {
        $("#dropdown-language").toggle(function() { $(this).css({ display: "none" }) }, function() {})
    })

    //hide when click off the dropdown menu
    hideClickingOff("#dropdown-language")

    // Side menu
    $("#side_menu_btn").click(function() {
        $(".sidenav").css("right", "0px");
    })

    $(".closebtn").click(function() {
        $(".sidenav").css("right", "-250px");
    })


    ///////////////
    // Dapp Form //
    ///////////////

    // Dropdown
    dropdownInit(".dapp-form-dropdown")

    // Textarea
    $('#full_description_textarea').keyup(function() {

        var characterCount = $(this).val().length;
        var countLabel = $('#full_description_count');

        countLabel.text(800 - characterCount);


        if (characterCount < 300) {
            countLabel.css('color', '#666');
        }
        if (characterCount >= 300 && characterCount < 400) {
            countLabel.css('color', '#6d5555');
        }
        if (characterCount >= 400 && characterCount < 500) {
            countLabel.css('color', '#793535');
        }
        if (characterCount >= 500 && characterCount < 600) {
            countLabel.css('color', '#841c1c');
        }
        if (characterCount >= 600 && characterCount < 700) {
            countLabel.css('color', '#8f0001');
        }

        if (characterCount >= 700) {
            countLabel.css('color', '#8f0001');
        }


    });

    /////////////////
    // BLOCKCHAINS //
    /////////////////

    // Dropdown
    dropdownInit("#period_dropdown")
    dropdownInit("#factor_dropdown")


});